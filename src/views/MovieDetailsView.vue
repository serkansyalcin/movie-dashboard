<template>
  <div class="row">
    <div class="col-6">
      <img
            class="card-img-top"
            style="width: 50%"
            :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
            alt="Card image cap"
          />
    </div>
    <div class="col-4">
      <h3>Title</h3>
      <p><strong>{{movie.title}}</strong></p>
      <h3>Tag line</h3>
      <p>{{movie.tagline}}</p>
      <h3>Overview</h3>
      <p>{{movie.overview}}</p>
      <h3>Score</h3>
      <p>{{movie.vote_average}}</p>
      <h3>Votes Count</h3>
      <p>{{movie.vote_count}}</p>
      <h3>Budget</h3>
      <p>{{movie.budget}}$</p>
      <h3>Home Page</h3>
      <a :href="movie.homepage">Go To</a>
    </div>
  
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MovieDetailsView",
  data() {
    return {
      movie: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=e776076efffd901247e4b0a276a5c9c0`
        )
        .then((response) => {
          this.movie = response.data;
          console.log(this.movie);
        })
        .catch((error) => console.log(error));
        
    },
  },
};
</script>