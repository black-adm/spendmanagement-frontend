import { Button } from "@/components/Button";
import { MenuIcon } from "lucide-react";

export function MenuButton() {
  return (
    <Button variant="ghost">
      <MenuIcon className="size-5" />
    </Button>
  )
}