import Image from "next/image";
import React from "react";

function Main() {
  return (
    <main className="grid grid-cols-3 w-full h-full gap-[2px] mb-[42px]">
      <div className="w-[158px] h-[158px] bg-[#fabebd]">
        <Image
          src="/learnMore.jpg"
          className="w-full h-full"
          alt="logo"
          width={1600}
          height={1600}
        />
      </div>
      <div className="w-[158px] h-[158px] bg-[#fdd2d1]">
        <Image
          src="/logo.jpg"
          className="w-full h-full"
          alt="logo"
          width={1600}
          height={1600}
        />
      </div>
      <div className="w-[158px] h-[158px] bg-[#fabebd]">
        <Image
          src="/who.jpg"
          className="w-full h-full"
          alt="cards"
          width={1600}
          height={1600}
        />
      </div>
      <div className="w-[158px] h-[158px] bg-[#faaeae]">
        <Image
          src="/newConcept.jpg"
          className="w-full h-full"
          alt="logo"
          width={1600}
          height={1600}
        />
      </div>
      <div className="w-[158px] h-[158px] bg-[#fabebd]">
        <Image
          src="/recycling.jpg"
          className="w-full h-full"
          alt="logo"
          width={1600}
          height={1600}
        />
      </div>
      <div className="w-[158px] h-[158px] bg-[#fdd2d1]">
        <Image
          src="/RAEE.jpg"
          className="w-full h-full"
          alt="logo"
          width={1600}
          height={1600}
        />
      </div>
      <div className="w-[158px] h-[158px] bg-[#fabebd]">
        <Image
          src="/newProduct.jpg"
          className="w-full h-full"
          alt="logo"
          width={1600}
          height={1600}
        />
      </div>
      <div className="w-[158px] h-[158px] bg-[#fdd2d1]">
        <Image
          src="/newEconomy.jpg"
          className="w-full h-full"
          alt="logo"
          width={1600}
          height={1600}
        />
      </div>
      <div className="w-[158px] h-[158px] bg-[#faaeae]">
        <Image
          src="/eWaste.jpg"
          className="w-full h-full"
          alt="logo"
          width={1600}
          height={1600}
        />
      </div>
      {/* <div className="w-[158px] h-[158px] bg-[#fdd2d1]">
        <div className="w-full h-full backdrop-blur-3xl bg-gray-400"></div>
      </div>
      <div className="w-[158px] h-[158px] bg-[#fdd2d1]">
        <div className="w-full h-full backdrop-blur-3xl bg-gray-400"></div>
      </div>
      <div className="w-[158px] h-[158px] bg-[#fdd2d1]">
        <div className="w-full h-full backdrop-blur-3xl bg-gray-400"></div>
      </div>
      <div className="w-[158px] h-[158px] bg-[#fdd2d1]">
        <div className="w-full h-full backdrop-blur-3xl bg-gray-400"></div>
      </div>
      <div className="w-[158px] h-[158px] bg-[#fdd2d1]">
        <div className="w-full h-full backdrop-blur-3xl bg-gray-400"></div>
      </div>
      <div className="w-[158px] h-[158px] bg-[#fdd2d1]">
        <div className="w-full h-full backdrop-blur-3xl bg-gray-400"></div>gg
      </div> */}
    </main>
  );
}

export { Main };
