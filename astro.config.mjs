// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://the-true-stickle.github.io',
    fonts: [{
        provider: fontProviders.local(),
        name: "RobotoMono",
        cssVariable: "--font-roboto-mono",
        options: {
            variants: [{
                src: ['./src/assets/fonts/roboto-mono-latin-400-normal.woff2'],
                weight: 'normal',
                style: 'normal'
            }]
        }
    }]
});
