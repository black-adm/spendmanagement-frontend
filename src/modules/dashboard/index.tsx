import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BarChart2, History } from 'lucide-react'
import { DashboardActivity } from './dashboard-activity'
import { DashboardHeader } from './dashboard-header'
import { DashboardOverview } from './dashboard-overview'

export default function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 lg:p-10">
        <Card className="col-span-4">
          <CardHeader className="h-10">
            <CardTitle className="flex items-center gap-3 uppercase">
              <BarChart2 className="text-light-orange h-8 w-8" />
              Resumo da sua conta
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-10">
            <DashboardOverview />
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 uppercase">
              <History className="text-light-orange" />
              Atividades recentes
            </CardTitle>
            <CardDescription>
              Você movimentou <strong className="text-black">5 gastos</strong>{' '}
              recentes este mês.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DashboardActivity />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
