<script lang="ts" setup>
import clsx from 'clsx'

const props = defineProps<{
  type: 'primary' | 'secondary'
  class?: string
  disabled?: boolean
}>()

const buttonClass = computed(() => clsx(
  'px-4 py-2 rounded text-white font-semibold transition-colors duration-300 rounded-4xl',
  props?.class || "",
  props.type === 'primary' && 'bg-orange-500 hover:bg-orange-700',
  props.type === 'secondary' && 'bg-transparent hover:bg-white hover:text-black border border-white',
  !props.type && 'bg-orange-500 hover:bg-orange-700',
  props.disabled && 'opacity-50 cursor-not-allowed'
)) 


</script>

<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>