import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: '/me/' porque o github pages serve um *project page* em
// https://cperotto.github.io/me/ — sem isso os assets resolvem para a raiz
// do domínio (/assets/...) e quebram em 404. para domínio próprio ou
// repositório <user>.github.io, troque para '/'.
export default defineConfig({
  base: '/me/',
  plugins: [react(), tailwindcss()],
})
