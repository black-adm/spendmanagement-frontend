import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Separator } from "@/components/Separator";
import { server } from "@/lib/axios";
import {
  EyeClosedIcon,
  EyeOpenIcon,
  LockClosedIcon,
  PersonIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function SignInForm() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit() {
    const formData = {
      client_id: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
      grant_type: import.meta.env.VITE_KEYCLOAK_GRANT_TYPE,
      client_secret: import.meta.env.VITE_KEYCLOAK_CLIENT_SECRET,
      username: watch("username"),
      password: watch("password"),
    };

    try {
      await server.post("/token", formData);
      toast.success("Login realizado com sucesso!", {
        description: "Aguarde, você será redirecionado ...",
      });
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
        <button
          type="button"
          onClick={toggleShowPassword}
          className="pr-4 bg-none"
        >
          {showPassword ? (
            <EyeOpenIcon className="size-5" />
          ) : (
            <EyeClosedIcon className="size-5" />
          )}
        </button>
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
