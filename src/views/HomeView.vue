<template>
  <div class="home">
    <input
      type="search"
      placeholder="Search"
      v-model="search"
      aria-label="Search"
    />
    <div id="example-1"></div>
    <div class="row" style="margin: 2%">
      <div
        class="card"
        style="width: 18rem; margin: 2% 2%"
        v-for="m in filteredList"
        :key="m.id"
      >
        <router-link :to="`/details/${m.id}`">
          <img
            class="card-img-top"
            :src="`https://image.tmdb.org/t/p/original${m.poster_path}`"
            alt="Card image cap"
        /></router-link>
        <div class="card-body">
          <h5 class="card-title">{{ m.title }}</h5>
          <p class="card-text">
            {{ m.release_date }}
          </p>
          <p class="card-text">
            {{ m.vote_average }}
          </p>
        </div>
        <button class="btn btn-info" v-on:click="addfav(m)">Fav</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "HomeView",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filteredList() {
      return this.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    movies() {
      return store.state.movies.all;
    },
  },
  created() {
    store.dispatch("movies/getMovies");
    },
  methods: {
    addfav(m) {
      store.dispatch("movies/getFav",m)
    },
  },
};
</script>
