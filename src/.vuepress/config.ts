import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",
  locales: {
    "./": {
      lang: "zh-CN",
      title: "残心的文档集",
      description: "",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
