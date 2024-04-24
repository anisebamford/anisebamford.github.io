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
  fs.writeFileSync("public/index.html", `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Anise Bamford</title>
  </head>
  <body>
  <div id="root"></div>
	<script src="index-${token}.js"></script>
  </body>
</html>`)
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