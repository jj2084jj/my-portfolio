import axiosInstance from "@/shared/auth/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchNotionProjects = async () => {
  const res = await axiosInstance.post(
    `/v1/databases/${process.env.NEXT_PUBLIC_NOTION_PAGE_ID}/query`,
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
