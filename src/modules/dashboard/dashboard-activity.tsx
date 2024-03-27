import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DashboardViewButton } from './dashboard-view-button'

export function DashboardActivity() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://user-images.githubusercontent.com/741969/99538099-3b7a5d00-298b-11eb-9f4f-c3d0cd4a5280.png"
            alt="Pix"
          />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Transferência Pix</p>
          <p className="text-sm text-muted-foreground">Casas Bahia</p>
        </div>
        <div className="ml-auto font-medium">
          R$ 1.999,00
          <p className="text-xs text-muted-foreground text-right">02/03/2024</p>
        </div>
        <DashboardViewButton />
      </div>

      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage
            src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-qr-code-icon-vector-illustration-isolated-on-white-background-png-image_4951059.png"
            alt="QR Code"
          />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Pagamento QR Code</p>
          <p className="text-sm text-muted-foreground">Mercado Carrefour</p>
        </div>
        <div className="ml-auto font-medium">
          R$ 37,24
          <p className="text-xs text-muted-foreground text-right">07/03/2024</p>
        </div>
        <DashboardViewButton />
      </div>

      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://cdn-icons-png.flaticon.com/512/6963/6963703.png"
            alt="Cartão de crédito"
          />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Parcelamento cartão de crédito
          </p>
          <p className="text-sm text-muted-foreground">Borracharia do Zé</p>
        </div>
        <div className="ml-auto font-medium">
          <span className="text-xs font-semibold">4x</span> R$ 221,09
          <p className="text-xs text-muted-foreground text-right">14/03/2024</p>
        </div>
        <DashboardViewButton />
      </div>

      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://i.ibb.co/8M1W3Z9/Boleto-ok-original-1.png"
            alt="Boleto"
          />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Boleto convênio</p>
          <p className="text-sm text-muted-foreground">Hospital Unimed</p>
        </div>
        <div className="ml-auto font-medium">
          R$ 136,48
          <p className="text-xs text-muted-foreground text-right">19/03/2024</p>
        </div>
        <DashboardViewButton />
      </div>

      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://img2.gratispng.com/20180509/eaw/kisspng-invoice-computer-icons-medical-billing-payment-tmall-discount-volume-5af2df49e0e4d0.6946365915258663139212.jpg"
            alt="Fatura"
          />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Fatura Vivo</p>
          <p className="text-sm text-muted-foreground">Vivo Controle 8GB</p>
        </div>
        <div className="ml-auto font-medium">
          R$ 45,00
          <p className="text-xs text-muted-foreground text-right">21/03/2024</p>
        </div>
        <DashboardViewButton />
      </div>
    </div>
  )
}
