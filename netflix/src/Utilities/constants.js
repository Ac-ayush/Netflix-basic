export const USER_AUTH_API_END_POINT = "http://localhost:8080/api/v1/user";


//TMDB API
export const options = {        
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWEyYzkxYmVlZGIzOTY4NmVmNWQzNDFlMTVmNGU2MiIsIm5iZiI6MTc0MDg0OTQ2OS44MTEsInN1YiI6IjY3YzM0MTNkMjRhOWU5Njc2OTY2YjI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYhqP5EOopGjnYIBSjdKqNEB_MtrQP-tWzIWROwW-YA",
  },
};

export const NOW_PLAYING_MOVIES_API_END_POINT = "https://api.themoviedb.org/3/movie/now_playing";
export const POPULAR_MOVIES_API_END_POINT = "https://api.themoviedb.org/3/movie/popular";
export const TOP_RATED_MOVIES_API_END_POINT = "https://api.themoviedb.org/3/movie/top_rated";
export const UPCOMING_MOVIES_API_END_POINT = "https://api.themoviedb.org/3/movie/upcoming";
export const SEARCH_MOVIES_API_END_POINT = "https://api.themoviedb.org/3/search/movie";

export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";