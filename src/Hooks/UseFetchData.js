/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const UseFetchData = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const {
        data: { results },
      } = response;
      setData(results);
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default UseFetchData;
