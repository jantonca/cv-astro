import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://jantonca.github.io',
  base: '/cv-astro',
  vite: {
    plugins: [tailwindcss()],
  },
})
