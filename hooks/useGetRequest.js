import { useCallback, useState } from "react";

const useGetRequest = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const get = useCallback(async () => {
    const reponse = await fetch(url);
    const result = await reponse.json();
    setIsLoading(false);
    return result;
  }, [url]);

  return { get, isLoading };
};

export default useGetRequest;
