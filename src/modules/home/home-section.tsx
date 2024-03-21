import { BarChart3, LockKeyhole, PiggyBank, ScrollText } from 'lucide-react'

export function HomeSection() {
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
              <BarChart3 className="size-5" />]
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
            <span className="text-gray-600 text-sm">
              Gere relatórios simples customizáveis.
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-primary-green lg:text-lg">
              <ScrollText className="size-5" />
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
            <span className="text-gray-600 text-sm">
              Previna custos futuros inesperados.
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-primary-green lg:text-lg">
              <PiggyBank className="size-5" />
            </span>
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
            <span className="text-gray-600 text-sm">
              Compras no seu cartão em tempo real.
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-primary-green lg:text-lg">
              <LockKeyhole className="size-5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
