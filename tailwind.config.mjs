/** @type {import('tailwindcss').Config} */
// tailwind.config.mjs
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        theme: {
            extend: {
                colors: {
                    'page-bg': {
                        light: '#FFFFFF',
                    },
                    'text-primary': '#7A7A7A',
                    'metallic': {
                        light: '#B8B8B8',  // Darker silver for better contrast (was D6D6D6)
                        base: '#969696',   // Darker medium metallic gray (was AFAFAF)
                        dark: '#666666',   // Deeper metallic gray (was 7A7A7A)
                        accent: '#8A8A8A', // Darker gray for accents (was B8B8B8)
                    },
                },
                backgroundImage: {
                    'gradient-dark': 'linear-gradient(145deg, #1A1A1D, #121214, #0A0A0C)',
                    'metallic-shine': 'linear-gradient(145deg, #F0F0F0, #D1D1D1, #A8A8A8)',
                },
            },
            fontFamily: {
                'system': ['-apple-system'],
            },
        },
    plugins: [],
    }
  