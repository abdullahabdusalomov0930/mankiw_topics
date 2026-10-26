// Copies index.html to 404.html so client-side routes work on GitHub Pages.
import { copyFileSync } from 'node:fs';
copyFileSync('dist/index.html', 'dist/404.html');
