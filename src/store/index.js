import { createStore, createLogger } from 'vuex'
import movies from './modules/movies'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    movies,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})