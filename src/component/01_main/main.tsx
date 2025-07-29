import Image from "next/image";
import SectionContainer from "../container";
import { Route } from "@/app/constants";

export default function MainContainer() {
  return (
    <>
      <SectionContainer className="flex jusitfy-center items-center h-dvh relative overflow-hidden w-dvw">
        <div className="max-w-[800px] m-auto text-center relative z-[2]">
          <h1 className="text-[72px] font-bold leading-[1] mb-5">
            Hello, <br /> My name is Kimjoeun
          </h1>
          <p className="text-lg">
            Bring blockchain to the people. Solana supports experiences for{" "}
            <br />
            power users, new consumers, and everyone in between.
          </p>

          <div className="flex gap-2 items-center justify-center mt-10">
            <button className="rounded-full px-6 py-3 bg-purple-700 hover:text-black hover:bg-white">
              CONTACT
            </button>
            <button className="rounded-full px-6 py-3 bg-blue-700 hover:text-black hover:bg-white">
              BLOG
            </button>
            <button className="rounded-full px-6 py-3 bg-transparent border-1 hover:text-black hover:bg-white">
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
