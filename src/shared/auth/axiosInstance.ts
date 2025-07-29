import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`;
    config.headers["Notion-Version"] = "2022-06-28";
    
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
