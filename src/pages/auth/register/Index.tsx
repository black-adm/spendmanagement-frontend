import { Button } from "@/components/Button";
import { Progress } from "@/components/Progress";
import { registerFormSchema, RegisterFormSchema } from "@/schemas/registerForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon, CheckCircleIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AccountFormRegister } from "./AccountForm";
import { AddressFormRegister } from "./AddressForm";
import { ConfirmationFormRegister } from "./ConfirmationForm";
import { PersonFormRegister } from "./PersonForm";

type FormFields = keyof RegisterFormSchema;

export function MultiStepFormRegister() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegisterFormSchema>({} as RegisterFormSchema);

  const {
    register,
    control,
    trigger,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleNext = async () => {
    const formIsValid = await trigger(getFieldsForStep(currentStep));
    if (formIsValid) {
      setFormData({ ...formData, ...getValues() });
      setCurrentStep(currentStep + 1);
    }
  };

  const getFieldsForStep = (step: number): FormFields[] => {
    switch (step) {
      case 1:
        return ["name", "birthdate", "phone", "gender"];
      case 2:
        return ["cep", "address", "addressNumber", "uf", "complement"];
      case 3:
        return ["username", "password", "confirmPassword"];
      default:
        return [];
    }
  };

  const onSubmit = async (data: RegisterFormSchema) => {
    const formData = await trigger();
    if (formData) console.log("Dados do formulário :", data);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8">
        <Progress className="w-[85%]" value={(currentStep / 4) * 100} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <div className="px-2">
            <PersonFormRegister register={register} control={control} errors={errors} />
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
            <ConfirmationFormRegister formData={formData} />
            <div className="mt-16 flex justify-between">
              <Button
                className="inline-flex items-center gap-2 bg-transparent text-black shadow-none hover:text-primary-orange hover:bg-transparent"
                onClick={() => setCurrentStep(3)}
              >
                <ArrowLeftIcon className="size-4" />
                Voltar
              </Button>
              <Button
                type="submit"
                className="inline-flex items-center gap-2 hover:bg-primary-orange hover:text-black"
              >
                Finalizar cadastro
                <CheckCircleIcon className="size-4" />
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
