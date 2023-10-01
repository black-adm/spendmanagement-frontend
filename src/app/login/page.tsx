import { Form } from "./components/Form";
import Head from "./head";

export default function Login() {
    return (
        <>
            <Head />
            <div className="bg-white min-h-screen flex flex-col lg:flex-row">

                <div className="hidden lg:flex flex-col justify-between bg-gradient-to-l from-primary-orange via-medium-orange to-light-orange lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-xl">
                    <div className="flex items-center justify-start space-x-3">
                        <span className="bg-gradient-to-b from-black via-primary-black to-black rounded-full w-8 h-8"></span>
                        <h4 className="flex items-center gap-x-2 font-semibold text-primary-black text-xl">
                            Spendmanagement
                            <svg className="text-yellow-orange" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                        </h4>
                    </div>
                    <div className="space-y-5">
                        <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug text-transparent bg-clip-text bg-gradient-to-tr from-yellow-100 via-yellow-200 to-yellow-orange font-extrabold">
                            Controle total das suas despesas de forma simplificada
                        </h1>
                        <p className="text-lg font-light">Ainda não possui uma conta ?</p>
                        <button className="flex items-center gap-x-2 px-8 py-4 rounded-lg font-semibold bg-transparent border-[2.5px] border-black text-black hover:bg-black hover:text-white hover:border-none focus:bg-black focus:text-white focus:border-none transition-colors">
                            Criar uma nova conta
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus-2"><path d="M14 19a6 6 0 0 0-12 0"/><circle cx="8" cy="9" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
                        </button>
                    </div>
                    <p className="font-medium">© 2023 - Todos os direitos reservados.</p>
                </div>

                {/* Responsive */}
                <div className="flex flex-1 flex-col items-center justify-center px-10 pt-2 relative">
                    <div className="flex lg:hidden justify-between items-center w-full py-4">
                        <div className="flex items-center justify-start space-x-2">
                            <span className="bg-gradient-to-b from-primary-black to-black rounded-full w-5 h-5"></span>
                            <a href="#" className="font-medium text-xs">Spendmanagement</a>
                        </div>

                        <div className="flex items-center space-x-2">
                            <a href="#" className="flex items-center gap-x-1 underline text-xs font-medium text-sky-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                Criar uma conta
                            </a>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </>
    )
}