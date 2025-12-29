"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useMutation from "@/hooks/useMutation";
import Error from "./fallbacks/error";
import Blog from "@/types/blog";
import { API_URL } from "@/lib/constants";
import { MutationMode } from "@/types/mutation-mode";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z
    .string()
    .min(3, "Title should be above 3 characters")
    .max(200, "Title should be under 200 characters"),
  description: z.string(),
  content: z.string(),
});

const fields = ["title", "description", "content"] as const;

export default function BlogForm({
  mode,
  initialValues,
  blogId,
}: {
  mode: MutationMode;
  initialValues?: Blog;
  blogId?: string;
}) {
  const { mutate, isLoading, error } = useMutation();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || { title: "", description: "", content: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    let mutateURL = API_URL + "/blogs";
    if (mode === "PUT") mutateURL = mutateURL + "/" + blogId;
    mutate(mode, mutateURL, values).then((result) => {
      router.push("/posts" + "/" + result.id);
    });
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((label) => (
          <FormField
            key={label}
            control={form.control}
            name={label}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label[0].toUpperCase() + label.slice(1)}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={"Type the " + label + " here"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button disabled={isLoading} type="submit">
          {isLoading ? "Sending..." : "Send"}
        </Button>

        {error && <Error errorMessage={error.message} />}
      </form>
    </FormProvider>
  );
}
