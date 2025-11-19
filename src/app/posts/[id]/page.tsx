"use client";

import Error from "@/components/fallbacks/error";
import Loading from "@/components/fallbacks/loading";
import { useBlog } from "@/hooks/useBlogs";
import { use } from "react";

export default function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const { blog, isLoading, error } = useBlog(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  console.log(blog);

  return (
    <div className="flex items-center max-h-screen max-w-screen flex-col gap-4 sm:mx-10 m-4">
      <h1>{blog?.title}</h1>
      <p className="break-words font-extralight">{blog?.content}</p>
    </div>
  );
}
