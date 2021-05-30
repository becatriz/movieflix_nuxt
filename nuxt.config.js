import dotenv from "dotenv";
dotenv.config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "movieflix",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:site_name", content: "I Love Painting" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://flixmoviee.netlify.app/"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "My Amazing Blog on The Joy of Painting"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Articles focused on the beautiful art of landscape painting."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/netflix-12.jpg"
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:400,700,900|Open+Sans:400,600,700&display=swap",
        href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      }
    ]
  },

  env: {
    VUE_APP_API_KEY: process.env.VUE_APP_API_KEY
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
