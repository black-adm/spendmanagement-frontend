import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Separator } from "@/components/Separator";
import { TogglePasswordButton } from "@/components/TogglePasswordButton";
import { RegisterFormSchema } from "@/schemas/registerForm";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { KeySquareIcon } from "lucide-react";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface AccountFormRegisterProps {
  register: UseFormRegister<RegisterFormSchema>
  errors: FieldErrors<RegisterFormSchema>
}

export function AccountFormRegister({ register, errors }: AccountFormRegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">Terceira etapa</h1>
        <h2 className="text-lg font-bold mb-2 uppercase">Dados de acesso</h2>
        <p className="text-muted-foreground font-light italic tracking-wide">
          Crie suas credenciais de acesso.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="username">Email</Label>
          <div className="mt-2 flex items-center space-x-2 rounded-lg border-2 border-gray-300">
            <EnvelopeClosedIcon className="ml-3 size-5" />
            <Separator className="w-0.5 h-3.5 bg-gray-300" />
            <Input
              type="email"
              className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none text-lg font-medium focus-visible:ring-0"
              maxLength={60}
              required
              {...register('username')}
            />
          </div>
          {errors.username && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.username.message}
            </span>
          )}
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <div className="mt-2 flex items-center space-x-2 rounded-lg border-2 border-gray-300">
            <LockClosedIcon className="ml-3 size-6" />
            <Separator className="w-0.5 h-3.5 bg-gray-300" />
            <Input
              type={showPassword ? "text" : "password"}
              className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none text-lg font-medium focus-visible:ring-0"
              maxLength={10}
              required
              {...register('password')}
            />
            <TogglePasswordButton
              showPassword={showPassword}
              toggleShowPassword={toggleShowPassword}
            />
          </div>
          {errors.password && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.password.message}
            </span>
          )}
        </div>

        <div>
          <Label htmlFor="confirmPassword">Confirme sua senha</Label>
          <div className="mt-2 flex items-center space-x-2 rounded-lg border-2 border-gray-300">
            <KeySquareIcon className="ml-3 size-6" />
            <Separator className="w-0.5 h-3.5 bg-gray-300" />
            <Input
              type={showConfirmPassword ? "text" : "password"}
              className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none text-lg font-medium focus-visible:ring-0"
              maxLength={10}
              required
              {...register('confirmPassword')}
            />
            <TogglePasswordButton
              showPassword={showConfirmPassword}
              toggleShowPassword={toggleShowConfirmPassword}
            />
          </div>
          {errors.confirmPassword && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
