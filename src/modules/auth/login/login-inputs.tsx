import { KeySquare, Mail, ShieldAlert } from 'lucide-react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ValidateInputForm } from './login-form';

interface LoginInputsProps {
  register: UseFormRegister<ValidateInputForm>
  errors: FieldErrors<ValidateInputForm>
}

export function LoginInputs({ register, errors }: LoginInputsProps) {
  return (
    <>
      <div className="flex items-center border-2 border-black rounded-lg">
        <Mail className="ml-4 size-6" />
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="flex py-2 ml-2 sm:ml-0 w-full md:px-3 md:py-3 outline-none border-none font-medium placeholder-font-normal"
          {...register('email')}
        />
      </div>
      {errors.email && (
        <span className="flex items-center gap-x-2.5 text-xs font-medium tracking-tight text-primary-red">
          <ShieldAlert className="h-4 w-4" />
          {errors.email.message}
        </span>
      )}

      <div className="flex items-center border-2 border-black rounded-lg">
        <KeySquare className="ml-4 size-6" />
        <input
          type="password"
          placeholder="Digite sua senha"
          className="flex py-2 ml-2 sm:ml-0 w-full md:px-3 md:py-3 outline-none border-none font-medium placeholder-font-normal"
          {...register('password')}
        />
      </div>
      {errors.password && (
        <span className="flex items-center gap-x-2.5 text-xs font-medium tracking-tight text-primary-red">
          <ShieldAlert className="h-4 w-4" />
          {errors.password.message}
        </span>
      )}
    </>
  )
}
