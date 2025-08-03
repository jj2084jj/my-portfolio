import axiosInstance from '@/shared/auth/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { use, useEffect, useState } from 'react';

const fetchNotionProjects = async () => {
  const res = await axiosInstance.post('/api/notion', {});
  return res.data;
};

export const useFetchProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ['useFetchProjects'],
    queryFn: fetchNotionProjects,
  });

  useEffect(()=>{
    if(data && data.results && data.results.length > 0){
      const reData = data.results.map((project:any,index:number)=>{
        const name = project.properties.project.title[0].plain_text
        const created_time = project.created_time.split('T')[0] || ''
        const information = project.properties.information.rich_text[0]?.plain_text || ''
        const contribution = project.properties.contribution.rich_text[0]?.plain_text || ''
        const URL = project.properties.URL.rich_text[0]?.plain_text || ''
        const image = project.properties.image.rich_text[0]?.plain_text || ''
        const techStack = project.properties.techStack.multi_select.map((item:any)=> {
          return {
            name:item.name,
            color:item.color
          }
        })
       
        const skill = project.properties.skill.multi_select.map((item:any)=>{
          return {
            name:item.name,
            color:item.color
          }
        })
        const API = project.properties.API.multi_select.map((item:any)=>{
          return {
            name:item.name,
            color:item.color
          }
        })

        const UIUX = project.properties.UIUX.select?.name || ''

        // const UIUX = project.properties.UIUX.select[0]?.name || ''
        // const reValue = {}
        // for(let i = 0; i < name.length; i++){
        //   const value = data.results[index].properties[`${name[i]}`]
        //   console.log(value)
        // }
        // console.log(reValue)
        return {
          name,information,created_time,techStack,contribution,URL,skill,API,UIUX,image
          // id: project.id,
          // name: project.properties.Name.title[0].plain_text,
          // api: project.properties.API.title[0].plain_text,
        }
      })
      setProjects(reData)
    }
  },[data])

  return { data:projects, isLoading, error };
};
