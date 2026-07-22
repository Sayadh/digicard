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
        // Every cleaning-service token below resolves through a CSS custom property
        // first. A card with no `theme` set never has that variable defined, so it
        // falls through to the literal value here — today's real charcoal/mint
        // palette — meaning this refactor changes nothing visually by default.
        // A card WITH a `theme` (see shared/cards/theme.ts) gets its own derived
        // values injected as inline CSS vars on the page root, repainting the
        // entire template through inheritance alone — no component changes.
        ink: 'var(--card-ink, #183332)',
        'ink-soft': 'var(--card-ink-soft, #233938)',
        bone: 'var(--card-bone, #F7F8F5)',
        paper: 'var(--card-paper, #FCFDFC)',
        mint: 'var(--card-mint, #5AB6C3B0)',
        'mint-light': 'var(--card-mint-light, #5DD9E8)',
        'mint-dim': 'var(--card-mint-dim, #036672)',
        moss: 'var(--card-moss, #4B6357)',
        'moss-deep': 'var(--card-moss-deep, #324840)',
        stone: 'var(--card-stone, #6E7570)',
        'stone-light': 'var(--card-stone-light, #9CA39D)',
        hairline: 'var(--card-hairline, rgba(35, 57, 56, 0.12))',
        'hairline-dark': 'var(--card-hairline-dark, rgba(247, 248, 245, 0.12))',

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
        'digi-violet': '#B15CF6',

        // --- Luxury beauty template (e.g. hair-stylist) — editorial black/gold,
        // Dior/Chanel/Aesop-inspired. Deliberately no pink/purple/saturated tones. ---
        'lux-black': '#151515',
        'lux-gold': '#C9A76A',
        'lux-gold-light': '#DEC28C',
        'lux-beige': '#EFE5D6',
        'lux-ivory': '#FCFAF7',
        'lux-white': '#FFFFFF',
        'lux-bronze': '#B88A58',
        'lux-text': '#1A1A1A',
        'lux-muted': '#777777',
        'lux-line': 'rgba(21, 21, 21, 0.09)',
        'lux-line-dark': 'rgba(239, 229, 214, 0.14)'
      },
      fontFamily: {
        // Armenian fallbacks matter here: Fraunces/Cormorant/Inter/IBM Plex Mono have no
        // Armenian glyphs, so the browser needs a same-script fallback for hy content.
        display: ['"Fraunces"', '"Noto Serif Armenian"', 'serif'],
        sans: ['"Inter"', '"Noto Sans Armenian"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Noto Sans Armenian"', 'monospace'],
        // Luxury template's editorial serif — thinner, more classical than Fraunces,
        // closer to Vogue/Dior masthead type.
        luxury: ['"Cormorant Garamond"', '"Noto Serif Armenian"', 'serif']
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.02em' }]
      },
      boxShadow: {
        'lift-sm': 'var(--card-shadow-lift-sm, 0 2px 10px rgba(24, 51, 50, 0.05))',
        lift: 'var(--card-shadow-lift, 0 12px 40px rgba(24, 51, 50, 0.08))',
        'lift-lg': 'var(--card-shadow-lift-lg, 0 30px 70px rgba(24, 51, 50, 0.16))',
        card: 'var(--card-shadow-card, 0 40px 80px -20px rgba(24, 51, 50, 0.45))',
        mint: 'var(--card-shadow-mint, 0 4px 14px rgba(90, 182, 195, 0.22))',
        'digi-glow': '0 25px 70px -20px rgba(109, 94, 249, 0.5)',
        'digi-card': '0 1px 1px rgba(13, 13, 22, 0.03), 0 16px 40px -12px rgba(13, 13, 22, 0.12)',
        'digi-card-lg': '0 1px 1px rgba(13, 13, 22, 0.03), 0 40px 90px -25px rgba(13, 13, 22, 0.18)',
        'digi-card-dark': '0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 25px 60px -18px rgba(0, 0, 0, 0.65)',
        'lux-card': '0 1px 1px rgba(21, 21, 21, 0.03), 0 24px 60px -20px rgba(21, 21, 21, 0.16)',
        'lux-card-lg': '0 1px 1px rgba(21, 21, 21, 0.03), 0 40px 90px -25px rgba(21, 21, 21, 0.2)',
        'lux-glow': '0 20px 60px -15px rgba(201, 167, 106, 0.4)'
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
        },
        sparkle: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(0.8)' },
          '50%': { opacity: '0.9', transform: 'scale(1.15)' }
        },
        luxfloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        unfold: 'unfold 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        drift: 'drift 3.2s ease-in-out infinite',
        sheen: 'sheen 2.4s ease-in-out infinite',
        pulseglow: 'pulseglow 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        digifloat: 'digifloat 6s ease-in-out infinite',
        digiorb: 'digiorb 12s ease-in-out infinite',
        sparkle: 'sparkle 3.4s ease-in-out infinite',
        luxfloat: 'luxfloat 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
