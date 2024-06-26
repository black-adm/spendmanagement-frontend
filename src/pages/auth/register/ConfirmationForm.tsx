import { Label } from "@/components/Label";
import { RegisterFormSchema } from "@/schemas/registerForm";

interface ConfirmationFormRegisterProps {
  formData: RegisterFormSchema;
}

export function ConfirmationFormRegister({
  formData,
}: ConfirmationFormRegisterProps) {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">Confirmação dos dados</h1>
        <p className="text-muted-foreground font-light italic tracking-wide">
          Revise suas informações e envie o formulário.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label>Nome Completo</Label>
          <p>{formData.name}</p>
        </div>

        <div>
          <Label>Email</Label>
          <p>{formData.username}</p>
        </div>

        <div>
          <Label>Endereço</Label>
          <div className="flex gap-2.5">
            <span>{formData.address}</span>
            <span>{formData.addressNumber}</span> -
            <span className="uppercase">{formData.uf}</span>
            <span>{formData.complement}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>CEP</Label>
            <p>{formData.cep}</p>
          </div>

          <div>
            <Label>Contato</Label>
            <p>{formData.phone}</p>
          </div>

          <div>
            <Label>Data de nascimento</Label>
            <p>{formData.birthdate}</p>
          </div>

          <div>
            <Label>Gênero</Label>
            <p>{formData.gender}</p>
          </div>
        </div>
      </div>
    </>
  );
}
