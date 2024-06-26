import { Label } from "@/components/Label";

export function ConfirmationFormRegister() {
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
          <Label>Name</Label>
          <p>John Doe</p>
        </div>
      
        <div>
          <Label>Email</Label>
          <p>john@example.com</p>
        </div>
      
        <div>
          <Label>Phone</Label>
          <p>123-456-7890</p>
        </div>
      
        <div>
          <Label>Card Number</Label>
          <p>1234 5678 9012 3456</p>
        </div>
      
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Expiry Date</Label>
            <p>12/25</p>
          </div>
          <div>
            <Label>CVC</Label>
            <p>123</p>
          </div>
        </div>
      </div>
    </>
  );
}
