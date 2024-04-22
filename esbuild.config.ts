const dotenv = require('dotenv')
const isDev = process.env.NODE_ENV === "devx"

const esbuild = require("esbuild");
async function watch() {
  const options = ({
    entryPoints: ['src/app.tsx'],
    bundle: true,
    minify: isDev,
    format: 'cjs',
    sourcemap: isDev,
    outfile: 'public/index.js',
  });
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