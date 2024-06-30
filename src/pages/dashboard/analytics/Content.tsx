import { Button } from "@/components/Button";
import { ListFilterIcon } from "lucide-react";
import { AnalyticsCards } from "./Analytics";
import { ChartsCards } from "./Charts";

export function AnalyticsContent() {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto pt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-extrabold">
            Dados de análise da sua conta
          <p className="text-sm tracking-wider text-muted-foreground">
            Visualize gráficos, resumos e relatórios completos das suas despesas.
          </p>
          </h2>
          <Button className="inline-flex items-center gap-1.5 text-white">
            Filtros
            <ListFilterIcon className="size-4" />
          </Button>
        </div>
        <div className="pt-12 grid gap-2 md:grid-cols-2">
          <AnalyticsCards />
          <ChartsCards />
        </div>
      </div>
    </>
  );
}
