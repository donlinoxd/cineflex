import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    setIsLoading(true);
    setIsError(false);

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("aborted");
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      });

    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, isError };
};
