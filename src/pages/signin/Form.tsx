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

export function SignInForm() {

  const { watch, register } = useForm();

  async function handleSubmit(event: any) {
    event.preventDefault();

    const formData = {
      client_id: "",
      grant_type: "password",
      client_secret: "",
      username: watch("username"),
      password: watch("password"),
    };

    console.log("parou aqui");
    try {
      const response = await server.post("/token", formData);
      toast.success(
        "Login realizado com sucesso!", {
        description: "Aguarde, você será redirecionado ..."
      }
      );
      return response;
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
