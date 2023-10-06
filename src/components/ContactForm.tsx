"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import api from "@/api";


export function ContactForm() {
    return (
        <>
            <form className="sm:col-span-2 px-4 sm:px-0">
                <h1 className="max-w-lg text-base sm:text-xl font-semibold tracking-tight text-primary-black xl:text-2xl">
                    Dúvidas ? Contate nosso time de suporte
                </h1>

                <div className="flex flex-col mx-auto mt-6 space-y-6 md:space-y-0 md:flex-row">
                    <input
                        id="email"
                        type="text"
                        className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                        placeholder="Informe seu e-mail"
                    />

                    <button
                        type="submit"
                        className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </>
    )
}