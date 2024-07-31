"partner-image-list/"
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, baseHeaders } from "../repository/repository";

function useHomeCatalog() {
  const [homeData, setHomeData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const endPoint = "partner-image-list/";
      try {
        const response = await axios.get(baseUrl + endPoint, {
          headers: baseHeaders,
        });
        setHomeData(response?.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const katalogId = (id) => {
    console.log(`Selected katalog ID: ${id}`);
  };

  return {
    homeData,
    error,
    katalogId,
  };
}

export default useHomeCatalog;
