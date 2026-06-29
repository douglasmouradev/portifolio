import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'assets', 'projects');

const targets = [
  { file: 'titanium.jpg', url: 'https://ts.titaniumtelecom.com.br', wait: 2500 },
  { file: 'controllit.jpg', url: 'https://cea.controllit.com.br', wait: 2500 },
  { file: 'tdesk-site.jpg', url: 'https://tdesksolutions.com.br', wait: 1500, dismissIntro: true },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  ignoreHTTPSErrors: true,
});
const page = await context.newPage();

for (const { file, url, wait, dismissIntro } of targets) {
  try {
    console.log(`Capturing ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    if (dismissIntro) {
      const enterBtn = page
        .getByRole('button', { name: /Entrar no site/i })
        .or(page.getByRole('link', { name: /Entrar no site/i }));
      if (await enterBtn.count()) {
        await enterBtn.first().click();
        await page.waitForTimeout(800);
      }
    }
    await page.waitForTimeout(wait);
    await page.screenshot({
      path: path.join(outDir, file),
      type: 'jpeg',
      quality: 82,
      fullPage: false,
    });
    console.log(`  -> ${file}`);
  } catch (err) {
    console.error(`  FAILED ${file}:`, err.message);
  }
}

await browser.close();
console.log('Done.');
