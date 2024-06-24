import logo from "@/assets/images/logo-white.png";
import { Button } from "@/components/Button";
import { Separator } from "@/components/Separator";
import { DashboardForm } from "./Form";
import { DashboardSection } from "./Section";

export function DashboardPage() {

  function redirectSignIn() {
    window.location.href = "/signin";
  }

  function redirectSignUp() {
    window.location.href = "/signup";
  }

  return (
    <div className="h-full w-screen overflow-hidden">
      <div className="grid grid-cols-2 h-screen">
        <div className="max-w-2xl flex justify-center">
          <div className="flex flex-col items-center pt-20">
            <div>
              <img src={logo} alt="logo" />
              <h2 className="font-bold text-3xl">Dashboard Informe seu e-mail para recuperar a senha</h2>
              <p className="pt-1 font-light text-lg">
                Se ele existir em nossa base de dados, um e-mail de recuperação será enviado :)
              </p>
            </div>
            <DashboardForm />
            <div className="w-full flex justify-center items-center mt-4">
              <button onClick={redirectSignIn} className="font-medium text-sm text-sky-400 hover:underline">
                Já possui login?
              </button>
            </div>
            <div className="w-full flex md:justify-between justify-center items-center mt-6">
              <Separator className="w-16 h-0.5 bg-primary-gray" />
              <p className="font-semibold md:mx-1.5 text-sm text-black italic">
                Não possui uma conta?
              </p>
              <Separator className="w-16 h-0.5 bg-primary-gray" />
            </div>

            <div className="w-full flex justify-center items-center pt-6">
              <Button
                onClick={redirectSignUp}
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
          <DashboardSection />
          <div className="h-full bg-graph bg-no-repeat bg-cover"></div>
        </div>
      </div>
    </div>
  );
}
