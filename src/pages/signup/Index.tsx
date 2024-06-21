import logo from "@/assets/images/logo-white.png";
import { MultiStep } from "./MultiStep";

export function SignUpPage() {
  return (
    <div className="h-full w-screen overflow-hidden">
      <div className="flex flex-col items-center pt-20">
        <div>
          <img src={logo} alt="logo" />
          <p className="text-lg font-medium pb-5">
            Preencha corretamente os dados do formulário.
          </p>
        </div>
        <MultiStep />

        <div className="w-full flex justify-center items-center mt-10">
          <p className="font-semibold md:mx-1.5 text-sm text-black italic">
            Possui uma conta?
            <a
              href="/login"
              className="pl-1.5 text-sm text-sky-500 hover:underline"
            >
              Fazer login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
