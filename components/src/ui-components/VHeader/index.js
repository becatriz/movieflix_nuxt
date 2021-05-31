import "./_styles.scss";

import logo from "@/assets/img/logo.png";

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
              width="12%"
              height="40%"
              src={logo}
              alt="imagem logo"
            />
          </a>
        </nav>
      </div>
    );
  }
};

export default VHeader;
