'use client'

import { Inputs } from "./Inputs";
import { GoogleButton } from "./GoogleButton";

export function Form() {
    return (
        <>
            <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
                <div className="flex flex-col space-y-2 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold">Fazer login na sua conta</h2>
                    <p className="text-base md:text-xl">Entre na sua conta para acessar o painel</p>
                </div>
                <div className="flex flex-col max-w-md space-y-5">
                    <Inputs />

                    <button className="flex items-center gap-x-2 justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                        Acessar
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
                    </button>

                    <div className="flex justify-center items-center">
                        <span className="w-full border border-black"></span>
                        <span className="px-4">Ou</span>
                        <span className="w-full border border-black"></span>
                    </div>

                    <GoogleButton />
                </div>
            </div>
        </>
    )
}