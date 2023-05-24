import { BookmarkIcon } from "@/assets/icons/BookmarkIcon";
import { GridIcon } from "@/assets/icons/GridIcon";
import { LayoutIcon } from "@/assets/icons/LayoutIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import React from "react";

function Navigate() {
  return (
    <div className="flex text-[#404040] items-center justify-around w-full text-center py-3 text-sm">
      <GridIcon />
      <LayoutIcon />
      <BookmarkIcon />
      <UserIcon />
    </div>
  );
}

export { Navigate };
