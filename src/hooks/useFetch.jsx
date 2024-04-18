import { useEffect, useState } from "react";

const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url);
      const content = await response.json();
      setData(content.results);
    };
    fetchMovies();
  }, [url]);
  return { data };
};

export default useFetch;
