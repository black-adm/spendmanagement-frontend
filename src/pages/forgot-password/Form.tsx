import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Separator } from "@/components/Separator";
import { server } from "@/lib/axios";
import {
  PersonIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function SignInForm() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();


  async function onSubmit() {
    const userName = watch("username");

    try {
      const formData = {
        client_id: "receipts-api",
        grant_type: "client_credentials",
        client_secret: "7aMsLHaSjLR9KtURpqGgdfcYqdEa8zbb"
      };

      //Obter token pra usar em todos os requests
      const responseGetToken = await server.post("realms/10000/protocol/openid-connect/token", formData);
      const token = "Bearer " + await responseGetToken.data.access_token;

      const responseGetUser = await server.get(`admin/realms/10000/users?username=${userName}`, {
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
      });

      if (responseGetUser.status == 200) {
        const userId = responseGetUser.data[0].id;
        console.log(userId);
        await server.put(`admin/realms/10000/users/${userId}/execute-actions-email`, ["UPDATE_PASSWORD"], {
          headers: {
            "Authorization": token,
            "Content-Type": "application/json"
          }
        });

        toast.success(
          `Foi enviado um e-mail para ${userName} com os passos para redefinição de senha!`, {
        });
      }
      else {
        toast.error(
          "Este e-mail não foi encontrado na nossa base de dados, por favor, crie uma conta.", {
        });
      }
    } catch {
      toast.error("Erro ao realizar fazer login", {
        description: "Verifique os dados digitados e tente novamente.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-3 items-center pt-10"
    >
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <PersonIcon className="ml-3 size-6" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="text"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={60}
          required
          {...register("username")}
        />
      </div>
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-primary-orange hover:text-white hover:opacity-90"
        >
          {!isSubmitting && <span>Recuperar senha</span>}
          {isSubmitting && (
            <ReloadIcon className="size-4 text-white animate-spin" />
          )}
        </Button>
      </div>
    </form>
  );
}
