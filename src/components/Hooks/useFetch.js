import { useEffect, useState } from "react";

function useFetch(initialTerm) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  /* const [search, setSearch] = useState(initialTerm); */
  const KEY2 = "AIzaSyAl-W9fExq-7Jn3lSj9ZxMcbME9w6tTWrY";
  const KEY = "AIzaSyAh804wIQFPN1dUELPIsYhULO5vU--W4_w";
  const URL = "https://www.googleapis.com/youtube/v3/search?key=";

  //https://www.googleapis.com/youtube/v3/search?key=AIzaSyAh804wIQFPN1dUELPIsYhULO5vU--W4_w&part=snippet,id&order=viewCount&q=searchTest&type=video&maxResults=20
  useEffect(() => {
    if (!initialTerm) return;
    setLoading(true);
    loadData();
  }, [initialTerm]);

  const loadData = async () => {
    console.log(
      `${URL}${KEY}&part=snippet,id&order=viewCount&q=${initialTerm}&type=video&maxResults=20`
    );
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
  return data;
}

export default useFetch;
