import { AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { CircleDollarSign, Share2, X } from 'lucide-react'

const paymentVoucher = [
  {
    payer: 'Felipe Mattioli',
    establishment: 'Mercado Carrefour',
    price: 'R$ 813,90',
    type: 'Débito',
    category: 'Alimentação',
    status: 'Pagamento Aprovado',
  },
]

export function DashboardViewModal() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <header className="w-full pb-4 flex items-center justify-between border-separate">
          <span className="pl-1 text-gray-400">
            <CircleDollarSign className="h-6 w-6" />
          </span>

          <div className="flex gap-5">
            <button
              title="Compartilhar"
              className="hover:p-1 hover:rounded-full hover:bg-gray-100"
            >
              <Share2 className="h-4 w-4" />
            </button>

            <AlertDialogTrigger asChild>
              <button
                title="Fechar"
                className="hover:p-1 hover:rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </AlertDialogTrigger>
          </div>
        </header>

        <div className="p-2 w-full">
          <h2 className="text-lg text-left uppercase font-semibold">
            Comprovante de <br />
            pagamento
          </h2>
          <p className="pt-1 text-sm">02/03/2024 ás 17:18</p>
        </div>

        <main className="pt-8 pb-1 w-full gap-4">
          <div>
            {paymentVoucher.map((voucher, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center space-y-8"
              >
                <div className="w-full flex justify-between items-center text-xs text-muted-foreground font-medium uppercase">
                  <div className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <p>Pagador</p>
                  </div>
                  <p>{voucher.payer}</p>
                </div>

                <div className="w-full flex justify-between items-center text-xs text-muted-foreground font-medium uppercase">
                  <div className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <p>Estabelecimento</p>
                  </div>
                  <p>{voucher.establishment}</p>
                </div>

                <div className="w-full flex justify-between items-center text-xs text-muted-foreground font-medium uppercase">
                  <div className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <p>Categoria</p>
                  </div>
                  <p>{voucher.category}</p>
                </div>

                <div className="w-full flex justify-between items-center text-xs text-muted-foreground font-medium uppercase">
                  <div className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <p>Tipo de pagamento</p>
                  </div>
                  <p>{voucher.type}</p>
                </div>

                <div className="w-full flex justify-between items-center text-xs text-muted-foreground font-medium uppercase">
                  <div className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <p>Valor</p>
                  </div>
                  <p>{voucher.price}</p>
                </div>

                <div className="w-full flex justify-between items-center text-xs text-muted-foreground font-medium uppercase">
                  <div className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <p>Status</p>
                  </div>
                  <p>{voucher.status}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <footer className="bg-gray-50 p-4 rounded-sm w-full flex flex-col items-center justify-center space-y-3">
        <span className="text-center text-[10px] text-gray-400">
          ID - c9229c35-fa95-4798-b998-edb240359866
        </span>
        <p className="text-center text-[10px] text-gray-400">
          © 2024 SpendManagement ™ <br />
          Todos os direitos reservados.
        </p>
      </footer>
    </>
  )
}
