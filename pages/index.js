import {
  VSearch,
  VCards,
  VLoading,
  VNotFound
} from "@/components/src/ui-components";

import { mapMutations } from "vuex";

export default {
  name: "Home",
  layout: "movies",
  data: () => ({
    query: "",
    loading: false
  }),

  async asyncData({ $axios, store }, query = "marvel", pagination = "1") {
    const { movies } = store.state.Movie;

    if (movies.query) query = movies.query;

    const response = await $axios.$get(
      `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&/&s=${query}&page=${pagination}`
    );
    return { response };
  },

  methods: {
    ...mapMutations("Movie", ["updateMoviesQuery"]),
    async getMovies(query, pagination = "1") {
      this.updateMoviesQuery(query);

      if (query) {
        this.setStateLoading(true);
        try {
          const response = await this.$axios.$get(
            `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&/&s=${query}&page=${pagination}`
          );
          this.response = response;
        } catch (error) {
          cosole.error(error);
        } finally {
          this.setStateLoading(false);
        }
      }
    },

    setStateLoading(state) {
      this.loading = state;
    }
  },

  render() {
    return (
      <div>
        {this.loading ? (
          <VLoading />
        ) : (
          <div>
            <VSearch
              class="search"
              onSearch={search => this.getMovies(search)}
            />
            {this.response.Search ? (
              <div class="card-container">
                {this.response.Search.map(movies => (
                  <nuxt-link to={`/movie/${movies.imdbID}`}>
                    {movies.Poster !== "N/A" && (
                      <VCards>
                        <div slot="card">
                          <img
                            width="80%"
                            height="80%"
                            src={movies.Poster}
                            alt="Poster filme"
                          />
                        </div>
                      </VCards>
                    )}
                  </nuxt-link>
                ))}
              </div>
            ) : (
              <VNotFound />
            )}
          </div>
        )}
      </div>
    );
  }
};
