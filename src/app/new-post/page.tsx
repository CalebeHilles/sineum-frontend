import BlogForm from "@/components/blog-form";

export default function NewPost() {
  return (
    <div className="p-8">
      <BlogForm mode="POST" />
    </div>
  );
}
