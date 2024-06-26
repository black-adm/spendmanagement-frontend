import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Progress } from "@/components/Progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { Separator } from "@/components/Separator";
import { TogglePasswordButton } from "@/components/TogglePasswordButton";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import {
  ArrowLeftIcon,
  CalendarIcon,
  InfoIcon,
  KeySquareIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from "lucide-react";
import { useState } from "react";

import MaskedInput from "react-input-mask";

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const handleNext = () => setCurrentStep(currentStep + 1);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8">
        <Progress className="w-[85%]" value={(currentStep / 4) * 100} />
      </div>

      <form>
        {currentStep === 1 && (
          <div className="px-2">
            <div className="mb-6">
              <h1 className="text-3xl font-extrabold">Primeira etapa</h1>
              <h2 className="text-lg font-bold mb-2 uppercase">
                Dados pessoais
              </h2>
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
                  />
                </div>
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
                  />
                </div>
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
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="gender">Genêro</Label>
                <Select required>
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
              </div>
            </div>
            <div className="mt-10 flex justify-end">
              <Button onClick={handleNext}>Próximo</Button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="px-2">
            <div className="mb-6">
              <h1 className="text-3xl font-extrabold">Segunda etapa</h1>
              <h2 className="text-lg font-bold mb-2 uppercase">
                Dados do endereço
              </h2>
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
                  />
                </div>
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
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="uf">UF</Label>
                  <div className="mt-2 flex items-center rounded-lg border-2 border-gray-300">
                    <Input
                      type="text"
                      className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none text-lg font-medium focus-visible:ring-0"
                      maxLength={2}
                      required
                    />
                  </div>
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
                  />
                </div>
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
                  />
                </div>
              </div>
            </div>
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
            <div className="mb-6">
              <h1 className="text-3xl font-extrabold">Terceira etapa</h1>
              <h2 className="text-lg font-bold mb-2 uppercase">
                Dados de acesso
              </h2>
              <p className="text-muted-foreground font-light italic tracking-wide">
                Crie suas credenciais de acesso.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="mt-2 flex items-center space-x-2 rounded-lg border-2 border-gray-300">
                  <EnvelopeClosedIcon className="ml-3 size-5" />
                  <Separator className="w-0.5 h-3.5 bg-gray-300" />
                  <Input
                    type="email"
                    className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none text-lg font-medium focus-visible:ring-0"
                    maxLength={60}
                    required
                  />
                </div>
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
                  />
                  <TogglePasswordButton
                    showPassword={showPassword}
                    toggleShowPassword={toggleShowPassword}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirme sua senha</Label>
                <div className="mt-2 flex items-center space-x-2 rounded-lg border-2 border-gray-300">
                  <KeySquareIcon className="ml-3 size-6" />
                  <Separator className="w-0.5 h-3.5 bg-gray-300" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="flex h-9 rounded-md border border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-2 w-full md:px-3 md:py-3 outline-none border-none text-lg font-medium focus-visible:ring-0"
                    maxLength={10}
                    required
                  />
                  <TogglePasswordButton
                    showPassword={showPassword}
                    toggleShowPassword={toggleShowPassword}
                  />
                </div>
              </div>
            </div>
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
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-extrabold">Confirmação dos dados</h1>
              <p className="text-muted-foreground font-light italic tracking-wide">
                Revise suas informações e envie o formulário.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <Label>Name</Label>
                <p>John Doe</p>
              </div>
              <div>
                <Label>Email</Label>
                <p>john@example.com</p>
              </div>
              <div>
                <Label>Phone</Label>
                <p>123-456-7890</p>
              </div>
              <div>
                <Label>Card Number</Label>
                <p>1234 5678 9012 3456</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Expiry Date</Label>
                  <p>12/25</p>
                </div>
                <div>
                  <Label>CVC</Label>
                  <p>123</p>
                </div>
              </div>
            </div>
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
