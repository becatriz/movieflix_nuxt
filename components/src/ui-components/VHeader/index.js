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
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/login">Login</nuxt-link>
            </li>
          </ul>
          <nuxt-link to="/">
            <img
              class="logo"
              width="12%"
              height="40%"
              src={logo}
              alt="imagem logo"
            />
          </nuxt-link>
        </nav>
      </div>
    );
  }
};

export default VHeader;
