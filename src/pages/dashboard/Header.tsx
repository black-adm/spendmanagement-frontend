import { Profile } from "./header/Profile";
import { SearchInput } from "./header/Search";

import logo from "@/assets/images/logo.png";

export function Header() {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        <div className="pt-5 flex justify-between items-center">
          <img src={logo} alt="Logo" />
          <h1 className="text-2xl font-extrabold tracking-wide">
            Olá John, bem vindo(a) de volta
          </h1>
          <div className="flex items-center gap-12">
            <SearchInput />
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}
