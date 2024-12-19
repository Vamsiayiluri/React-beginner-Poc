import { useEffect, useState } from "react";
import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";
import axios from "axios";

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

const MovieRating = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [ratedMovies, setRatedMovies] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const storedRatings = localStorage.getItem("ratedMovies");
    if (storedRatings) {
      setRatedMovies(JSON.parse(storedRatings));
    }
  }, []);

  const fetchMovies = async () => {
    if (!searchQuery) return;
    try {
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          s: searchQuery,
          apikey: "ad2872e2",
        },
      });

      const data = await response.data;
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleRatingChange = (imdbID: string, rating: number) => {
    const updatedRatings = { ...ratedMovies, [imdbID]: rating };
    setRatedMovies(updatedRatings);

    localStorage.setItem("ratedMovies", JSON.stringify(updatedRatings));
  };

  return (
    <div>
      <h1>Movie Rating App</h1>

      <MovieSearch
        searchQuery={searchQuery}
        onSearchQueryChange={(e) => setSearchQuery(e.target.value)}
        onSearch={fetchMovies}
      />

      <MovieList
        movies={movies}
        ratedMovies={ratedMovies}
        onRatingChange={handleRatingChange}
      />
    </div>
  );
};

export default MovieRating;
