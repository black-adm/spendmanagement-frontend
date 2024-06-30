import { Label } from "@/components/Label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { TagsIcon } from "lucide-react";

export function SelectCategories() {
  return (
    <>
      <Label className="inline-flex items-center gap-2 uppercase">
        <TagsIcon className="size-4" />
        Categoria
      </Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecione a categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="contas">Contas</SelectItem>
            <SelectItem value="alimentação">Alimentação</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
