import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Separator } from "@/components/Separator";
import { server } from "@/lib/axios";
import { ReloadIcon } from "@radix-ui/react-icons";
import { MailSearchIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function ForgotPasswordForm() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  async function onSubmit() {
    const userName = watch("username");

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
      const responseGetUser = await server.get(
        `admin/realms/10000/users?username=${userName}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (responseGetUser.status == 200) {
        const userId = responseGetUser.data[0].id;

        await server.put(
          `admin/realms/10000/users/${userId}/execute-actions-email`,
          ["UPDATE_PASSWORD"],
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        toast.message('LINK DE REDEFINIR SENHA ENVIADO', {
          description: 'Verifique o email ${userName} e siga as instruções para recuperar seu acesso.',
        })
        navigate("/login");
      }
    } catch {
      toast.error('OCORREU UM ERRO NA SOLICITAÇÃO', {
        description: 'O e-mail informado não possui cadastro no sistema.'
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-5 py-10 w-full mx-auto max-w-sm"
    >
      <div className="pb-8">
        <h2 className="font-bold text-3xl">
          Informe seu e-mail para <span className="text-primary-orange">recuperar</span> o acesso
        </h2>
        <p className="pt-1.5 font-light text-lg text-muted-foreground">
          Digite um e-mail válido em nossa base de dados, <br />
          enviaremos um link com as instruções de acesso.
        </p>
      </div>

      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <MailSearchIcon className="ml-3 size-6" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="email"
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
          {!isSubmitting && <span>Redefinir senha</span>}
          {isSubmitting && (
            <ReloadIcon className="size-4 text-white animate-spin" />
          )}
        </Button>
      </div>
    </form>
  );
}
