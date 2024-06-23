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
import { useState } from "react";
import { toast } from "sonner";

export function MultiStep() {
  const steps = [
    {
      id: "PERSONAL",
      title: "Dados pessoais",
    },
    {
      id: "ACCOUNT",
      title: "Dados da conta",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthdate: "",
    gender: "",
    cep: "",
    address: ""
  });

  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleNextStep() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePreviousStep() {
    setCurrentStep((prevState) => prevState - 1);
  }

  async function createUser(event: any) {
    event.preventDefault();

    try {
      const formData = {
        client_id: "receipts-api",
        grant_type: "client_credentials",
        client_secret: "7aMsLHaSjLR9KtURpqGgdfcYqdEa8zbb"
      };

      //Obter token pra usar em todos os requests
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

      //Criar usuario
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
        console.log(userId);

        //Em seguida deve-se definir uma senha para o usuário, seguindo o que foi escrito no campo.
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

        //Enviar email pra confirmar e-mail
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
              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <LockClosedIcon className="ml-3 size-7" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="password"
                  placeholder="Senha"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg tracking-widest placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={10}
                  required
                  onChange={handleInputChange}
                  value={formValues.password}
                  name="password"
                />
                <button type="button" className="pr-4 bg-none">
                  <EyeClosedIcon className="size-5" />
                </button>
              </div>
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
              </div>
            </>
          )}

          {/* Dados da conta */}
          {steps[currentStep].id === "ACCOUNT" && (
            <>
              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <CalendarIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="text"
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
                <Input
                  type="text"
                  placeholder="Genêro"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={60}
                  required
                  onChange={handleInputChange}
                  value={formValues.gender}
                  name="gender"
                />
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

        {currentStep > 0 && (
          <Button
            type="button"
            onClick={handlePreviousStep}
            className="my-2 bg-white text-primary-orange hover:bg-primary-orange hover:text-white"
          >
            Voltar
          </Button>
        )}
        {currentStep < steps.length - 1 && (
          <Button type="button" onClick={handleNextStep} className="my-2">
            Próximo
          </Button>
        )}

        {currentStep === steps.length - 1 && (
          <Button type="submit">Cria uma conta</Button>
        )}
      </div>
    </form>
  );
}
