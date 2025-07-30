import axiosInstance from '@/shared/auth/axiosInstance';
import { useQuery } from '@tanstack/react-query';

const fetchNotionProjects = async () => {
  const res = await axiosInstance.post('/api/notion', {});
  return res.data;
};

export const useFetchProjects = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['useFetchProjects'],
    queryFn: fetchNotionProjects,
  });

  return { data, isLoading, error };
};
