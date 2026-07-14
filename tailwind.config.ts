import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Ink — the brand's real dark teal, the gravity of the mark
        ink: '#183332',
        'ink-soft': '#233938',
        // Bone — the brand's real near-white, the air
        bone: '#F7F8F5',
        paper: '#FCFDFC',
        // Mint — the brand's real accent, straight from the logo's wave
        mint: '#61EDCA',
        'mint-light': '#8FF3D9',
        'mint-dim': '#2F6F5C',
        // Moss — quiet secondary green, freshness without shouting
        moss: '#4B6357',
        'moss-deep': '#324840',
        // Stone — text and hairlines
        stone: '#6E7570',
        'stone-light': '#9CA39D',
        hairline: 'rgba(35, 57, 56, 0.12)',
        'hairline-dark': 'rgba(247, 248, 245, 0.12)'
      },
      fontFamily: {
        // Armenian fallbacks matter here: Fraunces/Inter/IBM Plex Mono have no Armenian
        // glyphs, so the browser needs a same-script fallback for hy content per character.
        display: ['"Fraunces"', '"Noto Serif Armenian"', 'serif'],
        sans: ['"Inter"', '"Noto Sans Armenian"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Noto Sans Armenian"', 'monospace']
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.02em' }]
      },
      boxShadow: {
        'lift-sm': '0 2px 10px rgba(24, 51, 50, 0.05)',
        lift: '0 12px 40px rgba(24, 51, 50, 0.08)',
        'lift-lg': '0 30px 70px rgba(24, 51, 50, 0.16)',
        card: '0 40px 80px -20px rgba(24, 51, 50, 0.45)',
        mint: '0 10px 30px rgba(97, 237, 202, 0.3)'
      },
      borderRadius: {
        xl2: '1.75rem'
      },
      letterSpacing: {
        widest2: '0.28em'
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        unfold: {
          from: { opacity: '0', transform: 'scale(0.96) translateY(14px)' },
          to: { opacity: '1', transform: 'scale(1) translateY(0)' }
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' }
        },
        sheen: {
          from: { transform: 'translateX(-150%) rotate(8deg)' },
          to: { transform: 'translateX(150%) rotate(8deg)' }
        },
        pulseglow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(97, 237, 202, 0.5)' },
          '50%': { boxShadow: '0 0 0 8px rgba(97, 237, 202, 0)' }
        }
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        unfold: 'unfold 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        drift: 'drift 3.2s ease-in-out infinite',
        sheen: 'sheen 2.4s ease-in-out infinite',
        pulseglow: 'pulseglow 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  plugins: []
}
