const API_KEY = "ccb0a8566b23ab43471cda53fed3d9e7";

export default {
  fetchTrending: {
    url: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    title: "Trending",
  },
  fetchTopRated: {
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    title: "Top Rated",
  },
  fetchAllTimeBestMovies: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc`,
    title: "All-Time Best",
  },
  fetchUpcomingMovies: {
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    title: "Upcoming",
  },
  fetchActionMovies: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28`,
    title: "Action",
  },
  fetchCrimeMovies: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=80`,
    title: "Crime",
  },
  fetchComedyMovies: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35`,
    title: "Comedy",
  },
  fetchHistoryMovies: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=36`,
    title: "History",
  },
  fetchHorrorMovies: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=27`,
    title: "Horror",
  },
  fetchMysteryMovies: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=9648`,
    title: "Mystery",
  },
  fetchRomanceMovies: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`,
    title: "Romance",
  },
  fetchThrillerMovies: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=53`,
    title: "Thriller",
  },
};
