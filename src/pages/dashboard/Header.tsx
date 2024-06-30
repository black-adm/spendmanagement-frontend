import { Profile } from "./header/Profile";
import { SearchInput } from "./header/Search";

import logo from "@/assets/images/logo.png";

export function Header() {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        <div className="pt-2 flex justify-between items-center">
          <img src={logo} alt="Logo" />
          <h1 className="text-3xl font-extrabold">Seja bem vindo(a)</h1>
          <div className="flex items-center gap-12">
            <SearchInput />
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}
