// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";
import netlify from "@astrojs/netlify/functions";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    partytown(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      livePreview: true,
      bridge: import.meta.env.VITE_ENVIRONMENT === "preview" ? true : false,
      components: {
        ["hero-section"]: "storybloks/HeroSection",
        ["default-page"]: "storybloks/Page",
      },
      apiOptions: {
        region: "eu",
      },
    }),
  ],
  adapter: netlify({}),
  output: import.meta.env.VITE_ENVIRONMENT === "preview" ? "server" : "static",
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
