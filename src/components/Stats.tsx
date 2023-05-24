import React from "react";

function Stats() {
  return (
    <ul className="flex text-[#404040] items-center justify-around w-full text-center py-3 text-sm border-y-2 border-[#f7f7f7]">
      <li className="flex flex-col items-center justify-center">
        <span className="font-semibold">73</span>
        <span>publicaciones</span>
      </li>
      <li className="flex flex-col items-center justify-center">
        <span className="font-semibold">551</span>
        <span>seguidores</span>
      </li>
      <li className="flex flex-col items-center justify-center">
        <span className="font-semibold">137</span>
        <span>seguidos</span>
      </li>
    </ul>
  );
}

export { Stats };
