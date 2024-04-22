const dotenv = require('dotenv')
const isDev = process.env.NODE_ENV === "dev"

const esbuild = require("esbuild");
async function watch() {
  let ctx = await esbuild.context({
    entryPoints: ['src/app.tsx'],
    bundle: true,
    minify: isDev,
    format: 'cjs',
    sourcemap: isDev,
    outfile: 'public/index.js',
  });
    if (isDev) {
      await ctx.watch();
      console.log('Watching...');
    }
    else {
      await ctx.rebuild();
    }
}
watch();