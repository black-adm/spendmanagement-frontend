import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import {
  CircleDollarSignIcon,
  CreditCardIcon,
  LineChartIcon,
  Wallet2Icon,
} from "lucide-react";
import { Header } from "./header/Header";
import { Sidebar } from "./Sidebar";

export function DashboardPage() {
  return (
    <div className="h-full w-screen overflow-hidden">
      <Header />
      <Sidebar />
      <div className="w-full max-w-6xl mx-auto px-6 pt-16">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="max-w-md grid grid-cols-2 gap-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de gastos
                </CardTitle>
                <CircleDollarSignIcon className="size-5" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 1.899,76</div>
                <p className="text-xs text-muted-foreground">
                  <strong className="text-primary-green pr-1">+2.8%</strong>
                  comparado ao mês passado.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Cartão de crédito
                </CardTitle>
                <CreditCardIcon className="size-5" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 213,44</div>
                <p className="text-xs text-muted-foreground">
                  <strong className="text-primary-red pr-1">-5%</strong>
                  comparado ao mês passado.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pagamentos a vista
                </CardTitle>
                <Wallet2Icon className="size-5" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 655,20</div>
                <p className="text-xs text-muted-foreground">
                  <strong className="text-primary-green pr-1">+2.3%</strong>
                  comparado ao mês passado.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Economia</CardTitle>
                <LineChartIcon className="size-5" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 94,08</div>
                <p className="text-xs text-muted-foreground">
                  <strong className="text-primary-red pr-1">-7%</strong>
                  comparado ao mês passado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
