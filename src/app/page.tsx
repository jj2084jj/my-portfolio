import SectionContainer from "@/component/container";
import Image from "next/image";

export default function Home() {
  const route = [
    {
      title: "MyProfile",
      href: "",
      component: (
        <div className="space-y-1">
          <div>김조은</div>
          <div>1995.08.01</div>
          <div>010-3368-2084</div>
          <div>whdms3368@gmail.com</div>
          <div>서울시 영등포구</div>
        </div>
      ),
    },
    {
      title: "Skills",
      href: "",
      component: (
        <div className="flex flex-col gap-2">
          <div className="rounded-xl bg-white/10 h-[200px] w-full"></div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 bg-white/10 h-[200px] rounded-xl"></div>
            <div className="col-span-1 bg-white/10 h-[200px] rounded-xl"></div>
            <div className="col-span-1 bg-white/10 h-[200px] rounded-xl"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Archiving",
      href: "",
      component: (
        <div className="bg-white/10 h-[calc(100dvh-300px)] w-full"></div>
      ),
    },
    {
      title: "Projects",
      href: "",
      component: (
        <div className="pb-20">
          <section className="grid grid-cols-3 gap-2">
            <div className="bg-white/10  aspect-square col-span-1">1</div>
            <div className="bg-white/10  aspect-square col-span-1">1</div>
            <div className="bg-white/10  aspect-square col-span-1">1</div>
            <div className="bg-white/10  aspect-square col-span-1">1</div>
            <div className="bg-white/10  aspect-square col-span-1">1</div>
            <div className="bg-white/10  aspect-square col-span-1">1</div>
          </section>
          <div className="my-10">
            <button>더보기</button>
          </div>
        </div>
      ),
    },
    {
      title: "Career",
      href: "",
      component: (
        <div>
          <section className="space-y-10">
            <div>
              <h4 className="text-2xl font-semibold">티디아이</h4>
              <p className="opacity-70">2024.08.02 ~ 재직중</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi labore voluptatem accusamus tempore animi illum
                excepturi culpa doloribus, unde perferendis nostrum. Nisi
                veritatis dolor minus similique quis suscipit? Consequatur,
                debitis.
              </p>
              <ul className="mt-5">
                <li className="border-l-3 border-white pl-4 pb-10">
                  <h5 className="bg-white text-black px-2 py-1 rounded inline-block mb-2">
                    000프로젝트
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum, quas tempora praesentium beatae ipsam temporibus
                    fugiat labore optio provident adipisci rerum aliquid, porro
                    sapiente earum! Autem quod impedit maxime laborum.
                  </p>
                </li>
                <li className="border-l-3 border-white pl-4 pb-10">
                  <h5 className="bg-white text-black px-2 py-1 rounded inline-block mb-2">
                    000프로젝트
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum, quas tempora praesentium beatae ipsam temporibus
                    fugiat labore optio provident adipisci rerum aliquid, porro
                    sapiente earum! Autem quod impedit maxime laborum.
                  </p>
                </li>
                <li className="border-l-3 border-white pl-4 pb-10">
                  <h5 className="bg-white text-black px-2 py-1 rounded inline-block mb-2">
                    000프로젝트
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum, quas tempora praesentium beatae ipsam temporibus
                    fugiat labore optio provident adipisci rerum aliquid, porro
                    sapiente earum! Autem quod impedit maxime laborum.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">티디아이</h4>
              <p className="opacity-70">2024.08.02 ~ 재직중</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi labore voluptatem accusamus tempore animi illum
                excepturi culpa doloribus, unde perferendis nostrum. Nisi
                veritatis dolor minus similique quis suscipit? Consequatur,
                debitis.
              </p>
              <ul className="mt-5">
                <li className="border-l-3 border-white pl-4 pb-10">
                  <h5 className="bg-white text-black px-2 py-1 rounded inline-block mb-2">
                    000프로젝트
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum, quas tempora praesentium beatae ipsam temporibus
                    fugiat labore optio provident adipisci rerum aliquid, porro
                    sapiente earum! Autem quod impedit maxime laborum.
                  </p>
                </li>
                <li className="border-l-3 border-white pl-4 pb-10">
                  <h5 className="bg-white text-black px-2 py-1 rounded inline-block mb-2">
                    000프로젝트
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum, quas tempora praesentium beatae ipsam temporibus
                    fugiat labore optio provident adipisci rerum aliquid, porro
                    sapiente earum! Autem quod impedit maxime laborum.
                  </p>
                </li>
                <li className="border-l-3 border-white pl-4 pb-10">
                  <h5 className="bg-white text-black px-2 py-1 rounded inline-block mb-2">
                    000프로젝트
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum, quas tempora praesentium beatae ipsam temporibus
                    fugiat labore optio provident adipisci rerum aliquid, porro
                    sapiente earum! Autem quod impedit maxime laborum.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      ),
    },
  ];
  return (
    <div>
      <header className="bg-black z-[999] fixed w-full h-[60px] text-base text-white flex items-center justify-between px-4 py-2">
        <div className="">오늘 기분을 어떠세요? ☀️</div>
        <div>
          <ul className="flex items-center">
            {route.map((item, index) => {
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
      <main>
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
          {route.map((item, index) => {
            return (
              <SectionContainer key={index} isMargin title={item.title}>
                {item.component}
              </SectionContainer>
            );
          })}
        </div>
      </main>
      <footer className="py-20 text-center font-thin text-white/50">
        2025 @ create by .jenny
      </footer>
    </div>
  );
}
