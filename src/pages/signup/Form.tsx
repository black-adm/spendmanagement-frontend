import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Separator } from "@/components/Separator";
import { server } from "@/lib/axios";
import {
  EnvelopeClosedIcon,
  EyeClosedIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

export function SignUpForm() {

  const { watch, register } = useForm();

  async function handleSubmit(event: any) {
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

      const nameParts = watch("fullname").split(" ");
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(" ") || '';

      const formDataCreateUser = {
        enabled: true,
        username: watch("username"),
        firstName: firstName,
        lastName: lastName,
        email: watch("email"),
        emailVerified: true,
        attributes: {
          "zoneinfo": [watch("zoneinfo")],
          "birthdate": [watch("birthdate")],
          "phoneNumber": [watch("phoneNumber")],
          "gender": [watch("gender")],
          "fullname": [watch("fullname")],
          "tenant": [100000],
          "picture": [watch("picture")]
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
          params: { email: watch("email") }
        });

        const userId = responseGetUser.data[0].id;
        console.log(userId);

        //Em seguida deve-se definir uma senha para o usuário, seguindo o que foi escrito no campo.
        const passwordData = {
          type: "password",
          temporary: false,
          value: watch("password")
        };

        await server.put(`admin/realms/10000/users/${userId}/reset-password`, passwordData, {
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

    } catch {
      toast.error(
        "Erro ao realizar fazer login", {
        description: "Verifique os dados digitados e tente novamente."
      }
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3 items-center pt-10">
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <EnvelopeClosedIcon className="ml-3 size-6" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="text"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={60}
          required
          {...register("username")}
        />
      </div>
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <EnvelopeClosedIcon className="ml-3 size-6" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="text"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={60}
          required
          {...register("fullname")}
        />
      </div>
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <EnvelopeClosedIcon className="ml-3 size-6" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="text"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={60}
          required
          {...register("email")}
        />
      </div>
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <EnvelopeClosedIcon className="ml-3 size-6" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="text"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={60}
          required
          {...register("password")}
        />
      </div>
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <EnvelopeClosedIcon className="ml-3 size-6" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="text"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={60}
          required
          {...register("birthdate")}
        />
      </div>
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <EnvelopeClosedIcon className="ml-3 size-6" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="text"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={60}
          required
          {...register("gender")}
        />
      </div>
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <EnvelopeClosedIcon className="ml-3 size-6" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="text"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={60}
          required
          {...register("phone_number")}
        />
      </div>
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <EnvelopeClosedIcon className="ml-3 size-6" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="text"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={60}
          required
          {...register("zoneinfo")}
        />
      </div>
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <LockClosedIcon className="ml-3 size-7" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="password"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg tracking-widest placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={10}
          required
          {...register("password")}
        />
        <button type="button" className="pr-4 bg-none">
          <EyeClosedIcon className="size-5" />
        </button>
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          className="w-full text-primary-orange hover:text-white hover:opacity-90"
        >
          Fazer login
        </Button>
      </div>
    </form>
  );
}
