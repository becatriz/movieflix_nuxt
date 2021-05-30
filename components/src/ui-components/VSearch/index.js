import "./_styles.scss";

export const VSearch = {
  name: "VSearch",
  data: () => ({
    search: ""
  }),

  render() {
    return (
      <div class="container-search">
        <input
          vModel={this.search}
          type="text"
          id="box"
          placeholder="Pesquisar filmes..."
          class="search__box"
        />
        {/* <i
          class="fas fa-search search__icon"
          id="icon"
          onClick={() => this.$emit("search", this.search)}
        ></i> */}
      </div>
    );
  }
};

export default VSearch;
