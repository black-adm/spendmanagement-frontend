import { Separator } from "@/components/Separator";
import { DashboardIcon } from "@radix-ui/react-icons";
import { CalendarSearchIcon, CircleFadingPlusIcon, ScrollText, SettingsIcon, TagIcon } from "lucide-react";

export function Sidebar() {
  return (
    <div>
      <nav className="z-20 fixed top-2/4 left-6 min-h-auto min-w-14 flex flex-col justify-around p-2 gap-6 space-y-1 bg-gradient-to-t from-black to-zinc-900 rounded-xl shrink-0 grow-0 backdrop-blur-lg -translate-y-2/4">
        <a
          href="#"
          className="flex aspect-square items-center justify-center gap-1 rounded-lg p-1 mt-2 text-primary-orange hover:bg-zinc-800 hover:text-orange-300"
        >
          <DashboardIcon className="size-6 shrink-0" />
        </a>
        <a
          href="#"
          className="flex aspect-square items-center justify-center gap-1 rounded-lg p-1 text-primary-orange hover:bg-zinc-800 hover:text-orange-300"
        >
          <CircleFadingPlusIcon className="size-6 shrink-0" />
        </a>
        <a
          href="#"
          className="flex aspect-square items-center justify-center gap-1 rounded-lg p-1 text-primary-orange hover:bg-zinc-800 hover:text-orange-300"
        >
          <ScrollText className="size-6 shrink-0" />
        </a>
        <a
          href="#"
          className="flex aspect-square items-center justify-center gap-1 rounded-lg p-1 text-primary-orange hover:bg-zinc-800 hover:text-orange-300"
        >
          <TagIcon className="size-6 shrink-0" />
        </a>
        <a
          href="#"
          className="flex aspect-square items-center justify-center gap-1 rounded-lg p-1 text-primary-orange hover:bg-zinc-800 hover:text-orange-300"
        >
          <CalendarSearchIcon className="size-6 shrink-0" />
        </a>
        <Separator />
        <a
          href="#"
          className="flex aspect-square items-center justify-center gap-1 rounded-lg p-1 mb-2 text-primary-orange hover:bg-zinc-800 hover:text-orange-300"
        >
          <SettingsIcon className="size-6 shrink-0" />
        </a>
      </nav>
    </div>
  );
}
