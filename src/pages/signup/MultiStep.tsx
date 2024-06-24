import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { server } from "@/lib/axios";
import {
  EnvelopeClosedIcon,
  EyeClosedIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import {
  CalendarIcon,
  InfoIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from "lucide-react";
import { toast } from "sonner";
import { SignUpSection } from "./Section";

// Definindo o esquema de validação com zod
const schema = z.object({
  name: z.string().min(5, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  phone: z.string().optional(),
  birthdate: z.string().optional(),
  gender: z.string().optional(),
  cep: z.string().optional(),
  address: z.string().optional(),
}).refine(data => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
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

  const [currentStep, setCurrentStep] = useState(0);
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

  const [errors, setErrors] = useState<FieldErrors>({});

  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Limpar o erro do campo específico ao digitar
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  function handleNextStep() {
    const result = schema.safeParse(formValues);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.errors.forEach(error => {
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

  async function createUser(event: any) {
    event.preventDefault();

    const result = schema.safeParse(formValues);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.errors.forEach(error => {
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
        client_secret: "7aMsLHaSjLR9KtURpqGgdfcYqdEa8zbb"
      };

      // Obter token pra usar em todos os requests
      const responseGetToken = await server.post("realms/10000/protocol/openid-connect/token", formData);
      const token = "Bearer " + await responseGetToken.data.access_token;
      const nameParts = formValues.name.split(" ");
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(" ") || '';

      const formDataCreateUser = {
        enabled: true,
        username: formValues.email,
        firstName: firstName,
        lastName: lastName,
        email: formValues.email,
        emailVerified: false,
        attributes: {
          "zoneinfo": [formValues.address + ' ' + formValues.cep],
          "birthdate": [formValues.birthdate],
          "phoneNumber": [formValues.phone],
          "gender": [formValues.gender],
          "fullname": [formValues.name],
          "tenant": [100000],
          "picture": ["somelink"]
        }
      }

      // Criar usuario
      const responseSaveUser = await server.post("admin/realms/10000/users", formDataCreateUser, {
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
      });

      // Se criado com sucesso, devemos buscar pelo nome de usuário para obter o ID
      if (responseSaveUser.status === 201) {
        const responseGetUser = await server.get(`admin/realms/10000/users`, {
          headers: {
            "Authorization": token,
            "Content-Type": "application/json"
          },
          params: { email: formValues.email }
        });

        const userId = responseGetUser.data[0].id;

        // Em seguida deve-se definir uma senha para o usuário, seguindo o que foi escrito no campo.
        const passwordData = {
          type: "password",
          temporary: false,
          value: formValues.password,
        };

        await server.put(`admin/realms/10000/users/${userId}/reset-password`, passwordData, {
          headers: {
            "Authorization": token,
            "Content-Type": "application/json"
          }
        });

        // Configurar required action
        await server.put(`admin/realms/10000/users/${userId}`, {
          requiredActions: ["VERIFY_EMAIL"]
        }, {
          headers: {
            "Authorization": token,
            "Content-Type": "application/json"
          }
        });

        // Enviar email pra confirmar e-mail
        await server.put(`admin/realms/10000/users/${userId}/send-verify-email`, null, {
          headers: {
            "Authorization": token,
            "Content-Type": "application/json"
          }
        });

        // Obter todos os grupos do realm
        const groupsResponse = await server.get(`admin/realms/10000/groups`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json"
          }
        });

        const groups = groupsResponse.data;

        // Mapear os IDs dos grupos que você deseja adicionar o usuário
        const groupsToAdd = ["Api Readers", "Api Writers"]; // Nomes dos grupos que você quer adicionar o usuário
        const addGroupsPromises = [];

        groupsToAdd.forEach(groupName => {
          const group = groups.find((g: { id: string, name: string }) => g.name === groupName);
          if (group) {
            const groupId = group.id;
            addGroupsPromises.push(
              server.put(`admin/realms/10000/users/${userId}/groups/${groupId}`, {}, {
                headers: {
                  Authorization: token,
                  "Content-Type": "application/json"
                }
              })
            );
          } else {
            console.error(`Group '${groupName}' not found`);
          }
        });
      }

      toast.success(
        "Login realizado com sucesso!", {
        description: "Aguarde, você será redirecionado ..."
      });

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 3000);

    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        // Se o erro for devido a conflito (usuário já existe), trate conforme necessário
        toast.error(
          "Erro ao criar usuário", {
          description: "Este e-mail já está em uso. Se você esqueceu a sua senha, clique em fazer login e redefina a senha."
        });
      } else {
        // Se houver outro tipo de erro, exiba uma mensagem genérica de erro
        console.error("Erro ao criar usuário:", error);
        toast.error(
          "Erro ao criar usuário", {
          description: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde."
        });
      }
    }
  }

  return (
    <form onSubmit={createUser} className="w-screen h-auto">
      <div className="flex flex-col max-w-sm mx-auto w-full">
        <div className="space-y-3 pb-5">
          {/* Dados pessoais */}
          {steps[currentStep].id === "PERSONAL" && (
            <>
              <div className="flex flex-col">
                <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                  <UserCircleIcon className="ml-3 size-7" />
                  <Separator className="w-0.5 h-3.5 bg-gray-300" />
                  <Input
                    type="text"
                    placeholder="Nome completo"
                    className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                    maxLength={60}
                    required
                    onChange={handleInputChange}
                    value={formValues.name}
                    name="name"
                  />
                </div>
                {errors.name && <span className="text-red-500 mt-1 ml-3 block">{errors.name}</span>}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                  <EnvelopeClosedIcon className="ml-3 size-6" />
                  <Separator className="w-0.5 h-3.5 bg-gray-300" />
                  <Input
                    type="text"
                    placeholder="Email"
                    className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                    maxLength={60}
                    required
                    onChange={handleInputChange}
                    value={formValues.email}
                    name="email"
                  />
                </div>
                {errors.email && <span className="text-red-500 mt-1 ml-3 block">{errors.email}</span>}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                  <LockClosedIcon className="ml-3 size-7" />
                  <Separator className="w-0.5 h-3.5 bg-gray-300" />
                  <Input
                    type="password"
                    placeholder="Senha"
                    className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg tracking-widest placeholder:text-primary-gray focus-visible:ring-0"
                    maxLength={60}
                    required
                    onChange={handleInputChange}
                    value={formValues.password}
                    name="password"
                  />
                  <button type="button" className="pr-4 bg-none">
                    <EyeClosedIcon className="size-5" />
                  </button>
                </div>
                {errors.password && <span className="text-red-500 mt-1 ml-3 block">{errors.password}</span>}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                  <LockClosedIcon className="ml-3 size-7" />
                  <Separator className="w-0.5 h-3.5 bg-gray-300" />
                  <Input
                    type="password"
                    placeholder="Confirmar senha"
                    className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg tracking-widest placeholder:text-primary-gray focus-visible:ring-0"
                    maxLength={60}
                    required
                    onChange={handleInputChange}
                    value={formValues.confirmPassword}
                    name="confirmPassword"
                  />
                  <button type="button" className="pr-4 bg-none">
                    <EyeClosedIcon className="size-5" />
                  </button>
                </div>
                {errors.confirmPassword && <span className="text-red-500 mt-1 ml-3 block">{errors.confirmPassword}</span>}
              </div>

            </>
          )}

          {/* Dados da conta */}
          {steps[currentStep].id === "ACCOUNT" && (
            <>
              <div className="flex flex-col">
                <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                  <PhoneIcon className="ml-3 size-6" />
                  <Separator className="w-0.5 h-3.5 bg-gray-300" />
                  <Input
                    type="text"
                    placeholder="Telefone"
                    className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                    maxLength={60}
                    required
                    onChange={handleInputChange}
                    value={formValues.phone}
                    name="phone"
                  />
                  {errors.phone && <span className="text-red-500 mt-1 ml-3 block">{errors.phone}</span>}
                </div>
              </div>
              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <CalendarIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="date"
                  placeholder="Data do nascimento"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={60}
                  required
                  onChange={handleInputChange}
                  value={formValues.birthdate}
                  name="birthdate"
                />
              </div>
              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <InfoIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <select
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  required
                  onChange={handleInputChange}
                  value={formValues.gender}
                  name="gender"
                >
                  <option value="" disabled>Selecione o gênero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Não Binário">Não Binário</option>
                  <option value="Prefiro não dizer">Prefiro não dizer</option>
                </select>
              </div>

              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <MapIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="text"
                  placeholder="CEP"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={60}
                  required
                  onChange={handleInputChange}
                  value={formValues.cep}
                  name="cep"
                />
              </div>

              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <MapPinIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="text"
                  placeholder="Endereço"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={60}
                  required
                  onChange={handleInputChange}
                  value={formValues.address}
                  name="address"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between mt-4">
          {currentStep > 0 && (
            <Button type="button" onClick={handlePreviousStep}>
              Voltar
            </Button>
          )}
          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={handleNextStep}>
              Próximo
            </Button>
          ) : (
            <Button type="submit">
              Enviar
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
