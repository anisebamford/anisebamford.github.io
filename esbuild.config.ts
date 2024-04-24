const dotenv = require('dotenv');
const isDev = process.env.NODE_ENV === "devx"
const fs = require("fs");
const {randomUUID} = require("crypto");
const esbuild = require("esbuild");

async function watch() {
  const token = randomUUID();
  const options = ({
    entryPoints: ['src/app.tsx'],
    bundle: true,
    minify: isDev,
    format: 'cjs',
    sourcemap: isDev,
    outfile: `public/index-${token}.js`,
  });
  fs.writeFileSync("public/index.html", ``)
    if (isDev) {
      const ctx = await esbuild.context(options)
      await ctx.watch();
      console.log('Watching...');
    }
    else {
      esbuild.build(options)
    }
}
watch();