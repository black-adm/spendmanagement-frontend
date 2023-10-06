import Link from "next/link";

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { ModalSignUp } from "./signUp/ModalSignUp";

export function Header() {
    return (
        <header className="mb-8 border-b">
            <div className="mx-auto flex max-w-screen-2xl items-center justify-between py-2 px-4 md:py-0 md:px-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2.5 text-lg sm:text-2xl font-bold text-black md:text-3xl"
                    aria-label="logo"
                >
                    Spendmanagement
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-medium-orange h-6 w-6 md:h-8 md:w-8 lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-x-1 text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary-orange active:text-medium-orange"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-green lucide lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                        Sobre
                    </Link>

                    <Link
                        href="#"
                        className="inline-flex items-center gap-x-1 text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary-orange active:text-medium-orange"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-green lucide lucide-terminal-square"><path d="m7 11 2-2-2-2" /><path d="M11 13h4" /><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /></svg>
                        Desenvolvedores
                    </Link>
                </nav>

                <div className="flex divide-x border-r sm:border-l">
                    <Link
                        href="/login"
                        className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
                    >
                        <svg className="h-6 w-6 text-black lucide lucide-log-in" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
                        <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                            Login
                        </span>
                    </Link>

                    <AlertDialog>
                        <AlertDialogTrigger>
                            <Button
                                className="bg-white rounded-none flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
                            >
                                <svg className="h-6 w-6 text-black lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
                                <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                                    Cadastrar
                                </span>
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <ModalSignUp />
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        </header>
    )
}