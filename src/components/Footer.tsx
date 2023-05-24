import { HeartIcon } from "@/assets/icons/HeartIcon";
import { HomeIcon } from "@/assets/icons/HomeIcon";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { UsersIcon } from "@/assets/icons/UsersIcon";
import React from "react";

function Footer() {
  return (
    <nav className="fixed bottom-0 flex justify-between items-center w-[478px] px-4 py-2 border-b-2 border-[#f7f7f7] bg-[#ffffff]">
      <HomeIcon />
      <SearchIcon />
      <PlusIcon />
      <HeartIcon />
      <UsersIcon />
    </nav>
  );
}

export { Footer };
