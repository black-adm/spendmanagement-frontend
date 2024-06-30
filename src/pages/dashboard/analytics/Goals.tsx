import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Progress } from "@/components/Progress";
import { EllipsisIcon } from "lucide-react";

export function GoalsCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <h4 className="text-primary-orange uppercase">
            Minhas metas estabelecidas
            <p className="text-muted-foreground text-xs tracking-wider">
              Acompanhe o proguesso dos seus objetivos.
            </p>
          </h4>
          <Button variant="ghost">
            <EllipsisIcon className="size-4 text-black" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Entrada do meu carro</div>
            <div className="text-sm text-muted-foreground">75%</div>
          </div>
          <Progress value={75} />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">
              Econômizar com alimentação
            </div>
            <div className="text-sm text-muted-foreground">40%</div>
          </div>
          <Progress value={40} />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">
              Pagar últimas parcelas da faculdade
            </div>
            <div className="text-sm text-muted-foreground">90%</div>
          </div>
          <Progress value={90} />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-sm font-medium uppercase">
          Proguesso final das metas
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-muted-foreground">61%</div>
          <Progress value={61} className="w-28" />
        </div>
      </CardFooter>
    </Card>
  );
}
