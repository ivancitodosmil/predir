// @ts-check
import { defineConfig } from 'astro/config';

// Dominio definitivo. Se usa para las URLs canónicas, el sitemap y las etiquetas Open Graph.
export default defineConfig({
  site: 'https://www.predirsoft.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
