import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Eye } from 'lucide-react'
import { DashboardViewModal } from './dashboard-view-modal'

export function DashboardViewButton() {
  return (
    <div className="pl-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className="hover:bg-gray-100 hover:p-1 hover:rounded-lg"
            title="Visualizar"
          >
            <Eye className="hover:text-primary-green w-5 h-5" />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-sm">
          <DashboardViewModal />
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
