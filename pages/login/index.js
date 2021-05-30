import "./_styles.scss";

export default {
  name: "form-login",
  layout: "movies",
  render(h) {
    return (
      <div>
        <form>
          <h3>Acessar minha conta</h3>
          <input id="email" type="text" name="email" placeholder="Email." />
          <input
            id="password"
            type="password"
            name="senha"
            placeholder="Senha"
          />
          <input type="submit" name="acao" value="Acessar" />
        </form>
      </div>
    );
  }
};
