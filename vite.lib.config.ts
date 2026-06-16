import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

// build da BIBLIOTECA de componentes (separado do build do app / github pages).
// emite dist-lib/index.es.js + dist-lib/index.d.ts + dist-lib/style.css
// (css do tailwind já compilado, importado pelo barrel src/index.ts).
// é este o artefato que o /design-sync consome — ver .design-sync/NOTES.md.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ['src/components', 'src/data', 'src/index.ts'],
      outDir: 'dist-lib',
      entryRoot: 'src',
      rollupTypes: false,
    }),
  ],
  build: {
    outDir: 'dist-lib',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.es.js',
      cssFileName: 'style',
    },
    rollupOptions: {
      // react e afins ficam externos — o claude.ai/design provê o runtime
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react-router-dom'],
    },
  },
})
