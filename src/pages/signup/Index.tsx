import { ArrowRightIcon } from "lucide-react";
import { MultiStep } from "./MultiStep";

import logo from "@/assets/images/logo-white.png";

export function SignUpPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen w-full">
      <div className="flex items-center justify-center p-5">
        <img
          src="https://plus.unsplash.com/premium_photo-1672759267829-17e48ef96660?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Animation"
          className="h-[760px] w-full rounded-lg"
        />
      </div>

      <div className="flex items-center justify-center">
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
              <p className="font-semibold md:mx-1.5 text-sm text-black italic">
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
