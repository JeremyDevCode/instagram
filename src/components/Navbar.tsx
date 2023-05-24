import { AddIcon } from "@/assets/icons/AddIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 flex justify-between items-center w-[478px] px-4 py-2 border-b-2 border-[#f7f7f7] bg-[#ffffff]">
      <button>
        <SunIcon />
      </button>
      <h2 className="text-[#0D0F12] font-medium">greendeal.pe</h2>
      <AddIcon />
    </nav>
  );
}

export { Navbar };
