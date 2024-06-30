import { Input } from "@/components/Input";
import { SearchIcon } from "lucide-react";

export function SearchInput() {
  return (
    <div className="flex items-center space-x-2 border rounded-lg">
      <SearchIcon className="ml-3 size-6" />
      <Input
        type="text"
        placeholder="Pesquisar"
        className="flex py-2 w-full px-2 md:py-3 outline-none border-none font-light placeholder:text-extralight placeholder:tracking-wide focus-visible:ring-0"
        maxLength={40}
        required
      />
    </div>
  );
}
