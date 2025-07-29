"use client";

import { Route } from "@/app/constants";

export default function Header() {
  return (
    <header className="bg-black z-[999] fixed w-full h-[60px] text-base text-white flex items-center justify-between px-4 py-2">
      <div className="">오늘 기분을 어떠세요? ☀️</div>
      <div>
        <ul className="flex items-center">
          {Route.map((item, index) => {
            return (
              <li
                className="px-3 py-2 cursor-pointer hover:opacity-80"
                key={index}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
