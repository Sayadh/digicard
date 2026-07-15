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
        // Mint — brand accent
        mint: '#5AB6C3B0',
        'mint-light': '#5DD9E8',
        'mint-dim': '#036672',
        // Moss — quiet secondary green, freshness without shouting
        moss: '#4B6357',
        'moss-deep': '#324840',
        // Stone — text and hairlines
        stone: '#6E7570',
        'stone-light': '#9CA39D',
        hairline: 'rgba(35, 57, 56, 0.12)',
        'hairline-dark': 'rgba(247, 248, 245, 0.12)',

        // --- DigiCard (SaaS marketing homepage) — its own identity, separate from the
        // Full House Cleaning card brand above. Indigo/violet, Stripe/Linear-inspired. ---
        'digi-black': '#07070C',
        'digi-surface': '#111119',
        'digi-surface-2': '#191A24',
        'digi-mist': '#F6F6FB',
        'digi-white': '#FFFFFF',
        'digi-ink': '#0D0D16',
        'digi-muted': '#68697C',
        'digi-muted-dark': 'rgba(255, 255, 255, 0.58)',
        'digi-line': 'rgba(255, 255, 255, 0.08)',
        'digi-line-soft': 'rgba(13, 13, 22, 0.09)',
        'digi-indigo': '#6D5EF9',
        'digi-indigo-light': '#8F7CFF',
        'digi-violet': '#B15CF6'
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
        mint: '0 4px 14px rgba(90, 182, 195, 0.22)',
        'digi-glow': '0 25px 70px -20px rgba(109, 94, 249, 0.5)',
        'digi-card': '0 1px 1px rgba(13, 13, 22, 0.03), 0 16px 40px -12px rgba(13, 13, 22, 0.12)',
        'digi-card-lg': '0 1px 1px rgba(13, 13, 22, 0.03), 0 40px 90px -25px rgba(13, 13, 22, 0.18)',
        'digi-card-dark': '0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 25px 60px -18px rgba(0, 0, 0, 0.65)'
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(90, 182, 195, 0.5)' },
          '50%': { boxShadow: '0 0 0 8px rgba(90, 182, 195, 0)' }
        },
        digifloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(0.6deg)' }
        },
        digiorb: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(3%, -4%) scale(1.06)' }
        }
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        unfold: 'unfold 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        drift: 'drift 3.2s ease-in-out infinite',
        sheen: 'sheen 2.4s ease-in-out infinite',
        pulseglow: 'pulseglow 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        digifloat: 'digifloat 6s ease-in-out infinite',
        digiorb: 'digiorb 12s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
