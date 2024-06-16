import logo from "@/assets/images/logo-white.png";
import { Button } from "@/components/Button";
import { Separator } from "@/components/Separator";
import { SignInForm } from "./Form";
import { SignInSection } from "./Section";

export function SignInPage() {
  return (
    <div className="h-full w-screen overflow-hidden">
      <div className="grid grid-cols-2 h-screen">
        <div className="max-w-2xl flex justify-center">
          <div className="flex flex-col items-center pt-20">
            <div>
              <img src={logo} alt="logo" />
              <h2 className="font-bold text-3xl">Bem vindo(a) de volta</h2>
              <p className="pt-1 font-light text-lg">
                Informe suas credenciais de acesso.
              </p>
            </div>
            <SignInForm />

            <div className="w-full flex md:justify-between justify-center items-center mt-10">
              <Separator className="w-16 h-0.5 bg-primary-gray" />
              <p className="font-semibold md:mx-1.5 text-sm text-black italic">
                Não possui uma conta?
              </p>
              <Separator className="w-16 h-0.5 bg-primary-gray" />
            </div>

            <div className="w-full flex justify-center items-center pt-10">
              <Button
                type="button"
                className="w-full bg-primary-orange hover:border hover:border-primary-orange hover:bg-transparent hover:text-primary-orange"
              >
                Criar uma nova conta
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 h-auto max-w-full">
          <div className="h-1/5 bg-graph bg-no-repeat bg-cover"></div>
          <SignInSection />
          <div className="h-full bg-graph bg-no-repeat bg-cover"></div>
        </div>
      </div>
    </div>
  );
}
