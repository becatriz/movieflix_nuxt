export const state = () => ({
  movies: {
    query: ""
  }
});

export const mutations = {
  updateMoviesQuery: (state, payload) => {
    state.movies.query = payload;
  }
};
