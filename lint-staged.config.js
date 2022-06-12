module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': 'pnpm run lint:fix',
  '**/*.ts?(x)': () => 'pnpm run typecheck',
}
