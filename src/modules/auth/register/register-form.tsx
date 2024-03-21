import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Key, LockKeyhole, Mails, ShieldAlert } from 'lucide-react'
import { UseFormRegister } from 'react-hook-form'
import { CreateInputForm } from './register-modal'

interface RegisterFormProps {
  register: UseFormRegister<CreateInputForm>
  errors: any
}

export function RegisterForm({ register, errors }: RegisterFormProps) {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="email" className="inline-flex items-center gap-x-2">
          <Mails className="size-[18px] text-primary-orange" />
          Email
        </Label>
        <Input
          type="email"
          placeholder="seu-email@test.com"
          {...register('email')}
        />
      </div>
      {errors.email && (
        <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
          <ShieldAlert className="size-4" />
          {errors.email.message}
        </span>
      )}

      <div className="grid gap-2">
        <Label htmlFor="password" className="inline-flex items-center gap-x-2">
          <LockKeyhole className="size-[18px] text-primary-orange" />
          Senha
        </Label>
        <Input
          className="placeholder:text-sm"
          type="password"
          placeholder="Deve conter número, 1 maiúscula e 1 caractere especial"
          {...register('password')}
        />
      </div>
      {errors.password && (
        <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
          <ShieldAlert className="size-4" />
          {errors.password.message}
        </span>
      )}

      <div className="grid gap-2">
        <Label htmlFor="password" className="inline-flex items-center gap-x-2">
          <Key className="size[18px] text-primary-orange" />
          Repita sua senha
        </Label>
        <Input
          type="password"
          placeholder="Digite sua senha novamente"
          {...register('passwordConfirmation')}
        />
      </div>
      {errors.passwordConfirmation && (
        <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
          <ShieldAlert className="size-4" />
          {errors.passwordConfirmation.message}
        </span>
      )}
    </>
  )
}
