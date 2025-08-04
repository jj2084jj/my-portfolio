import { useEffect, useState } from "react";

import axiosInstance from "@/shared/auth/axiosInstance";
import { useQuery } from "@tanstack/react-query";

interface NotionProject {
  properties: {
    project: { title: Array<{ plain_text: string }> };
    created_time: string;
    information: { rich_text: Array<{ plain_text: string }> };
    contribution: { rich_text: Array<{ plain_text: string }> };
    URL: { rich_text: Array<{ plain_text: string }> };
    image: { rich_text: Array<{ plain_text: string }> };
    techStack: { multi_select: Array<{ name: string; color: string }> };
    skill: { multi_select: Array<{ name: string; color: string }> };
    API: { multi_select: Array<{ name: string; color: string }> };
    UIUX: { select?: { name: string } };
  };
}

interface Project {
  name: string;
  information: string;
  created_time: string;
  techStack: Array<{ name: string; color: string }>;
  contribution: string;
  URL: string;
  skill: Array<{ name: string; color: string }>;
  API: Array<{ name: string; color: string }>;
  UIUX: string;
  image: string;
}

const fetchNotionProjects = async () => {
  const res = await axiosInstance.post("/api/notion", {});
  return res.data;
};

export const useFetchProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["useFetchProjects"],
    queryFn: fetchNotionProjects,
  });

  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      const reData = data.results.map((project: NotionProject) => {
        const name = project.properties.project.title[0]?.plain_text;
        // const created_time = project.properties.created_time?.split('T')[0] || '';
        const information =
          project.properties.information.rich_text[0]?.plain_text || "";
        const contribution =
          project.properties.contribution.rich_text[0]?.plain_text || "";
        const URL = project.properties.URL.rich_text[0]?.plain_text || "";
        const image = project.properties.image.rich_text[0]?.plain_text || "";
        const techStack = project.properties.techStack.multi_select.map(
          (item) => {
            return {
              name: item.name,
              color: item.color,
            };
          }
        );

        const skill = project.properties.skill.multi_select.map((item) => {
          return {
            name: item.name,
            color: item.color,
          };
        });
        const API = project.properties.API.multi_select.map((item) => {
          return {
            name: item.name,
            color: item.color,
          };
        });

        const UIUX = project.properties.UIUX.select?.name || "";

        return {
          name,
          information,
          techStack,
          contribution,
          URL,
          skill,
          API,
          UIUX,
          image,
        };
      });
      setProjects(reData);
    }
  }, [data]);

  return { data: projects, isLoading, error };
};
