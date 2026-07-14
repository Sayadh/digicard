<template>
  <svg
    :class="props.class"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Full House Cleaning mark"
  >
    <!-- The Arch: a doorway, an embrace, a house without a roofline cliché -->
    <path
      d="M11 35V21C11 12.7157 17.2 6 24 6C30.8 6 37 12.7157 37 21V35"
      stroke="currentColor"
      stroke-width="2.25"
      stroke-linecap="round"
    />
    <!-- The Current: a single line of flowing water, freshness moving through the space -->
    <path
      d="M12 30C16.5 26.5 19 26.5 24 29.5C29 32.5 31.5 32.5 36 29"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      opacity="0.85"
    />
    <!-- The Mark: a small four-point spark, the only ornament the brand allows itself -->
    <path
      v-if="props.spark"
      d="M33.5 9L34.5 11.5L37 12.5L34.5 13.5L33.5 16L32.5 13.5L30 12.5L32.5 11.5Z"
      fill="currentColor"
      :class="sparkClass"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string
  spark?: boolean
  sparkClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: 'w-8 h-8',
  spark: true,
  sparkClass: ''
})
</script>
