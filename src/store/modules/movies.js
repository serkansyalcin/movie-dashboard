import axios from "axios";
// initial state
const state = () => ({
  all: [],
  movie: [],
  favs: [],
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
  async getMovie({ commit }, id) {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e776076efffd901247e4b0a276a5c9c0`
    );
    commit("setMovie", movie.data);
  },
  getFav({ commit }, favs) {
    commit("setFav", favs);
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
  setFav(state, favs) {
    state.favs.push(favs);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
