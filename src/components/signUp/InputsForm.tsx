import { UseFormRegister } from 'react-hook-form';
import { CreateInputForm } from './ModalSignUp';
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface InputsFormProps {
  register: UseFormRegister<CreateInputForm>;
  errors: any;
}

export function InputsForm({ register, errors }: InputsFormProps) {
    return (
        <>
            <div className="grid gap-2">
                <Label htmlFor="email" className="inline-flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-orange lucide lucide-mails"><rect width="16" height="13" x="6" y="4" rx="2" /><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" /><path d="M2 8v11c0 1.1.9 2 2 2h14" /></svg>
                    Email
                </Label>
                <Input
                    type="email"
                    placeholder="seu-email@test.com"
                    {...register('email')}
                />
            </div>
            {errors.email &&
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                    {errors.email.message}
                </span>
            }

            <div className="grid gap-2">
                <Label htmlFor="password" className="inline-flex items-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-orange lucide lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>                    Senha
                </Label>
                <Input
                    className="placeholder:text-sm"
                    type="password"
                    placeholder="Deve conter número, 1 maiúscula e 1 caractere especial"
                    {...register('passsword')}
                />
            </div>
            {errors.passsword &&
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                    {errors.passsword.message}
                </span>
            }

            <div className="grid gap-2">
                <Label htmlFor="password" className="inline-flex items-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-orange lucide lucide-key"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>
                    Repita sua senha
                </Label>
                <Input
                    type="password"
                    placeholder="Digite sua senha novamente"
                    {...register('passwordConfirmation')}
                />
            </div>
            {errors.passwordConfirmation &&
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                    {errors.passwordConfirmation.message}
                </span>
            }
        </>
    )
}