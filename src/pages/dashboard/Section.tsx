import { ChevronRightIcon } from "@radix-ui/react-icons";

export function DashboardSection() {
  return (
    <section className="bg-white py-6">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 z-10 relative">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-black bg-lime-100 rounded-full hover:bg-black hover:text-lime-300"
        >
          <span className="text-xs bg-lime-300 rounded-full text-black px-4 py-1.5 me-3">
            Novo
          </span>{" "}
          <span className="text-sm font-medium">
            Módulo completo de custos para empresas!{" "}
            <strong className="pl-1 text-primary-orange">Saber mais</strong>
          </span>
          <ChevronRightIcon className="size-4 ms-1 text-primary-orange" />
        </a>
        <h1 className="font-extrabold text-transparent text-2xl tracking-tight leading-none bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-primary-orange md:text-5xl pb-4">
          Gerenciamento inteligente <br />
          das suas despesas
        </h1>
        <p className="mb-8 pt-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-28">
          Controle total da sua gestão financeira em um só lugar.
        </p>
      </div>
    </section>
  );
}
