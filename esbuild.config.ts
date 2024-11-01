const dotenv = require('dotenv').config();
const fs = require("fs");
const {randomUUID} = require("crypto");
const esbuild = require("esbuild");

function writeIndexHtml(token: string, title: string) {
  fs.writeFileSync("public/index.html", `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
  </head>
  <body>
  <div id="root"></div>
	<script src="index-${token}.js"></script>
  </body>
</html>`);
}

async function build() {
  const isDev = process.env.NODE_ENV === "dev"
  const token = randomUUID();

  writeIndexHtml(token, "Anise Bamford");
	
  const options = ({
    entryPoints: ['src/app.tsx'],
    bundle: true,
    minify: !isDev,
    format: 'cjs',
    sourcemap: isDev,
    outfile: `public/index-${token}.js`,
  });

  if (isDev) {
    const ctx = await esbuild.context(options)
    console.log('Watching...');
    await ctx.watch();
  }
  else {
    esbuild.build(options)
  }
}
build();
