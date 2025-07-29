import axiosInstance from "@/shared/auth/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchNotionProjects = async () => {
  const res = await axiosInstance.post(
    `/v1/databases/${process.env.NEXT_PUBLIC_NOTION_PAGE_ID}/query`,
    {}, // 반드시 빈 객체라도 body 필요
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

export const useFetchProjects = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["useFetchProjects"],
    queryFn: fetchNotionProjects,
  });


  return { data, isLoading, error };
};
