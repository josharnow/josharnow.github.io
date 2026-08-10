import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const logoPath = path.join(projectRoot, "src/assets/images/josh_arnow_logo.svg");
const fontPath = path.join(projectRoot, "src/assets/fonts/ibm_plex_sans_var_roman.woff2");
const outputPath = path.join(projectRoot, "public/og.png");

const [logoSvg, fontFile] = await Promise.all([
  readFile(logoPath),
  readFile(fontPath),
]);

const fontData = fontFile.toString("base64");
const cardSvg = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        @font-face {
          font-family: "IBM Plex Sans";
          src: url("data:font/woff2;base64,${fontData}") format("woff2");
          font-style: normal;
          font-weight: 100 900;
        }
        text { font-family: "IBM Plex Sans", "Arial Narrow", Arial, sans-serif; }
      </style>
      <linearGradient id="background" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
        <stop stop-color="#020407"/>
        <stop offset="0.58" stop-color="#03080f"/>
        <stop offset="1" stop-color="#02060b"/>
      </linearGradient>
      <radialGradient id="blueGlow" cx="0" cy="0" r="1" gradientTransform="translate(915 305) rotate(90) scale(310 390)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0b4d8a" stop-opacity="0.18"/>
        <stop offset="1" stop-color="#0b4d8a" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grid" width="118" height="112" patternUnits="userSpaceOnUse">
        <path d="M118 0H0V112" fill="none" stroke="#12304f" stroke-opacity="0.42" stroke-width="1"/>
        <circle cx="0" cy="0" r="2.3" fill="#1d4f78" fill-opacity="0.48"/>
      </pattern>
    </defs>

    <rect width="1200" height="630" fill="url(#background)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <rect width="1200" height="630" fill="url(#blueGlow)"/>

    <text x="60" y="315" fill="#f8fafc" font-size="112" font-weight="720" letter-spacing="-2.5">JOSH ARNOW</text>
    <text x="64" y="382" fill="#3b82f6" font-size="34" font-weight="650" letter-spacing="3.1">FULL-STACK SOFTWARE ENGINEER</text>
    <text x="64" y="435" fill="#7f91a8" font-size="30" font-weight="620" letter-spacing="5.5">NEW YORK</text>
  </svg>
`);

const logo = await sharp(logoSvg, { density: 240 })
  .resize({ width: 370, height: 375, fit: "contain" })
  .png()
  .toBuffer();

await sharp(cardSvg, { density: 144 })
  .resize(1200, 630)
  .composite([{ input: logo, left: 785, top: 128 }])
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

console.log(`Generated ${outputPath} from ${logoPath}`);
