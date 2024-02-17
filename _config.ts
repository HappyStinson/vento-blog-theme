import lume from "lume/mod.ts";
import plugins from "./deps.ts";

const site = lume({
  src: "./src",
});

site.use(plugins());

export default site;
