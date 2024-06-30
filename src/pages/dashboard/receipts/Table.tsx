import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import MaskedInput from "react-input-mask";
import { TableHeader } from "./TableHeader";

interface Item {
  id: string;
  name: string;
  quantity: number;
  value: number;
  total: number;
}

const ITEMS_PER_PAGE = 3;

export function TableItemsForm() {
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const addNewItem = () => {
    setItems([
      ...items,
      { id: crypto.randomUUID(), name: "", quantity: 0, value: 0, total: 0 },
    ]);
  };

  const removeItem = (id: string) => setItems(items.filter((i) => i.id !== id));

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const paginatedItems = items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col border-b">
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex flex-col">
            <h5 className="text-xl text-primary-orange tracking-wide font-light">
              Tabela de items do recibo
            </h5>
            <p className="text-sm text-muted-foreground tracking-wide">
              Informe os items presentes na sua nota.
            </p>
          </div>
          <div className="w-full flex justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={addNewItem}
              className="text-primary-orange hover:bg-black hover:text-primary-orange"
            >
              Novo item
            </Button>
          </div>
        </div>
        <TableHeader />
      </div>

      {paginatedItems.map((item) => (
        <div key={item.id} className="grid grid-cols-2 gap-2">
          <div className="w-full">
            <Input placeholder="Pão francês" />
          </div>
          <div className="flex justify-around items-center gap-2">
            <div className="w-60">
              <MaskedInput
                mask="99999"
                maskChar=""
                placeholder="6"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />{" "}
            </div>
            <div className="w-full">
              <MaskedInput
                mask="99999999"
                maskChar=""
                placeholder="R$ 0,75"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="w-full">
              <MaskedInput
                mask="99999999"
                maskChar=""
                placeholder="R$ 4,50"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div>
              <Button
                type="button"
                title="Deletar"
                variant="ghost"
                className="hover:text-primary-red"
                onClick={() => removeItem(item.id)}
              >
                <Trash2Icon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}

      {totalPages > 1 && (
        <div className="flex justify-between items-center">
          <Button
            type="button"
            variant="outline"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <Button
            type="button"
            variant="outline"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Próxima
          </Button>
        </div>
      )}
    </div>
  );
}
