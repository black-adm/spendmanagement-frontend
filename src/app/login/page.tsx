import { Form } from "./components/Form";
import Head from "./head";

export default function Login() {
    return (
        <>
            <Head />
            <div className="bg-white min-h-screen flex flex-col lg:flex-row">

                <div className="hidden lg:flex flex-col justify-between bg-yellow-300 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-xl">
                    <div className="flex items-center justify-start space-x-3">
                        <span className="bg-black rounded-full w-8 h-8"></span>
                        <a href="#" className="font-medium text-xl">
                            Spendmanagement
                        </a>
                    </div>
                    <div className="space-y-5">
                        <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
                            Controle total das suas despesas de forma simples.
                        </h1>
                        <p className="text-lg">Ainda não possui uma conta ?</p>
                        <button className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                            Criar uma nova conta
                        </button>
                    </div>
                    <p className="font-medium">© 2023 - Todos os direitos reservados.</p>
                </div>

                {/* Login */}
                <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                    <div className="flex lg:hidden justify-between items-center w-full py-4">
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black rounded-full w-6 h-6"></span>
                            <a href="#" className="font-medium text-lg">Brand</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>Not a member? </span>
                            <a href="#" className="underline font-medium text-blue-700">
                                Sign up now
                            </a>
                        </div>
                    </div>
                    {/* Login box */}
                    <Form />
                </div>
            </div>
        </>
    )
}