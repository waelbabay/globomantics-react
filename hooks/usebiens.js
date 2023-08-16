import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useBiens = () => {
  const [biens, setBiens] = useState([]);
  const { get, isLoading } = useGetRequest(
    "http://localhost:8080/api/v1/biens"
  );

  useEffect(() => {
    const fetchBiens = async () => {
      const biens = await get();
      setBiens(biens);
    };

    fetchBiens();
  }, [get]);

  return { biens, isLoading };
};

export default useBiens;
