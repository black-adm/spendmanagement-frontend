import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import {
  EnvelopeClosedIcon,
  EyeClosedIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import {
  CalendarIcon,
  InfoIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from "lucide-react";
import { useState } from "react";

export function MultiStep() {
  const steps = [
    {
      id: "PERSONAL",
      title: "Dados pessoais",
    },
    {
      id: "ACCOUNT",
      title: "Dados da conta",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    gender: "",
  });

  function handleInputChange(event: any) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleNextStep() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePreviousStep() {
    setCurrentStep((prevState) => prevState - 1);
  }

  return (
    <form className="w-screen h-auto">
      <div className="flex flex-col max-w-sm mx-auto w-full">
        <div className="space-y-3 pb-5">
          {/* Dados pessoais */}
          {steps[currentStep].id === "PERSONAL" && (
            <>
              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <UserCircleIcon className="ml-3 size-7" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="text"
                  placeholder="Nome completo"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={60}
                  required
                  onChange={handleInputChange}
                  value={formValues.name}
                />
              </div>

              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <EnvelopeClosedIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="text"
                  placeholder="Email"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={60}
                  required
                  onChange={handleInputChange}
                  value={formValues.email}
                />
              </div>

              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <PhoneIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="text"
                  placeholder="Telefone"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={60}
                  required
                  onChange={handleInputChange}
                  value={formValues.phone}
                />
              </div>

              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <CalendarIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="text"
                  placeholder="Data do nascimento"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={60}
                  required
                  onChange={handleInputChange}
                  value={formValues.birthdate}
                />
              </div>
            </>
          )}

          {/* Dados da conta */}
          {steps[currentStep].id === "ACCOUNT" && (
            <>
              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <InfoIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="text"
                  placeholder="Genêro"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={60}
                  required
                  onChange={handleInputChange}
                  value={formValues.gender}
                />
              </div>

              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <MapIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="text"
                  placeholder="CEP"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={60}
                  required
                  onChange={handleInputChange}
                  value={formValues.cep}
                />
              </div>

              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <MapPinIcon className="ml-3 size-6" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="text"
                  placeholder="Endereço"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={60}
                  required
                  onChange={handleInputChange}
                  value={formValues.address}
                />
              </div>

              <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
                <LockClosedIcon className="ml-3 size-7" />
                <Separator className="w-0.5 h-3.5 bg-gray-300" />
                <Input
                  type="password"
                  placeholder="Senha"
                  className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg tracking-widest placeholder:text-primary-gray focus-visible:ring-0"
                  maxLength={10}
                  required
                  onChange={handleInputChange}
                  value={formValues.password}
                />
                <button type="button" className="pr-4 bg-none">
                  <EyeClosedIcon className="size-5" />
                </button>
              </div>
            </>
          )}
        </div>

        {currentStep > 0 && (
          <Button
            type="button"
            onClick={handlePreviousStep}
            className="my-2 bg-white text-primary-orange hover:bg-primary-orange hover:text-white"
          >
            Voltar
          </Button>
        )}
        {currentStep < steps.length - 1 && (
          <Button type="button" onClick={handleNextStep} className="my-2">
            Próximo
          </Button>
        )}

        {currentStep === steps.length - 1 && (
          <Button type="submit">Cria uma conta</Button>
        )}
      </div>
    </form>
  );
}
