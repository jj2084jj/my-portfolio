"use client";

import { Route } from "@/app/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed z-[999] flex h-[60px] w-full items-center justify-between bg-black px-4 py-2 text-base text-white">
      <Link href={'/'} className="cursor-pointer">☀️KIMJOEUN☀️</Link>
      <div>
        <ul className="flex items-center">
          {Route.map((item, index) => {
            return (
              <li
                className="cursor-pointer px-3 py-2 hover:opacity-80"
                key={index}
                onClick={() => {
                  if (item.href === "") {
                    alert('준비중입니다.') 
                    return;
                  }
                  router.push(item.href);
                }}
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
