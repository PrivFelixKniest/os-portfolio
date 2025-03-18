"use client";
import Image from "next/image";
import { StartMenu } from "./start-menu";
import { useState } from "react";

export function OSButton() {
  const [showStartMenu, setShowStartMenu] = useState(false);

  return (
    <div className="relative h-full">
      <button
        onClick={() => setShowStartMenu((prev) => !prev)}
        className="px-2 hover:bg-gray-200/10 transition-all cursor-pointer h-full"
      >
        <Image src="/os.svg" width={30} height={30} alt="OS svg" />
      </button>
      {showStartMenu && <StartMenu />}
    </div>
  );
}
