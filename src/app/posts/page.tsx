"use client";
import Card from "@/components/card";
import Error from "@/components/fallbacks/error";
import Loading from "@/components/fallbacks/loading";
import { useBlogs } from "@/hooks/useBlogs";

export default function Posts() {
  const { blogs, isLoading, error } = useBlogs();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-3">
      {blogs.map((blog) => (
        <Card title={blog.title} description={blog.description} key={blog.id} />
      ))}
    </div>
  );
}
