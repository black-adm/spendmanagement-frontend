import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Separator } from "@/components/Separator";
import { RegisterFormSchema } from "@/schemas/registerForm";
import { InfoIcon, MapIcon, MapPinIcon } from "lucide-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import MaskedInput from "react-input-mask";

interface AddressFormRegisterProps {
  register: UseFormRegister<RegisterFormSchema>;
  errors: FieldErrors<RegisterFormSchema>;
}

export function AddressFormRegister({
  register,
  errors,
}: AddressFormRegisterProps) {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">Segunda etapa</h1>
        <h2 className="text-lg font-bold mb-2 uppercase">Dados do endereço</h2>
        <p className="text-muted-foreground font-light italic tracking-wide">
          Informe seu endereço pessoal.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="cep">CEP</Label>
          <div className="mt-2 flex items-center space-x-2 rounded-lg border-2 border-gray-300">
            <MapIcon className="ml-3 size-5" />
            <Separator className="w-0.5 h-3.5 bg-gray-300" />
            <MaskedInput
              mask="99999-999"
              maskChar=""
              className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none text-lg font-medium focus-visible:ring-0"
              required
              {...register("cep")}
            />
          </div>
          {errors.cep && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.cep.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="addressNumber">Número</Label>
            <div className="mt-2 flex items-center rounded-lg border-2 border-gray-300">
              <MaskedInput
                mask="99999"
                maskChar=""
                className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium focus-visible:ring-0"
                inputMode={"tel"}
                required
                {...register("addressNumber")}
              />
            </div>
            {errors.addressNumber && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.addressNumber.message}
            </span>
          )}
          </div>

          <div>
            <Label htmlFor="uf">UF</Label>
            <div className="mt-2 flex items-center rounded-lg border-2 border-gray-300">
              <Input
                type="text"
                className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none text-lg font-medium focus-visible:ring-0"
                maxLength={2}
                required
                {...register("uf")}
              />
            </div>
            {errors.uf && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.uf.message}
            </span>
          )}
          </div>
        </div>

        <div>
          <Label htmlFor="address">Endereço</Label>
          <div className="mt-2 flex items-center space-x-2 rounded-lg border-2 border-gray-300">
            <MapPinIcon className="ml-3 size-5" />
            <Separator className="w-0.5 h-3.5 bg-gray-300" />
            <Input
              type="text"
              className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none text-lg font-medium focus-visible:ring-0"
              maxLength={200}
              required
              {...register("address")}
            />
          </div>
          {errors.address && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.address.message}
            </span>
          )}
        </div>

        <div>
          <Label htmlFor="complement">Complemento</Label>
          <div className="mt-2 flex items-center space-x-2 rounded-lg border-2 border-gray-300">
            <InfoIcon className="ml-3 size-5" />
            <Separator className="w-0.5 h-3.5 bg-gray-300" />
            <Input
              type="text"
              className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none text-lg font-medium focus-visible:ring-0"
              maxLength={100}
              required
              {...register("complement")}
            />
          </div>
          {errors.complement && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.complement.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
