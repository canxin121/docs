import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "目录", icon: "discover", link: "/docs" },
  {
    text: "导航",
    icon: "creative",
    prefix: "/docs/",
    children: [
      {
        text: "Nonebot",
        icon: "creative",
        prefix: "",
        children: [
          {
            text: "Spark_GPT", icon: "more", link: "Spark_GPT" 
          },
        ],
      }
    ],
  }
]);
