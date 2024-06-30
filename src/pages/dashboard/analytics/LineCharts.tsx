import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { EllipsisIcon } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Janeiro",
    uv: 8000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Junho",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Dezembro",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

export function LineChartsResume() {
  return (
    <Card className="h-80">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <h4 className="text-primary-orange uppercase">
            Resumo semestral de despesas
            <p className="text-muted-foreground text-xs tracking-wider">
              Gráficos com análise de custos por semestre.
            </p>
          </h4>
          <Button variant="ghost">
            <EllipsisIcon className="size-4 text-black" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#f99e00"
              fill="#f99e00"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
