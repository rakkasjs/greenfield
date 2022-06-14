import { defineConfig } from "vite";
import rakkas from "rakkasjs/vite-plugin";

export default defineConfig({
  plugins: [
    rakkas({
      react: {
        jsxImportSource: "/src/emotion-jsx",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      },
    }),
    {
      name: "exclude-server",

      config(config, env) {
        if (env.command === "build" && config.build?.ssr) {
          return {
            optimizeDeps: {
              exclude: ["rakkasjs"],
            },
          };
        }
      },
    },
  ],
  optimizeDeps: {
    include: ["react/jsx-runtime", "@mantine/core"],
  },
  ssr: {
    // noExternal: ["@mantine/core"],
  },
});
