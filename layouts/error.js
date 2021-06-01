export default {
  name: "layout-error",
  render(h) {
    return (
      <div class="error-page">
        <h1>Oops, página não encontrada!</h1>
        <p>
          Voltar para o <a href="/">site</a>
        </p>
      </div>
    );
  }
};
