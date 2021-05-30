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
        <span
          onClick={() => this.$emit("search", this.search)}
          class="search__icon"
        >
          <font-awesome-icon icon={["fas", "search"]} />
        </span>
      </div>
    );
  }
};

export default VSearch;
