import "./_styles.scss";

export default {
  name: "form-login",
  layout: "movies",
  render(h) {
    return (
      <form class="form-login">
        <h3>Acessar minha conta</h3>
        <input
          class="form-login__email"
          id="email"
          type="email"
          name="email"
          placeholder="Email."
        />
        <input
          class="form-login__password"
          id="password"
          type="password"
          name="senha"
          placeholder="Senha"
        />
        <input
          class="form-login__submit"
          type="submit"
          name="acao"
          value="Acessar"
        />
      </form>
    );
  }
};
