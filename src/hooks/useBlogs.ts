import Blog from "@/types/blog";
import useFetch from "./useFetch";

const API_URL = "https://sineum-backend-production.up.railway.app";

export function useBlogs() {
  const { data, isLoading, error } = useFetch<Blog[]>(`${API_URL}/blogs`);

  return {
    blogs: data || [],
    isLoading,
    error,
  };
}

export function useBlog(id: string) {
  const { data, isLoading, error } = useFetch<Blog>(`${API_URL}/blogs/${id}`);

  return {
    blog: data,
    isLoading,
    error,
  };
}
