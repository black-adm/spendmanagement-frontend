import { Profile } from "./header/Profile";

import logo from "@/assets/images/logo.png";

export function Header() {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        <div className="pt-5 flex justify-between items-center">
          <img src={logo} alt="Logo" />
          <h1 className="text-2xl font-extrabold tracking-wide">
            Olá <span className="text-primary-orange">John</span>, 
            bem vindo(a) de volta
          </h1>
          <div className="flex items-center">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}
