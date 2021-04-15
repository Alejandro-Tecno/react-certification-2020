import { useEffect, useState } from "react";
require("dotenv").config();

function useFetch(initialTerm) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const KEY = process.env.REACT_APP_API_KEY1;
  const URL = "https://www.googleapis.com/youtube/v3/search?key=";

  useEffect(() => {
    if (!initialTerm) return;

    const loadData = async () => {
      await fetch(
        `${URL}${KEY}&part=snippet,id&order=viewCount&q=${initialTerm}&type=video&maxResults=20`
      )
        .then((response) => response.json())
        .then((receivedData) => {
          setData(receivedData);
        })
        .catch((error) => {
          setError(error);
        });
      if (error ? console.log(error) : null);
    };
    loadData();
  }, [initialTerm, KEY, error]);

  return data;
}

export default useFetch;
