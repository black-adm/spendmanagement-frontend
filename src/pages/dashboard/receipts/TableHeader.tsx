import { CaseUpperIcon, CoinsIcon, DollarSignIcon, PlusIcon } from "lucide-react";

export function TableHeader() {
  return (
    <div className="flex justify-between items-center pt-8 pb-4">
      <span className="inline-flex items-center gap-1 text-xs tracking-wide uppercase">
        <CaseUpperIcon className="size-4" />
        Nome do item
      </span>
      <div className="flex items-center gap-6">
        <span className="inline-flex items-center gap-1 text-xs tracking-wide uppercase">
          <PlusIcon className="size-4" />
          Quantidade
        </span>
        <span className="inline-flex items-center gap-1 text-xs tracking-wide uppercase">
          <CoinsIcon className="size-4" />
          Valor
        </span>
        <span className="inline-flex items-center gap-1 text-xs tracking-wide uppercase">
          <DollarSignIcon className="size-4" />
          Total
        </span>
        <span className="pr-8"></span>
      </div>
    </div>
  );
}
