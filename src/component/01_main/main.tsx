import Image from "next/image";

import { Route } from "@/app/constants";

import SectionContainer from "../../shared/ui/container";

export default function MainContainer() {
  return (
    <>
      <SectionContainer className="jusitfy-center relative flex h-dvh w-dvw items-center overflow-hidden">
        <div className="relative z-[2] m-auto max-w-[800px] text-center">
          <h1 className="mb-5 text-[72px] leading-[1] font-bold">
            Hello, <br /> My name is Kimjoeun
          </h1>
          <p className="text-lg">
            Bring blockchain to the people. Solana supports experiences for{" "}
            <br />
            power users, new consumers, and everyone in between.
          </p>

          <div className="mt-10 flex items-center justify-center gap-2">
            <button className="rounded-full bg-purple-700 px-6 py-3 hover:bg-white hover:text-black">
              CONTACT
            </button>
            <button className="rounded-full bg-blue-700 px-6 py-3 hover:bg-white hover:text-black">
              BLOG
            </button>
            <button className="rounded-full border-1 bg-transparent px-6 py-3 hover:bg-white hover:text-black">
              GIT
            </button>
          </div>
        </div>
        <article>
          <Image
            className="absolute -top-10 -right-[600px]"
            src={"/image/source.webp"}
            alt=""
            width={1357}
            height={708}
          />
          <Image
            className="absolute -top-[200px] -left-[700px]"
            src={"/image/source.webp"}
            alt=""
            width={1357}
            height={708}
          />
        </article>
      </SectionContainer>

      <div className="!space-y-20">
        {Route.map((item, index) => {
          return (
            <SectionContainer key={index} isMargin title={item.title}>
              {item.component}
            </SectionContainer>
          );
        })}
      </div>
    </>
  );
}
