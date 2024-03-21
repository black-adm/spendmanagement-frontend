import { DollarSign } from 'lucide-react'
import Link from 'next/link'

export function HomeBanner() {
  return (
    <div
      className="bg-white w-full py-6 sm:py-8 lg:py-20 lg:px-5"
      style={{
        backgroundImage: `url('https://i.ibb.co/j8KG5Mb/gold-coins-illustration-background-free-vector-removebg-preview.png')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="bg-gradient-to-b from-primary-black to-black flex flex-col overflow-hidden rounded-lg sm:flex-row md:h-80">
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
            <h2 className="mb-4 text-xl font-bold text-yellow-orange md:text-2xl lg:text-4xl">
              Assinatura anual
              <br />
              com 40% OFF!
            </h2>
            <p className="mb-8 max-w-md text-white">
              Teste nossa aplicação gratuitamente por 30 dias ou escolha a
              assinatura que cabe no seu bolso. <br />
              Disponíveis em formato, anual, simestral ou mensal.
            </p>

            <div className="mt-auto">
              <Link
                href="#"
                className="inline-flex items-center gap-x-1 rounded-lg bg-transparent border-2 border-yellow-orange px-8 py-3 text-center text-sm font-semibold text-yellow-orange outline-none transition duration-100 hover:bg-primary-black focus-visible:ring active:bg-primary-black md:text-base"
              >
                Ver oferta
                <DollarSign className="size-[18px]" />
              </Link>
            </div>
          </div>

          <div className="order-first h-48 w-full bg-black sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
            <img
              src="https://images.unsplash.com/photo-1614267118647-20c5ffa6a6e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              loading="lazy"
              alt="Photo by Dom Hill"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
