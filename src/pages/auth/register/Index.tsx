import { Progress } from "@/components/Progress";
import { useState } from "react";

import { Button } from "@/components/Button";
import { registerFormSchema, RegisterFormSchema } from "@/schemas/registerForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { AccountFormRegister } from "./AccountForm";
import { AddressFormRegister } from "./AddressForm";
import { ConfirmationFormRegister } from "./ConfirmationForm";
import { PersonFormRegister } from "./PersonForm";

export function MultiStepFormRegister() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => setCurrentStep(currentStep + 1);

  const { register, formState: errors = {} } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8">
        <Progress className="w-[85%]" value={(currentStep / 4) * 100} />
      </div>
      <form>
        {currentStep === 1 && (
          <div className="px-2">
            <PersonFormRegister register={register} errors={errors} />
            <div className="mt-10 flex justify-end">
              <Button onClick={handleNext}>Próximo</Button>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className="px-2">
            <AddressFormRegister register={register} errors={errors} />
            <div className="mt-10 flex justify-between">
              <Button
                className="inline-flex items-center gap-2 bg-transparent text-black shadow-none hover:text-primary-orange hover:bg-transparent"
                onClick={() => setCurrentStep(1)}
              >
                <ArrowLeftIcon className="size-4" />
                Voltar
              </Button>
              <Button onClick={handleNext}>Próximo</Button>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className="px-2">
            <AccountFormRegister register={register} errors={errors} />
            <div className="mt-10 flex justify-between">
              <Button
                className="inline-flex items-center gap-2 bg-transparent text-black shadow-none hover:text-primary-orange hover:bg-transparent"
                onClick={() => setCurrentStep(2)}
              >
                <ArrowLeftIcon className="size-4" />
                Voltar
              </Button>
              <Button onClick={handleNext}>Próximo</Button>
            </div>
          </div>
        )}
        {currentStep === 4 && (
          <div className="px-2">
            <ConfirmationFormRegister />
            <div className="mt-10 flex justify-between">
              <Button
                className="inline-flex items-center gap-2 bg-transparent text-black shadow-none hover:text-primary-orange hover:bg-transparent"
                onClick={() => setCurrentStep(3)}
              >
                <ArrowLeftIcon className="size-4" />
                Voltar
              </Button>
              <Button type="submit">Finalizar cadastro</Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
