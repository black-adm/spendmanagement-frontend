import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";

const imgUrl = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"

export function Profile() {
  return (
    <>
      <div className="flex items-center gap-4">
        <Avatar className="size-8">
          <AvatarImage src={imgUrl} alt="@shadcn" />
          <AvatarFallback>USR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center">
          <h4 className="text-lg">John Doe</h4>
          <p className="text-muted-foreground text-sm">Pessoa fisíca</p>
        </div>
      </div>
    </>
  );
}
