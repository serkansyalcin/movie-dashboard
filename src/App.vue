<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/favorites">Favorites</router-link>
  </nav>
  <router-view/>
</template>
<script>
import axios from 'axios'
export default {
  created(){
   this.startSession() 
  },
  methods:{
    async startSession(){
      await axios
        .get(
          "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=e776076efffd901247e4b0a276a5c9c0"
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
