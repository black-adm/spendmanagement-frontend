import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { Separator } from "@/components/Separator";
import { RegisterFormSchema } from "@/schemas/registerForm";
import { CalendarIcon, PhoneIcon, UserCircleIcon } from "lucide-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import MaskedInput from "react-input-mask";

interface PersonFormRegisterProps {
  register: UseFormRegister<RegisterFormSchema>;
  errors: FieldErrors<RegisterFormSchema>;
}

export function PersonFormRegister({
  register,
  errors,
}: PersonFormRegisterProps) {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">Primeira etapa</h1>
        <h2 className="text-lg font-bold mb-2 uppercase">Dados pessoais</h2>
        <p className="text-muted-foreground font-light italic tracking-wide">
          Preencha seus dados pessoais.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Nome completo</Label>
          <div className="mt-2 flex items-center space-x-2 rounded-lg border-2 border-gray-300">
            <UserCircleIcon className="ml-3 size-6" strokeWidth={1.5} />
            <Separator className="w-0.5 h-3.5 bg-gray-300" />
            <Input
              type="text"
              className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none text-lg font-medium focus-visible:ring-0"
              maxLength={60}
              required
              {...register("name")}
            />
          </div>
          {errors.name && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.name.message}
            </span>
          )}
        </div>

        <div>
          <Label htmlFor="birthdate">Data de nascimento</Label>
          <div className="mt-2 flex items-center space-x-2 rounded-lg border-2 border-gray-300">
            <CalendarIcon className="ml-3 size-5" />
            <Separator className="w-0.5 h-3.5 bg-gray-300" />
            <MaskedInput
              mask="99/99/9999"
              maskChar=""
              className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium focus-visible:ring-0"
              required
              {...register("birthdate")}
            />
          </div>
          {errors.birthdate && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.birthdate.message}
            </span>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Celular</Label>
          <div className="mt-2 flex items-center space-x-2 rounded-lg border-2 border-gray-300">
            <PhoneIcon className="ml-3 size-5" />
            <Separator className="w-0.5 h-3.5 bg-gray-300" />
            <MaskedInput
              mask="99 99999-9999"
              maskChar=""
              className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium focus-visible:ring-0"
              inputMode={"tel"}
              required
              {...register("phone")}
            />
          </div>
          {errors.phone && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div>
          <Label htmlFor="gender">Genêro</Label>
          <Select {...register("gender")}>
            <SelectTrigger className="mt-2 flex items-center p-4 font-medium rounded-lg border-2 border-gray-300">
              <SelectValue placeholder="Como você se identifica?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Masculino">Masculino</SelectItem>
                <SelectItem value="Feminino">Feminino</SelectItem>
                <SelectItem value="Não Binário">Não Binário</SelectItem>
                <SelectItem value="Prefiro não dizer">
                  Prefiro não dizer
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.gender && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.gender.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
