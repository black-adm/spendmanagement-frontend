import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import {
  BanknoteIcon,
  CalendarCheckIcon,
  CheckCircleIcon,
  ShoppingBasketIcon,
} from "lucide-react";
import { SelectCategories } from "./SelectCategories";
import { TableItemsForm } from "./Table";

export function AddReceiptsForm() {
  return (
    <>
      <form className="grid grid-cols-2">
        <div className="pt-4 max-w-xs">
          <div className="flex flex-col pb-5">
            <h5 className="text-xl text-primary-orange tracking-wide font-light">
              Preencha os dados do seu recibo
            </h5>
            <p className="text-sm text-muted-foreground">
              Insira os dados corretamente para adicionar sua nota.
            </p>
          </div>

          <div className="w-full flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <SelectCategories />
            </div>

            <div className="space-y-2">
              <Label className="inline-flex items-center gap-2 uppercase">
                <ShoppingBasketIcon className="size-4" />
                Estabelecimento
              </Label>
              <Input
                type="text"
                placeholder="Supermercado exemplo"
                className=""
              />
            </div>

            <div className="flex justify-around items-center gap-3">
              <div className="space-y-2 w-full">
                <Label className="inline-flex items-center gap-2 uppercase">
                  <CalendarCheckIcon className="size-4" />
                  Data
                </Label>
                <Input type="text" placeholder="01/01/2024" className="" />
              </div>

              <div className="space-y-2 w-40">
                <Label className="inline-flex items-center gap-2 uppercase">
                  <BanknoteIcon className="size-4" />
                  Valor total
                </Label>
                <Input type="text" placeholder="R$ 697,88" className="" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 max-w-full space-y-6">
          <TableItemsForm />
        </div>

        <div className="pt-12 w-full flex items-center">
          <Button className="inline-flex items-center gap-2 tracking-wide hover:text-primary-orange">
            Finalizar Cadastro do recibo
            <CheckCircleIcon className="size-4" />
          </Button>
        </div>
      </form>
    </>
  );
}
