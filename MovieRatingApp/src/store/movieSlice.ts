import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Movie ={
  id: string;
  title: string;
  rating: number;
}

type MovieState = {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    updateMovieRating: (state, action: PayloadAction<{ id: string; rating: number }>) => {
      const movie = state.movies.find((m) => m.id === action.payload.id);
      if (movie) {
        movie.rating = action.payload.rating;
      }
    },
  },
});

export const { setMovies, updateMovieRating } = movieSlice.actions;
export default movieSlice.reducer;
