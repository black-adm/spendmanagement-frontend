import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Separator } from "@/components/Separator";
import { TogglePasswordButton } from "@/components/TogglePasswordButton";
import { server } from "@/lib/axios";
import {
  LockClosedIcon,
  ReloadIcon
} from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function LoginForm() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  async function onSubmit() {
    const formData = {
      client_id: "receipts-api",
      grant_type: "password",
      client_secret: "7aMsLHaSjLR9KtURpqGgdfcYqdEa8zbb",
      scope: "receipts-read receipts-write",
      username: watch("username"),
      password: watch("password"),
    };

    try {
      const tokenInfo = await server.post("realms/10000/protocol/openid-connect/token", formData);

      if (tokenInfo.status === 200) {
        localStorage.setItem("tokenId", tokenInfo.data.access_token);
        localStorage.setItem("refresh_token", tokenInfo.data.access_token);

        toast.success("Login realizado com sucesso!", {
          description: "Aguarde, você será redirecionado ...",
        });
        navigate('/dashboard')
      }
    } catch {
      toast.error("Erro ao realizar fazer login", {
        description: "Verifique os dados digitados e tente novamente.",
      });
    }
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-3 items-center pt-10"
    >
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <MailIcon className="ml-3 size-6" />
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
        <LockClosedIcon className="ml-3 size-7" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type={showPassword ? "text" : "password"}
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg tracking-widest placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={10}
          required
          {...register("password")}
        />
        <TogglePasswordButton
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-primary-orange hover:text-white hover:opacity-90"
        >
          {!isSubmitting && <span>Fazer login</span>}
          {isSubmitting && (
            <ReloadIcon className="size-4 text-white animate-spin" />
          )}
        </Button>
      </div>
    </form>
  );
}
