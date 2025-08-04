"use client";

import { useFetchProjects } from "@/hook/useFetchProjects";
import Card from "@/shared/ui/card";
import SectionContainer from "@/shared/ui/container";

export default function ProjectsContainer() {
  const { data } = useFetchProjects();

  if (!data) return <></>;
  return (
    <SectionContainer className="m-auto my-10 max-w-[1080px]">
      <h1 className="mb-10 px-4 text-3xl font-bold">
        Jenny&apos;s 프로젝트 소개
      </h1>
      <section className="m-auto grid w-[calc(100%-32px)] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project, index) => {
          return (
            <Card key={index} className="group">
              <Card.Title className="flex items-center justify-between">
                <div>
                  {project.name}
                  {project.UIUX && (
                    <span className="ml-2 text-sm font-normal text-gray-400">
                      ({project.UIUX})
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    {project.techStack.map(
                      (
                        item: { name: string; color: string },
                        index: number
                      ) => {
                        return (
                          <div
                            className={`rounded-sm px-2 text-sm text-white opacity-80`}
                            style={{
                              backgroundColor: item.color,
                            }}
                            key={index}
                          >
                            {item.name}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </Card.Title>
              <Card.Body className="relative !p-0">
                {project.image && (
                  <div
                    className="h-[200px] w-full bg-cover bg-center"
                    style={{
                      background: `url(${project.image}) no-repeat center center`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                )}
                <div className="absolute top-0 z-10 h-full min-h-[100px] w-full content-center bg-black/70 p-4 text-center font-normal opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {project.information}
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="flex justify-end gap-1">
                  {project.URL && (
                    <button
                      onClick={() => {
                        if (project.URL.includes("http")) {
                          window.open(project.URL, "_blank");
                        } else {
                          alert("비밀 유지 조항으로 인해 접근이 불가능합니다.");
                        }
                      }}
                      className="cursor-pointer rounded-full bg-purple-700 px-3 py-1 hover:bg-white hover:text-black"
                    >
                      Link
                    </button>
                  )}

                  <button className="cursor-pointer rounded-full border-1 border-purple-700 px-3 py-1 text-base text-purple-700 hover:border-white hover:bg-white hover:text-black">
                    Go
                  </button>
                </div>
              </Card.Footer>
            </Card>
          );
        })}
      </section>
    </SectionContainer>
  );
}
