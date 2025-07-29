"use client";

import { useFetchProjects } from "@/hook/useFetchProjects";

export default function ProjectsContainer() {
  const { data } = useFetchProjects();

  console.log(data);
  return <></>;
}
