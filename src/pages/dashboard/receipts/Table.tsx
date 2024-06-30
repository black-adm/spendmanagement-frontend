import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import {
  CaseUpperIcon,
  CoinsIcon,
  DollarSignIcon,
  PlusIcon,
} from "lucide-react";

export function TableItemsForm() {
  return (
    <>
      <div className="flex justify-between items-center gap-2 border-b pb-5">
        <h5 className="text-xl text-primary-orange tracking-wide font-light">
          Tabela de items do recibo
          <p className="text-sm text-muted-foreground">
            Informe corretamente os items presentes na sua nota.
          </p>
        </h5>
        <Button
          variant="outline"
          className="text-primary-orange hover:bg-black hover:text-primary-orange"
        >
          Novo item
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2 w-full">
          <Label className="inline-flex items-center gap-1 text-xs tracking-wide uppercase">
            <CaseUpperIcon className="size-4" />
            Nome do item
          </Label>
          <Input />
        </div>

        <div className="flex justify-around items-center gap-2">
          <div className="space-y-2 w-28">
            <Label className="inline-flex items-center gap-1 text-xs uppercase">
              <PlusIcon className="size-4" />
              Quantidade
            </Label>
            <Input />
          </div>

          <div className="space-y-2 w-28">
            <Label className="inline-flex items-center gap-1 text-xs uppercase">
              <CoinsIcon className="size-4" />
              Valor
            </Label>
            <Input />
          </div>

          <div className="space-y-2 w-28">
            <Label className="inline-flex items-center gap-1 text-xs uppercase">
              <DollarSignIcon className="size-4" />
              Total
            </Label>
            <Input />
          </div>
        </div>
      </div>
    </>
  );
}
