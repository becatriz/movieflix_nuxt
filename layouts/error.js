import "./_styles.scss";

export default {
  render(h) {
    return (
      <div class="error-page">
        <h1>Oops, nenhum filme encontrado!</h1>
        <p>
          Voltar para <a href="/">home</a>!
        </p>
      </div>
    );
  }
};
