import { TabsTrigger } from "@/components/Tabs";
import { DashboardIcon } from "@radix-ui/react-icons";
import {
  FilePieChartIcon,
  HandCoinsIcon,
  ScrollTextIcon,
  Settings2Icon,
} from "lucide-react";
import { useState } from "react";

export function DashboardNavbar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <nav className="w-full flex justify-center items-center space-x-24 border-b border-gray-200">
      <TabsTrigger
        value="dashboard"
        className={`relative inline-flex items-center gap-1.5 py-4 text-lg group hover:text-black data-[state=active]:shadow-none ${
          activeTab === "dashboard" ? "text-black shadow-none" : ""
        }`}
        onClick={() => setActiveTab("dashboard")}
      >
        <DashboardIcon className="size-4" />
        Dashboard
        <span
          className={`absolute left-0 bottom-0 w-full h-0.5 bg-primary-orange transform transition-transform duration-300 ${
            activeTab === "dashboard" ? "scale-x-100" : "scale-x-0"
          }`}
        ></span>
      </TabsTrigger>
      <TabsTrigger
        value="extract"
        className={`relative inline-flex items-center gap-1.5 py-4 text-lg group hover:text-black data-[state=active]:shadow-none ${
          activeTab === "extract" ? "text-black shadow-none" : ""
        }`}
        onClick={() => setActiveTab("extract")}
      >
        <ScrollTextIcon className="size-4" />
        Extrato
        <span
          className={`absolute left-0 bottom-0 w-full h-0.5 bg-primary-orange transform transition-transform duration-300 ${
            activeTab === "extract" ? "scale-x-100" : "scale-x-0"
          }`}
        ></span>
      </TabsTrigger>
      <TabsTrigger
        value="receipts"
        className={`relative inline-flex items-center gap-1.5 py-4 text-lg group hover:text-black data-[state=active]:shadow-none ${
          activeTab === "receipts" ? "text-black shadow-none" : ""
        }`}
        onClick={() => setActiveTab("receipts")}
      >
        <FilePieChartIcon className="size-4" />
        Recibos
        <span
          className={`absolute left-0 bottom-0 w-full h-0.5 bg-primary-orange transform transition-transform duration-300 ${
            activeTab === "receipts" ? "scale-x-100" : "scale-x-0"
          }`}
        ></span>
      </TabsTrigger>
      <TabsTrigger
        value="goals"
        className={`relative inline-flex items-center gap-1.5 py-4 text-lg group hover:text-black data-[state=active]:shadow-none ${
          activeTab === "goals" ? "text-black shadow-none" : ""
        }`}
        onClick={() => setActiveTab("goals")}
      >
        <HandCoinsIcon className="size-4" />
        Metas
        <span
          className={`absolute left-0 bottom-0 w-full h-0.5 bg-primary-orange transform transition-transform duration-300 ${
            activeTab === "goals" ? "scale-x-100" : "scale-x-0"
          }`}
        ></span>
      </TabsTrigger>
      <TabsTrigger
        value="preferences"
        className={`relative inline-flex items-center gap-1.5 py-4 text-lg group hover:text-black data-[state=active]:shadow-none ${
          activeTab === "preferences" ? "text-black shadow-none" : ""
        }`}
        onClick={() => setActiveTab("preferences")}
      >
        <Settings2Icon className="size-4" />
        Preferências
        <span
          className={`absolute left-0 bottom-0 w-full h-0.5 bg-primary-orange transform transition-transform duration-300 ${
            activeTab === "preferences" ? "scale-x-100" : "scale-x-0"
          }`}
        ></span>
      </TabsTrigger>
    </nav>
  );
}
