// Copies the static web app into ./www, which Capacitor packages into the iOS and Android apps.
import { cpSync, rmSync, mkdirSync } from 'node:fs';
const out = 'www';
rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const p of ['index.html', 'francaisexam.html', 'manifest.webmanifest', 'sw.js', 'css', 'js', 'icons']) {
  cpSync(p, `${out}/${p}`, { recursive: true });
}
console.log('Web app copied to ./www');
