module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-copy': {
      src: './src/assets',
      dest: './dist/assets',
    },
  },
}
