const { build } = require("esbuild");
const glob = require("glob");
const entryPoints = glob.sync("./src/**/*.ts");
const whenIsProduction = process.env.NODE_ENV === "production";

const options = {
  entryPoints,
  outbase: "./src",
  bundle: false,
  minify: whenIsProduction,
  watch: !whenIsProduction,
};

// Building for browser.
build({
  ...options,
  bundle: true,
  outdir: "./dist",
});

// Building for node.
build({
  ...options,
  outdir: "./dist/esm",
  platform: "node",
  target: "es2020",
});
