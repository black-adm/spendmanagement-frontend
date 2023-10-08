import Link from "next/link";
import { ContactForm } from "./ContactForm";

export function Footer() {
    return (
        <>
            <div className="max-w-full mx-auto pt-12">
                <footer className="p-4 bg-white shadow md:px-28 md:py-8"
                    style={{
                        backgroundImage: `url('https://static.vecteezy.com/ti/vetor-gratis/p3/370071-mao-colorida-pintada-em-aquarela-de-fundo-pinceladas-de-aquarela-verde-textura-e-fundo-abstratos-da-aguarela-para-o-projeto-fundo-aquarela-sobre-papel-texturizado-vetor.jpg')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Link
                        href="/"
                        className="pb-8 inline-flex items-center gap-2 text-xl font-bold text-medium-orange md:text-2xl"
                        aria-label="logo"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-green lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
                        Spendmanagement
                    </Link>

                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ContactForm />

                        <ul className="flex flex-wrap justify-start sm:justify-end space-x-6 items-center ml-4 pt-16 sm:ml-0 sm:mb-0 sm:mt-0">
                            <li>
                                <a
                                    href="https://github.com/fmattioli"
                                    target="_blank"
                                    className="mr-4 text-sm text-black hover:text-stone-900 md:mr-6"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-5"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.facebook.com/felipe.mattioli"
                                    target="_blank"
                                    className="mr-4 text-sm text-[#4267B2] hover:text-blue-400 hover:underline md:mr-6"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-5"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/mattiolideveloper/?g=5"
                                    target="_blank"
                                    className="mr-4 text-sm text-[#e95950] hover:text-[#cd486b] hover:underline md:mr-6"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-5"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://pt.linkedin.com/in/felipemattioli"
                                    target="_blank"
                                    className="mr-4 text-sm text-sky-500 hover:text-sky-400 hover:underline md:mr-6"
                                >
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={0}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                        />
                                        <circle cx={4} cy={4} r={2} stroke="none" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-b-light-orange sm:mx-auto lg:my-8" />
                    <span className="flex items-center justify-center">
                        <p className="text-xs sm:text-sm text-primary-black font-medium text-center pb-4 sm:pb-0">
                            Spendmanagement © 2023 - {" "}
                            Todos os direitos reservados.
                            <br />
                            Guarulhos - SP, Brasil.
                        </p>
                    </span>
                </footer>
            </div>
        </>
    )
}