import axios from 'axios'
// initial state
const state = () => ({
  all: [],
  movie:[],
});

// getters
const getters = {};

// actions
const actions = {
  async getMovies({ commit }) {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=e776076efffd901247e4b0a276a5c9c0"
    );
    commit("setMovies", movies.data.results);
  },
  async getMovie({ commit },id) {
    const movie =  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e776076efffd901247e4b0a276a5c9c0`
    )
    console.log(movie.data)
    commit("setMovie", movie.data);
  },
};

// mutations
const mutations = {
  setMovies(state, movies) {
    state.all = movies;
  },
  setMovie(state, movie) {
    state.movie = movie;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
