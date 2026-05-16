"use strict";

const esbuild = require('esbuild');
const watching = process.argv.includes('--watch');

const base = {
  entryPoints: ['./src/index.js'],
  bundle: true,
  platform: 'browser',
  globalName: 'MitchAllen.ConnectionGrid',
  format: 'iife',
  target: ['es2017'],
};

async function main() {
  if (watching) {
    const ctx = await esbuild.context({ ...base, outfile: './dist/connection-grid.js' });
    await ctx.watch();
    console.log('Watching for changes...');
  } else {
    await Promise.all([
      esbuild.build({ ...base, outfile: './dist/connection-grid.js' }),
      esbuild.build({ ...base, minify: true, outfile: './dist/connection-grid.min.js' }),
    ]);
    console.log('Build complete.');
  }
}

main().catch(e => { console.error(e); process.exit(1); });
