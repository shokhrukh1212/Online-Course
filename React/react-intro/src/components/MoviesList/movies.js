import { useEffect, useState } from "react";
import { MovieItem } from "../MovieItem";

function MoviesList() {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // fetching movies list from an api
  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "http://www.omdbapi.com/?i=tt3896198&apikey=bb76c03a&t=Friends"
        );

        if (res.ok) {
          const data = await res.json();
          setMovies(data);
        } else {
          throw new Error("Something went wrong...");
        }
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();

    // const id = setInterval(() => {
    //   console.log("Hello");
    // }, 1000);

    return function () {
      console.log("Bizani cleanup function ishladi");
    };
  }, []);

  return (
    <div>
      <h1>Movies List</h1>
      {isLoading ? (
        "Kino Yuklanmoqda..."
      ) : error ? (
        "Oooops, Something went wrong. Refresh your page or try again"
      ) : (
        <MovieItem movie={movies} />
      )}
    </div>
  );
}

export { MoviesList };
