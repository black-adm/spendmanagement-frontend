import { Button } from '@/components/ui/button'
import { loadingProps } from '@/types/loading'
import { Loader } from 'lucide-react'

export function RegisterButton({ loading }: loadingProps) {
  return (
    <>
      <Button
        type="submit"
        className={`w-full bg-black text-medium-orange hover:bg-light-orange hover:text-black focus:bg-light-orange focus:text-black ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? (
          <Loader className="inline-flex animate-spin size-4 text-medium-orange" />
        ) : (
          'Criar sua conta'
        )}
      </Button>
    </>
  )
}
