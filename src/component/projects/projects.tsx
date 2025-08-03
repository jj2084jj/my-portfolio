"use client";

import { useFetchProjects } from "@/hook/useFetchProjects";
import Card from "@/shared/ui/card";
import SectionContainer from "@/shared/ui/container";

export default function ProjectsContainer() {
  const { data } = useFetchProjects();

  console.log(data);
  if (!data) return <></>;
  return (
    
      
    <SectionContainer className="max-w-[1080px] my-10 m-auto ">
      <h1 className="text-3xl font-bold mb-10 px-4">Jenny&apos;s 프로젝트 소개</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 m-auto w-[calc(100%-32px)] lg:grid-cols-3 gap-6">
      {data.map((project,index) => {
        return <Card key={index} className="group">
          <Card.Title className="flex justify-between items-center"><div >{project.name}{project.UIUX && <span className="text-sm text-gray-400 font-normal ml-2">({project.UIUX})</span>}</div>
          <div className="flex justify-between">
              <div className="flex gap-2">
                {project.techStack.map((item: { name: string; color: string }, index: number) => {
                  return <div className={`text-sm px-2 opacity-80 rounded-sm text-white `} style={{
                    backgroundColor:item.color
                  }} key={index}>{item.name}</div>
                })}
              </div>
            </div></Card.Title>
          <Card.Body className="!p-0 relative">
         
            {
              project.image && <div className="w-full h-[200px] bg-cover bg-center" style={{
                background:`url(${project.image}) no-repeat center center`,
                backgroundSize:'cover'
              }}></div>
            }
            <div className="min-h-[100px] opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 w-full h-full bg-black/70 absolute top-0 content-center text-center font-normal z-10">{project.information}</div>
            
          </Card.Body>
          <Card.Footer>
          
            <div className="flex justify-end gap-1">
              {
                project.URL && <button onClick={()=>{
                  if(project.URL.includes('http')){
                    window.open(project.URL,'_blank')
                  }else{
                    alert("비밀 유지 조항으로 인해 접근이 불가능합니다.")
                  }
                }} className="rounded-full cursor-pointer px-3 py-1 bg-purple-700 hover:text-black hover:bg-white">
                Link
              </button>
              }
              
              <button className="rounded-full hover:border-white cursor-pointer px-3 py-1 text-purple-700 text-base border-1 border-purple-700 hover:text-black hover:bg-white">
                Go
              </button>
            </div>
          </Card.Footer>
        </Card>;
      })}</section>
    </SectionContainer>
    
  );
}
