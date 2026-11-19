// @ts-check
import { defineConfig } from 'astro/config';

// TODO(dominio): reemplazar por el dominio definitivo cuando se registre.
// Se usa para las URLs canónicas, el sitemap y las etiquetas Open Graph.
export default defineConfig({
  site: 'https://predir.example',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
