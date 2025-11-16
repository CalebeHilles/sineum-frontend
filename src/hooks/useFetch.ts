import { useEffect, useState } from "react";

function useFetch<T>(url: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!url) {
      setData(null);
      setError(new Error("No provided URL "));
      setIsLoading(false);
      return;
    }

    setData(null);
    setError(null);
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url as string);
        if (!response.ok) {
          throw new Error("Invalid value");
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
