export const VNotFound = {
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

export default VNotFound;
