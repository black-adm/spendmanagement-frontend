import { AddReceiptsForm } from "./Form";

export function ReceiptsContent() {
  return (
    <div className="w-full max-w-6xl mx-auto pt-16">
      <div className="flex flex-col">
        <h1 className="text-3xl font-extrabold">Adicionar novos recibos</h1>
        <p className="text-sm tracking-wider text-muted-foreground">
          Por aqui você adiona os recibos dos seus gastos, para visualizar suas despesas, {""}
          acesse a aba {""}
          <a className="text-bold text-black underline hover:text-sky-400 hover:cursor-pointer">
            Extrato
          </a>
        </p>
      </div>
      <div className="pt-8">
        <AddReceiptsForm />
      </div>
    </div>
  );
}
