import logo from "@/assets/images/logo-white.png";
import { Button } from "@/components/Button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/Drawer";
import { Separator } from "@/components/Separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Sheet";
import { ForgotPasswordForm } from "../forgotPassword/Index";
import { MultiStepForm } from "../register/MultiStepForm";
import { LoginForm } from "./Form";
import { LoginSection } from "./Section";

export function LoginPage() {
  return (
    <div className="h-full w-screen overflow-hidden">
      <div className="grid grid-cols-2 h-screen">
        <div className="max-w-2xl flex justify-center">
          <div className="flex flex-col items-center pt-20">
            <div>
              <img src={logo} alt="logo" />
              <h2 className="font-bold text-3xl">Bem vindo (a) de volta</h2>
              <p className="pt-1 font-light text-lg">
                Informe suas credenciais de acesso.
              </p>
            </div>
            <LoginForm />

            <div className="w-full flex justify-center items-center mt-4">
              <Drawer>
                <DrawerTrigger asChild>
                  <p className="font-medium text-sm text-blue-300 hover:text-sky-400 hover:underline">
                    Esqueceu sua senha?
                  </p>
                </DrawerTrigger>
                <DrawerContent>
                  <ForgotPasswordForm />
                </DrawerContent>
              </Drawer>
            </div>

            <div className="w-full flex md:justify-between justify-center items-center mt-6">
              <Separator className="w-16 h-0.5 bg-primary-gray" />
              <p className="font-semibold md:mx-1.5 text-sm text-black italic">
                Não possui uma conta?
              </p>
              <Separator className="w-16 h-0.5 bg-primary-gray" />
            </div>

            <div className="w-full flex justify-center items-center pt-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    type="button"
                    className="w-full bg-primary-orange hover:border hover:border-primary-orange hover:bg-transparent hover:text-primary-orange"
                  >
                    Criar uma nova conta
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <MultiStepForm />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:flex-col md:flex-1 md:h-auto md:max-w-full">
          <div className="h-2/3 bg-graph bg-no-repeat bg-cover"></div>
          <LoginSection />
          <div className="h-full bg-graph bg-no-repeat bg-cover"></div>
        </div>
      </div>
    </div>
  );
}
