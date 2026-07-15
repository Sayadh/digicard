<template>
  <section id="qr" class="relative py-12 md:py-20 px-6 max-w-[clamp(20rem,80vw,40rem)] mx-auto">
    <div class="text-center mb-10" v-reveal>
      <span class="text-2xs font-mono uppercase tracking-widest2 text-mint-dim block mb-3">Կիսվել ակնթարթորեն</span>
      <h2 class="font-display text-[clamp(1.85rem,2vw_+_1.4rem,2.35rem)] leading-tight text-ink">
        Քո թվային քարտի QR կոդը
      </h2>
      <p class="text-sm text-stone mt-3 max-w-sm mx-auto leading-relaxed">
        Տպիր այն այցեքարտի, սթիքերի կամ սեղանի կանգնակի վրա, կամ պարզապես կիսվիր հղումով։
      </p>
    </div>

    <div v-reveal="100">
      <DigiCardQrCode
        slug="full-house-cleaning"
        accent-color="#036672"
        accent-color-secondary="#5AB6C3"
      />
    </div>
  </section>
</template>
