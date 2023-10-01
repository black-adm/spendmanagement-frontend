'use client'

import { Inputs } from "./Inputs";
import { GoogleButton } from "./GoogleButton";

export function Form() {
    return (
        <>
            <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
                <div className="flex flex-col space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Fazer login na sua conta</h2>
                    <p className="text-md md:text-xl">Entre na sua conta para acessar o painel</p>
                </div>
                <div className="flex flex-col max-w-md space-y-5">
                    <Inputs />

                    <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                        Acessar
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