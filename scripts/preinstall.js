if (process.env.npm_execpath.indexOf('yarn') === -1) {
  console.error('You must use Yarn to install dependencies.');
  process.exit(1);
}