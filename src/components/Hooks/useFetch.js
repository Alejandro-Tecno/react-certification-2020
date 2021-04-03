import { useEffect, useState } from "react";
require("dotenv").config();

function useFetch(initialTerm) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const KEY = process.env.REACT_APP_API_KEY3;
  const URL = "https://www.googleapis.com/youtube/v3/search?key=";

  useEffect(() => {
    if (!initialTerm) return;
    setLoading(true);
    const loadData = async () => {
      await fetch(
        `${URL}${KEY}&part=snippet,id&order=viewCount&q=${initialTerm}&type=video&maxResults=20`
      )
        .then((response) => response.json())
        .then((receivedData) => {
          setLoading(false);
          setData(receivedData);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    };
    loadData();
  }, [initialTerm]);

  return data;
}

export default useFetch;
