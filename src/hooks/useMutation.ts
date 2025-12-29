"use client";

import Blog from "@/types/blog";
import { MutationMode } from "@/types/mutation-mode";
import { useState } from "react";

export default function useMutation() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  async function mutate(
    mode: MutationMode,
    url: string,
    data: Omit<Blog, "id">
  ) {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: mode,
        headers: { "Content-Type": "application/json" },
        body: data ? JSON.stringify(data) : undefined,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const result = await response.json();

      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  return { mutate, isLoading, error };
}
