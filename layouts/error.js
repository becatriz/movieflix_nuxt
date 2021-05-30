import "./_styles.scss";

export default {
  name: "layout-error",
  render(h) {
    return (
      <div class="error-page">
        <h1>Oops, nenhum filme encontrado!</h1>
        <p>
          Voltar para <a href="/">home</a>
        </p>
      </div>
    );
  }
};
