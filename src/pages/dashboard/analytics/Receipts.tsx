import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { EllipsisIcon } from "lucide-react";

export function ReceiptsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <h4 className="text-primary-orange uppercase">
            Recibos adicionados recentementes
            <p className="text-muted-foreground text-xs tracking-wider">
              Histórico dos recibos mais recentes cadastrados.
            </p>
          </h4>
          <Button variant="ghost">
            <EllipsisIcon className="size-4 text-black" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>CR</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="font-medium leading-none">Carrefour</p>
              <p className="text-sm text-muted-foreground">Mercado</p>
            </div>
            <div className="ml-auto font-medium">R$ 1,999,23</div>
          </div>

          <div className="flex items-center">
            <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
              <AvatarImage src="/avatars/02.png" alt="Avatar" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="font-medium leading-none">JL Cars</p>
              <p className="text-sm text-muted-foreground">Contas</p>
            </div>
            <div className="ml-auto font-medium">R$ 239,00</div>
          </div>

          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/03.png" alt="Avatar" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="font-medium leading-none">Unimed</p>
              <p className="text-sm text-muted-foreground">Saúde</p>
            </div>
            <div className="ml-auto font-medium">R$ 142,78</div>
          </div>

          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/04.png" alt="Avatar" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="font-medium leading-none">MC Donald's</p>
              <p className="text-sm text-muted-foreground">Alimentação</p>
            </div>
            <div className="ml-auto font-medium">R$ 46,55</div>
          </div>

          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/05.png" alt="Avatar" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="font-medium leading-none">Shopee</p>
              <p className="text-sm text-muted-foreground">
                Crédito
              </p>
            </div>
            <div className="ml-auto font-medium">R$ 81,00</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
