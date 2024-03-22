import { HomeBanner } from './home-banner'
import { HomeFooter } from './home-footer'
import { HomeHeader } from './home-header'
import { HomeSection } from './home-section'

export default function Home() {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <HomeHeader />

        <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-8 flex flex-wrap justify-between md:mb-16">
            <div className="mb-6 px-4 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-32">
              <h1 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-light-orange via-medium-orange to-orange-200 sm:text-5xl md:mb-8 md:text-6xl">
                Vamos gerenciar
                <br />
                suas despesas?
              </h1>
              <p className="max-w-md leading-relaxed text-gray-700 xl:text-lg">
                Cansado de soluções mirabolantes e burocráticas para controlar o
                seu fluxo de custos ? <br />
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
        </section>
      </div>

      <div
        className="bg-white py-6 sm:py-10 lg:py-20"
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
              Com o nosso painel, suas despesas e custos te proporcionam uma
              experiência incrível para gerenciar seus gastos e visualizar
              métricas dos seus custos.
            </p>
          </div>

          <HomeSection />
        </div>
      </div>
      <HomeBanner />
      <HomeFooter />
    </>
  )
}
