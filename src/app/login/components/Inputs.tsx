'use client'

export function Inputs({ register, errors }) {

    return (
        <>
            <div className="flex items-center border-2 border-black rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-4 lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>

                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="flex py-2 ml-2 sm:ml-0 w-full md:px-3 md:py-3 outline-none border-none font-medium placeholder-font-normal"
                    {...register('email')}
                />
            </div>
            {errors.email &&
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                    {errors.email.message}
                </span>
            }

            <div className="flex items-center border-2 border-black rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-4 lucide lucide-key-square"><path d="M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z" /><path d="m14 7 3 3" /><path d="M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4" /></svg>

                <input
                    type="password"
                    placeholder="Digite sua senha"
                    className="flex py-2 ml-2 sm:ml-0 w-full md:px-3 md:py-3 outline-none border-none font-medium placeholder-font-normal"
                    {...register('password')}
                />
            </div>
            {errors.password &&
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                    {errors.password.message}
                </span>
            }
        </>
    )
}