"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative flex items-center justify-center bg-[#414e58] px-[15px]">
      <Image src="https://i.imgur.com/ZrTktWA.png" width={230} height={28} className="w-[95px] h-[28px]" alt="logo" />
    </div>
  );
}
