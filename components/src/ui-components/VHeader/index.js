import "./_styles.scss";

export const VHeader = {
  name: "VHeader",
  render() {
    return (
      <div>
        <nav class="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          <a href="/">
            <img
              class="logo"
              src="https://fontmeme.com/permalink/210529/a10ff39362675073624aaa0ac10d34fe.png"
              alt="imagem logo"
            />
          </a>
        </nav>
      </div>
    );
  }
};

export default VHeader;
