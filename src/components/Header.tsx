import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="flex mt-8 items-center justify-center gap-10 w-full text-[#404040] p-5 pb-2 ">
      <div>
        <Image
          src="/logo.jpg"
          className="w-[92px] h-[92px]"
          alt="logo"
          width={1600}
          height={1600}
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-3xl">GreenDeal</h2>
        <button className="border-[#f1f1f1] w-full rounded-md border-2 font-semibold hover:bg-[#f1f1f1] transition-colors">
          Editar perfil
        </button>
      </div>
    </header>
  );
}

export { Header };
