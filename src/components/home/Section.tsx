export function Section() {
    return (
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            <div>
                <span className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img
                        src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        loading="lazy"
                        alt="Macbook Dashboard"
                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                </span>

                <div className="flex items-start justify-between gap-2 px-2">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-medium-orange transition duration-100 hover:text-light-orange lg:text-xl">
                            Dashboards
                        </span>
                        <span className="text-gray-600 text-sm">
                            Visualizações atualizadas diariamente.
                        </span>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="font-bold text-primary-green lg:text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <span className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661315406324-329dd27ebc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        loading="lazy"
                        alt="Relatório"
                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                </span>

                <div className="flex items-start justify-between gap-2 px-2">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-primary-orange transition duration-100 hover:text-light-orange lg:text-xl">
                            Relatórios
                        </span>
                        <span className="text-gray-600 text-sm">Gere relatórios simples customizáveis.</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="font-bold text-primary-green lg:text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll-text"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /><path d="M15 8h-5" /><path d="M15 12h-5" /></svg>
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <span className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img
                        src="https://images.unsplash.com/photo-1520695625556-c2a7bfe87a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        loading="lazy"
                        alt="Homem contando o dinheiro"
                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                </span>

                <div className="flex items-start justify-between gap-2 px-2">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-primary-orange transition duration-100 hover:text-light-orange lg:text-xl">
                            Controle total
                        </span>
                        <span className="text-gray-600 text-sm">Previna custos futuros inesperados.</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="font-bold text-primary-green lg:text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-piggy-bank"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" /><path d="M2 9v1c0 1.1.9 2 2 2h1" /><path d="M16 11h0" /></svg>                  </span>
                    </div>
                </div>
            </div>

            <div>
                <span className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img
                        src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        loading="lazy"
                        alt="Cartão de crédito com o notebook"
                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                </span>

                <div className="flex items-start justify-between gap-2 px-2">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-primary-orange transition duration-100 hover:text-light-orange lg:text-xl">
                            Segurança
                        </span>
                        <span className="text-gray-600 text-sm">Compras no seu cartão em tempo real.</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="font-bold text-primary-green lg:text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole"><circle cx="12" cy="16" r="1" /><rect x="3" y="10" width="18" height="12" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /></svg>                  </span>
                    </div>
                </div>
            </div>
        </div>
    )
}