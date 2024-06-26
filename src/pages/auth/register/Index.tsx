import { ArrowRightIcon } from "lucide-react";
import { MultiStep } from "./MultiStep";

import logo from "@/assets/images/logo-white.png";

export function SignUpPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen w-full">
      <div className="flex items-center justify-center">
        <img
          src="https://i.pinimg.com/originals/a5/f0/5f/a5f05f2b8326abd955c787d446e30366.gif"
          alt="Animation"
          className="h-full w-full"
        />
      </div>

      <div className="flex items-center justify-center md:pb-28">
        <div className="max-w-[460px] space-y-6">
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center">
              <a href="/login">
                <img src={logo} alt="logo" className="w-4/5" />
              </a>
              <p className="text-lg font-medium pb-5">
                Preencha corretamente os dados do formulário.
              </p>
            </div>
            <MultiStep />

            <div className="w-full flex justify-center items-center mt-10">
              <p className="pt-4 font-semibold md:mx-1.5 text-sm text-black italic">
                Possui uma conta?
                <a
                  href="/login"
                  className="pl-2.5 inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-sky-400 hover:underline"
                >
                  Fazer login
                  <ArrowRightIcon className="size-4" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
