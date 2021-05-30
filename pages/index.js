import { VSearch, VCards, VLoading } from "@/components/src/ui-components";

import { mapMutations, mapState } from "vuex";

import "./_styles.scss";

export default {
  name: "Home",
  layout: "movies",
  data: () => ({
    query: "",
    page: "",
    response: [],
    loading: true
  }),

  computed: {
    ...mapState("Movie", ["movies"])
  },

  async created() {
    if (this.movies.query) {
      await this.getMovies(this.movies.query);
    } else {
      await this.getMovies("marvel");
    }
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
          <VLoading class="loading" />
        ) : (
          <div>
            <VSearch
              class="search"
              onSearch={search => this.getMovies(search)}
            />

            <div class="card-container">
              {this.response.Search.map(movies => (
                <nuxt-link to={`/movie/${movies.imdbID}`}>
                  {movies.Poster != "N/A" && (
                    <VCards>
                      <div slot="card">
                        <img
                          class="card-container__movie"
                          src={movies.Poster}
                          alt="Poster filme"
                        />
                      </div>
                    </VCards>
                  )}
                </nuxt-link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
};
