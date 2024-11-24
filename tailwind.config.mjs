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
                        light: '#D6D6D6', // Deeper silver with better contrast
                        base: '#AFAFAF',  // Stronger medium metallic gray
                        dark: '#7A7A7A',  // Even deeper metallic gray
                        accent: '#B8B8B8', // Well-balanced light gray for accents
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
  