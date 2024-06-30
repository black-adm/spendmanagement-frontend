import { TabsTrigger } from "@/components/Tabs";
import { DashboardIcon } from "@radix-ui/react-icons";
import { FilePieChartIcon, HandCoinsIcon, ScrollTextIcon, Settings2Icon } from "lucide-react";

export function DashboardNavbar() {
  return (
    <nav className="w-full flex justify-center items-center space-x-24 border-b border-gray-200">
          <TabsTrigger
            value="dashboard"
            className="relative inline-flex items-center gap-1.5 py-4 text-lg group hover:text-black data-[state=active]:shadow-none"
          >
            <DashboardIcon className="size-4" />
            Dashboard
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-orange transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
          </TabsTrigger>
          <TabsTrigger
            value="extract"
            className="relative inline-flex items-center gap-1.5 py-4 text-lg group hover:text-black data-[state=active]:shadow-none"
          >
            <ScrollTextIcon className="size-4" />
            Extrato
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-orange transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
          </TabsTrigger>
          <TabsTrigger
            value="receipts"
            className="relative inline-flex items-center gap-1.5 py-4 text-lg group hover:text-black data-[state=active]:shadow-none"
          >
            <FilePieChartIcon className="size-4" />
            Recibos
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-orange transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
          </TabsTrigger>
          <TabsTrigger
            value="goals"
            className="relative inline-flex items-center gap-1.5 py-4 text-lg group hover:text-black data-[state=active]:shadow-none"
          >
            <HandCoinsIcon className="size-4" />
            Metas
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-orange transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
          </TabsTrigger>
          <TabsTrigger
            value="preferences"
            className="relative inline-flex items-center gap-1.5 py-4 text-lg group hover:text-black data-[state=active]:shadow-none"
          >
            <Settings2Icon className="size-4" />
            Preferências
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-orange transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
          </TabsTrigger>
        </nav>
  )
}