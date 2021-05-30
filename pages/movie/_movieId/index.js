import "./_styles.scss";

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
            <i
              onClick={() => this.$router.go(-1)}
              class="fas fa-arrow-left"
            ></i>
            <div class="container-movie">
              <div class="movie">
                <span class="movie__title">{this.response.Title}</span>
                <p class="movie__year">Ano: {this.response.Year}</p>
                <p class="movie__genre">Genre: {this.response.Genre}</p>
                <p class="movie__writer">Writer: {this.response.Writer}</p>
                <p class="movie__actors">Actors: {this.response.Actors}</p>
                <p class="movie__plot">Plot: {this.response.Plot}</p>
                <p class="movie__language">
                  Language: {this.response.Language}
                </p>
              </div>
              <img
                class="container-movie__poster"
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
