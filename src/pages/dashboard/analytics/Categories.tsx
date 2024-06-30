import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { EllipsisIcon } from "lucide-react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

interface DataItem {
  subject: string;
  categoryOne: number;
  categoryTwo: number;
  categoryTree: number;
  fullMark: number;
}

const data: DataItem[] = [
  {
    subject: "Aluguel",
    categoryOne: 56,
    categoryTwo: 12,
    categoryTree: 118,
    fullMark: 150,
  },
  {
    subject: "Comida",
    categoryOne: 149,
    categoryTwo: 23,
    categoryTree: 46,
    fullMark: 150,
  },
  {
    subject: "Contas",
    categoryOne: 36,
    categoryTwo: 31,
    categoryTree: 123,
    fullMark: 150,
  },
  {
    subject: "Crédito",
    categoryOne: 40,
    categoryTwo: 111,
    categoryTree: 52,
    fullMark: 150,
  },
  {
    subject: "Transporte",
    categoryOne: 15,
    categoryTwo: 95,
    categoryTree: 54,
    fullMark: 150,
  },
  {
    subject: "Saúde",
    categoryOne: 124,
    categoryTwo: 33,
    categoryTree: 11,
    fullMark: 150,
  },
];

export function ChartCategories() {
  return (
    <Card className="h-[408px]">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <h4 className="text-primary-orange uppercase">
            Resumo de Gastos por categorias
            <p className="text-muted-foreground text-xs tracking-wider">
              Gráficos com análise das suas {""}
              <strong className="text-black">6 principais</strong> categorias.
            </p>
          </h4>
          <Button variant="ghost">
            <EllipsisIcon className="size-4 text-black" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={308}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Lazer"
              dataKey="categoryOne"
              stroke="#f99e00"
              fill="#f99e00"
              fillOpacity={0.6}
            />
            <Radar
              name="Alimentação"
              dataKey="categoryTwo"
              stroke="#008000"
              fill="#008000"
              fillOpacity={0.6}
            />
            <Radar
              name="Contas"
              dataKey="categoryTree"
              stroke="#000000"
              fill="#000000"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
