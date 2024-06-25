import { useState, useEffect } from "react";

interface UseFetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

interface FetchResponse<T> {
  response: T | null;
  error: Error | null;
  isLoading: boolean;
}

const useFetch = <T = any,>(
  url: string,
  options: UseFetchOptions,
  dependencies: any[] = [],
): FetchResponse<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json: T = await res.json();
        setResponse(json);
        setIsLoading(false);
        console.log(`API call: ${url} - Status: ${res.status}`);

        let currentData = localStorage.getItem("API_CALL");
        let parsedData: { status: number; body: string | undefined }[] = [];

        if (currentData) {
          parsedData = JSON.parse(currentData);
        }

        parsedData.push({
          status: res.status,
          body: options.body,
        });

        localStorage.setItem("API_CALL", JSON.stringify(parsedData));
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, dependencies); // dependencies для контроля вызова fetchData

  return { response, error, isLoading };
};

export default useFetch;
