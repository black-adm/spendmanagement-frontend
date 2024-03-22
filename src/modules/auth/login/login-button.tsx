import { LoadingProps } from '@/types/loading'
import { Loader, LogIn } from 'lucide-react'

export function SubmitButton({ loading }: LoadingProps) {
  return (
    <>
      <button
        type="submit"
        className={`flex items-center gap-x-2 justify-center w-full px-3 py-2 md:px-4 md:py-3.5 rounded-lg font-medium bg-black text-white hover:bg-primary-black focus:bg-primary-black transition-colors ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? (
          <Loader className="inline-flex animate-spin size-4 text-white" />
        ) : (
          <span>Acessar</span>
        )}
        <LogIn className={`size-4 ${loading ? 'hidden' : ''}`} />
      </button>
    </>
  )
}
