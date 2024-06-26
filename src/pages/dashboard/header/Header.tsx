import { Profile } from "./Profile";
import { SearchInput } from "./Search";

import logo from "@/assets/images/logo.png";

export function Header() {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        <div className="py-3 flex justify-between items-center">
          <img src={logo} alt="Logo" />
          <h1 className="text-3xl font-extrabold">Seja bem vindo</h1>
          <div className="flex items-center gap-12">
            <SearchInput />
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}
