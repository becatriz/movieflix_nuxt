export default {
  name: "Movies",

  async asyncData(context) {
    const response = await context.$axios.$get(
      `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&/&i=${context.params.movieId}`
    );

    return { response };
  },

  render() {
    return (
      <div>
        {Object.values(this.response).length > 0 && (
          <div>
            <span onClick={() => this.$router.go(-1)} class="icon">
              <font-awesome-icon icon={["fas", "arrow-left"]} />
            </span>
            <div class="container-movie">
              <div class="movie">
                <span class="movie__title">{this.response.Title}</span>
                <p>Ano: {this.response.Year}</p>
                <p>Genre: {this.response.Genre}</p>
                <p>Writer: {this.response.Writer}</p>
                <p>Actors: {this.response.Actors}</p>
                <p class="movie__plot">Plot: {this.response.Plot}</p>
                <p>Language: {this.response.Language}</p>
              </div>
              <img
                width="30%"
                height="30%"
                class="movie__poster"
                src={this.response.Poster}
                alt="Poster filme"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
};
