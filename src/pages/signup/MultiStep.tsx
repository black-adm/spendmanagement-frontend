import { Button } from "@/components/Button";
import { Calendar } from "@/components/Calendar";
import { Input } from "@/components/Input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { TogglePasswordButton } from "@/components/TogglePasswordButton";
import { server } from "@/lib/axios";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import {
  CalendarIcon,
  LockKeyholeIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
  SearchIcon,
  UserCircleIcon,
} from "lucide-react";
import { FormEvent, useState } from "react";
import MaskedInput from "react-input-mask";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const schema = z
  .object({
    name: z.string().min(5, "O Nome é um campo obrigatório."),
    email: z.string().email("O Email informado é inválido."),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmPassword: z.string().min(6, "A confirmação da senha é inválida."),
    phone: z.string().optional(),
    birthdate: z.string().optional(),
    gender: z.string().optional(),
    cep: z.string().optional(),
    address: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Ocorreu um erro! As senhas devem ser idênticas.",
    path: ["confirmPassword"],
  });

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  birthdate?: string;
  gender?: string;
  cep?: string;
  address?: string;
}

interface FieldErrors {
  [key: string]: string;
}

export function MultiStep() {
  const steps = [
    { id: "PERSONAL", title: "Dados pessoais" },
    { id: "ACCOUNT", title: "Dados da conta" },
  ];
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthdate: "",
    gender: "",
    cep: "",
    address: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const navigate = useNavigate();

  function handleInputChange(event: any) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  function handleDateSelect(selectedDate: Date | undefined) {
    setDate(selectedDate);

    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      setFormValues((prevState) => ({
        ...prevState,
        birthdate: formattedDate,
      }));
    }
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleNextStep() {
    const result = schema.safeParse(formValues);

    if (!result.success) {
      const fieldErrors: FieldErrors = {};

      result.error.errors.forEach((error) => {
        if (error.path.length > 0) {
          const key = error.path[0];
          fieldErrors[key] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePreviousStep() {
    setCurrentStep((prevState) => prevState - 1);
  }

  async function createUser(event: FormEvent) {
    event.preventDefault();
    const result = schema.safeParse(formValues);

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.errors.forEach((error) => {
        if (error.path.length > 0) {
          const key = error.path[0];
          fieldErrors[key] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    try {
      const formData = {
        client_id: "receipts-api",
        grant_type: "client_credentials",
        client_secret: "7aMsLHaSjLR9KtURpqGgdfcYqdEa8zbb",
      };
      const responseGetToken = await server.post(
        "realms/10000/protocol/openid-connect/token",
        formData
      );

      const token = "Bearer " + (await responseGetToken.data.access_token);
      const nameParts = formValues.name.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const formDataCreateUser = {
        enabled: true,
        username: formValues.email,
        firstName: firstName,
        lastName: lastName,
        email: formValues.email,
        emailVerified: false,
        attributes: {
          zoneinfo: [formValues.address + " " + formValues.cep],
          birthdate: [formValues.birthdate],
          phoneNumber: [formValues.phone],
          gender: [formValues.gender],
          fullname: [formValues.name],
          tenant: [100000],
          picture: ["somelink"],
        },
      };

      const responseSaveUser = await server.post(
        "admin/realms/10000/users",
        formDataCreateUser,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (responseSaveUser.status === 201) {
        const responseGetUser = await server.get(`admin/realms/10000/users`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          params: { email: formValues.email },
        });
        const userId = responseGetUser.data[0].id;
        const passwordData = {
          type: "password",
          temporary: false,
          value: formValues.password,
        };

        await server.put(
          `admin/realms/10000/users/${userId}/reset-password`,
          passwordData,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        await server.put(
          `admin/realms/10000/users/${userId}`,
          {
            requiredActions: ["VERIFY_EMAIL"],
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        await server.put(
          `admin/realms/10000/users/${userId}/send-verify-email`,
          null,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        const groupsResponse = await server.get(`admin/realms/10000/groups`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        const groups = groupsResponse.data;
        const groupsToAdd = ["Api Readers", "Api Writers"];
        const addGroupsPromises = [];

        groupsToAdd.forEach((groupName) => {
          const group = groups.find(
            (g: { id: string; name: string }) => g.name === groupName
          );

          if (group) {
            const groupId = group.id;
            addGroupsPromises.push(
              server.put(
                `admin/realms/10000/users/${userId}/groups/${groupId}`,
                {},
                {
                  headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                  },
                }
              )
            );
          }
        });
      }

      toast.success("SUA CONTA FOI CADASTRADA", {
        description: "Aguarde, você será redirecionado em instantes ...",
      });
      navigate("/dashboard");
    } catch (error: any) {
      if (error?.response && error?.response.status === 409) {
        toast.error("O EMAIL DIGITADO JÁ ESTÁ EM USO", {
          description:
            "Este e-mail já está em uso. Se você esqueceu a sua senha, clique em fazer login e redefina a senha.",
        });
      } else {
        toast.error("ERRO AO CADASTRAR SUA CONTA", {
          description:
            "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.",
        });
      }
    }
  }

  return (
    <form onSubmit={createUser} className="w-full h-auto">
      <div className="flex flex-col mx-auto w-full">
        <div className="space-y-3 pb-5">
          {steps[currentStep].id === "PERSONAL" && (
            <>
              <div className="flex flex-col">
                <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                  <UserCircleIcon className="ml-3 size-7" strokeWidth={1.5} />
                  <Separator className="w-0.5 h-3.5 bg-gray-300" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nome completo"
                    className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                    maxLength={60}
                    required
                    onChange={handleInputChange}
                    value={formValues.name}
                  />
                </div>
                {errors.name && (
                  <span className="text-red-500 mt-1 ml-3 block">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                  <EnvelopeClosedIcon className="ml-3 size-6" />
                  <Separator className="w-0.5 h-3.5 bg-gray-300" />
                  <Input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                    maxLength={60}
                    required
                    onChange={handleInputChange}
                    value={formValues.email}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 mt-1 ml-3 block">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                  <LockClosedIcon className="ml-3 size-7" />
                  <Separator className="w-0.5 h-3.5 bg-gray-300" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg tracking-widest placeholder:text-primary-gray focus-visible:ring-0"
                    maxLength={60}
                    required
                    onChange={handleInputChange}
                    value={formValues.password}
                    name="password"
                  />
                  <TogglePasswordButton
                    showPassword={showPassword}
                    toggleShowPassword={toggleShowPassword}
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500 mt-1 ml-3 block">
                    {errors.password}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                  <LockKeyholeIcon className="ml-3 size-7" />
                  <Separator className="w-0.5 h-3.5 bg-gray-300" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirmar senha"
                    className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg tracking-widest placeholder:text-primary-gray focus-visible:ring-0"
                    maxLength={60}
                    required
                    onChange={handleInputChange}
                    value={formValues.confirmPassword}
                    name="confirmPassword"
                  />
                  <TogglePasswordButton
                    showPassword={showPassword}
                    toggleShowPassword={toggleShowPassword}
                  />
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500 mt-1 ml-3 block">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </>
          )}

          {steps[currentStep].id === "ACCOUNT" && (
            <>
              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <MapIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <MaskedInput
                  mask="99999-999"
                  maskChar=""
                  name="cep"
                  placeholder="CEP"
                  className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  onChange={handleInputChange}
                  value={formValues.cep}
                  required
                />
              </div>

              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <MapPinIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  name="address"
                  type="text"
                  placeholder="Endereço"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  onChange={handleInputChange}
                  value={formValues.address}
                  maxLength={100}
                  required
                />
              </div>

              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <PhoneIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <MaskedInput
                  mask="99 99999-9999"
                  maskChar=""
                  placeholder="Telefone"
                  className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  onChange={handleInputChange}
                  value={formValues.phone}
                  inputMode={"tel"}
                  name="phone"
                  required
                />
                {errors.phone && (
                  <span className="text-red-500 mt-1 ml-3 block">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <CalendarIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <MaskedInput
                  mask="99/99/9999"
                  maskChar=""
                  placeholder="Data de nascimento"
                  className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  onChange={handleInputChange}
                  value={formValues.birthdate}
                  name="birthdate"
                  required
                />

                <Popover>
                  <div className="pr-3">
                    <PopoverTrigger asChild>
                      <SearchIcon className="size-5 hover:text-primary-orange" />
                    </PopoverTrigger>
                  </div>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateSelect}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Select
                  name="gender"
                  onValueChange={(value) =>
                    setFormValues((prevState) => ({
                      ...prevState,
                      gender: value,
                    }))
                  }
                  value={formValues.gender}
                  required
                >
                  <SelectTrigger className="flex items-center space-x-0 p-5 rounded-lg border-2 border-gray-300">
                    <SelectValue placeholder="Selecione o gênero" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Como você se identifica?</SelectLabel>
                      <SelectItem value="Masculino">Masculino</SelectItem>
                      <SelectItem value="Feminino">Feminino</SelectItem>
                      <SelectItem value="Não Binário">Não Binário</SelectItem>
                      <SelectItem value="Prefiro não dizer">
                        Prefiro não dizer
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-2">
          {currentStep > 0 && (
            <Button
              type="button"
              variant="ghost"
              onClick={handlePreviousStep}
              className="font-medium tracking-wide hover:text-primary-orange"
            >
              Voltar
            </Button>
          )}
          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={handleNextStep}>
              Próximo
            </Button>
          ) : (
            <Button type="submit">Enviar</Button>
          )}
        </div>
      </div>
    </form>
  );
}
