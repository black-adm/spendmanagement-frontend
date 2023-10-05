import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { LanguagesBanner } from '@/components/LanguagesBanner'

export default function Home() {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <Header />

        <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-8 flex flex-wrap justify-between md:mb-16">

            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-32">
              <h1 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-light-orange via-medium-orange to-orange-200 sm:text-5xl md:mb-8 md:text-6xl">
                Vamos gerenciar
                <br />
                suas despesas?
              </h1>
              <p className="max-w-md leading-relaxed text-gray-700 xl:text-lg">
                Cansado de soluções mirabolantes e burocráticas para controlar o seu fluxo de custos ? <br />
                Aqui as suas despesas pode ser gerenciada de forma simplificada.
              </p>
            </div>

            <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <img
                  src="https://plus.unsplash.com/premium_photo-1680721444874-6b52aa31e26c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  loading="lazy"
                  alt="Calculadora com despesas"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src="https://plus.unsplash.com/premium_photo-1680721443657-a936f7cb9f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"
                  loading="lazy"
                  alt="Maquininha de cartão"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-end gap-8 md:flex-row">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
                Acompanhe nossos canais
              </span>
              <span className="h-px w-12 bg-gray-200" />
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.4168 2.4594C17.7648 0.873472 15.4785 0 12.9793 0C9.1616 0 6.81353 1.56493 5.51603 2.87767C3.91693 4.49547 3 6.64362 3 8.77138C3 11.4429 4.11746 13.4934 5.98876 14.2563C6.11439 14.3078 6.24081 14.3337 6.36475 14.3337C6.75953 14.3337 7.07233 14.0754 7.1807 13.661C7.24389 13.4233 7.39024 12.8369 7.45389 12.5823C7.59011 12.0795 7.48005 11.8377 7.18295 11.4876C6.64173 10.8472 6.38969 10.0899 6.38969 9.10438C6.38969 6.17698 8.56948 3.06578 12.6095 3.06578C15.8151 3.06578 17.8064 4.88772 17.8064 7.82052C17.8064 9.67124 17.4077 11.3852 16.6837 12.6468C16.1805 13.5235 15.2957 14.5685 13.9375 14.5685C13.3501 14.5685 12.8225 14.3272 12.4896 13.9066C12.1751 13.5089 12.0714 12.9953 12.1979 12.4599C12.3408 11.855 12.5357 11.2241 12.7243 10.6141C13.0682 9.5001 13.3933 8.44789 13.3933 7.60841C13.3933 6.17252 12.5106 5.20769 11.1969 5.20769C9.52737 5.20769 8.21941 6.90336 8.21941 9.06805C8.21941 10.1297 8.50155 10.9237 8.62929 11.2286C8.41896 12.1197 7.16899 17.4176 6.93189 18.4166C6.79478 18.9997 5.96893 23.6059 7.33586 23.9731C8.87168 24.3858 10.2445 19.8997 10.3842 19.3928C10.4975 18.9806 10.8937 17.4216 11.1365 16.4634C11.878 17.1775 13.0717 17.6603 14.2333 17.6603C16.4231 17.6603 18.3924 16.6749 19.7786 14.8858C21.1229 13.1505 21.8633 10.7318 21.8633 8.0757C21.8632 5.99923 20.9714 3.95209 19.4168 2.4594Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white py-6 sm:py-10 lg:py-20"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/010/250/587/non_2x/green-watercolor-brush-stroke-free-png.png')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="mx-auto max-w-screen-2xl px-4 py-6 md:px-8">
          <div className="relative mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-3xl font-bold text-transparent bg-clip-text bg-medium-orange md:mb-6 lg:text-5xl">
              Painel de controle completo
            </h2>
            <p className="mx-auto max-w-screen-md text-center font-medium text-black md:text-lg">
              Com o nosso painel, suas despesas e custos te proporcionam uma experiência incrível para gerenciar seus gastos e visualizar métricas dos seus custos.
            </p>
          </div>

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
        </div>
      </div>
      <Banner />
      <LanguagesBanner />
      <Footer />
    </>

  )
}
