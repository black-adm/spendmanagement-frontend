import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Separator } from "@/components/Separator";
import { EnvelopeClosedIcon, EyeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";

export function SignInForm() {
  return (
    <form className="w-full space-y-3 items-center pt-10">
      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <EnvelopeClosedIcon className="ml-3 size-6" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="email"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={60}
          required
        />
      </div>

      <div className="flex items-center space-x-3 py-1 rounded-lg border-2 border-gray-300">
        <LockClosedIcon className="ml-3 size-7" />
        <Separator className="w-0.5 h-3.5 bg-gray-300" />
        <Input
          type="password"
          className="flex py-2 w-full md:px-3 md:py-3 outline-none border-none font-medium text-lg tracking-widest placeholder:text-primary-gray focus-visible:ring-0"
          maxLength={10}
          required
        />
        <button type="button" className="pr-4 bg-none">
          <EyeClosedIcon className="size-5" />
        </button>
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          className="w-full text-primary-orange hover:text-white hover:opacity-90"
        >
          Fazer login
        </Button>
      </div>
    </form>
  );
}
