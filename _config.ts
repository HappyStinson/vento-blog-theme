import lume from "lume/mod.ts";
import plugins from "./deps.ts";

const site = lume({
  src: "./src",
  server: {
    port: 3001,
  },
});

site.use(plugins());

export default site;
