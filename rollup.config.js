const path = require('path');
const root = process.cwd();
const stylus = require('rollup-plugin-stylus-to-css');
const liveServer = require('rollup-plugin-live-server');

const tasks = [];

if (process.argv.some(key => key === '-cw' || key === '-wc')) {
  console.warn('running in development mode');
  tasks.push({
    input: path.resolve(root, 'src', 'select-demo.js'),
    plugins: [
      stylus(),
      liveServer({
        port: 8011,
        host: '0.0.0.0',
        root: './demo',
        mount: [
          [ '/src', './src' ],
          [ '/dist', './dist' ],
          [ '/node_modules', './node_modules' ]
        ],
        open: false,
        wait: 500
      })
    ],
    output: {
      file: path.resolve(root, 'dist', 'select-demo.bundle.js'),
      format: 'es'
    }
  });
}

export default tasks;
