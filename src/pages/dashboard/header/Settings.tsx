import { Button } from "@/components/Button";
import { CogIcon } from "lucide-react";

export function SettingsButton() {
  return (
    <Button variant="ghost">
      <CogIcon className="size-5" />
    </Button>
  )
}