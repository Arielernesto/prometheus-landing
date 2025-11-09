<template>
  <button
    ref="btn"
    class="hover-btn"
    :style="cssVars"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @mousemove="onMove"
    @focus="onEnter"
    @blur="onLeave"
    @touchstart.prevent="onEnter"
    @touchend.prevent="onLeave"
  >
    <!-- overlay que pinta el color hover; CSS :hover también lo activa -->
    <span class="bg-overlay" aria-hidden="true"></span>

    <!-- contenido -->
    <span class="content"><slot>Action</slot></span>
  </button>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  color: { type: String, default: '#7d2ae8' },    // color base
  maxOffset: { type: Number, default: 18 },       // seguimiento en px
  duration: { type: Number, default: 0.45 },      // duración GSAP
  darkenPct: { type: Number, default: 12 }        // cuánto oscurece el hover
})

// ---------- helpers color ----------
function normalizeHex(input) {
  if (!input || typeof input !== 'string') return null
  let h = input.trim().replace(/^#/, '')
  if (/^[0-9a-fA-F]{3}$/.test(h)) h = h.split('').map(c => c + c).join('')
  if (/^[0-9a-fA-F]{6}$/.test(h)) return `#${h.toLowerCase()}`
  return null
}
function hexToRgb(hex) {
  const h = normalizeHex(hex)
  if (!h) return null
  const n = parseInt(h.slice(1), 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}
function rgbToHex({ r, g, b }) {
  const toHex = v => v.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
function adjustLightness(hex, percent) {
  const rgb = hexToRgb(hex)
  if (!rgb) return null
  const factor = 1 + percent / 100
  const clamp = v => Math.max(0, Math.min(255, Math.round(v)))
  return rgbToHex({
    r: clamp(rgb.r * factor),
    g: clamp(rgb.g * factor),
    b: clamp(rgb.b * factor)
  })
}
function darken(hex, pct) {
  return adjustLightness(hex, -Math.abs(pct)) || hex
}

// ---------- refs / computed ----------
const btn = ref(null)
const overlay = ref(null)
const isHover = ref(false)
let followTween = null
let overlayTween = null

const baseColor = computed(() => normalizeHex(props.color) || '#7d2ae8')
const hoverColor = computed(() => darken(baseColor.value, props.darkenPct))

const cssVars = computed(() => ({
  '--btn-bg': baseColor.value,
  '--btn-hover-bg': hoverColor.value,
  '--btn-duration': `${props.duration}s`,
  '--btn-radius': '999px'
}))

// ---------- handlers ----------
function onEnter(e) {
  isHover.value = true
  // GSAP: animar overlay opacity (no backgroundColor inline)
  if (overlayTween) overlayTween.kill()
  overlayTween = gsap.to(btn.value.querySelector('.bg-overlay'), {
    opacity: 1,
    duration: props.duration * 0.9,
    ease: 'power2.out'
  })
  // escala ligera
  gsap.to(btn.value, { scale: 1.02, duration: props.duration * 0.9, ease: 'power2.out' })
  // reset posicion
  if (followTween) followTween.kill()
  followTween = gsap.to(btn.value, { x: 0, y: 0, duration: 0.12 })
}

function onLeave() {
  isHover.value = false
  if (overlayTween) overlayTween.kill()
  overlayTween = gsap.to(btn.value.querySelector('.bg-overlay'), {
    opacity: 0,
    duration: props.duration * 0.9,
    ease: 'power2.out'
  })
  gsap.to(btn.value, { scale: 1, duration: props.duration * 0.9, ease: 'power2.out' })
  if (followTween) followTween.kill()
  followTween = gsap.to(btn.value, { x: 0, y: 0, duration: props.duration, ease: 'elastic.out(1, 0.6)' })
}

function onMove(e) {
  if (!btn.value || !isHover.value) return
  const r = btn.value.getBoundingClientRect()
  const localX = (e.touches ? e.touches[0].clientX : e.clientX) - r.left
  const localY = (e.touches ? e.touches[0].clientY : e.clientY) - r.top
  const cx = r.width / 2
  const cy = r.height / 2
  const nx = (localX - cx) / cx
  const ny = (localY - cy) / cy
  const tx = Math.max(-props.maxOffset, Math.min(props.maxOffset, nx * props.maxOffset))
  const ty = Math.max(-props.maxOffset, Math.min(props.maxOffset, ny * props.maxOffset * 0.6))
  if (followTween) followTween.kill()
  followTween = gsap.to(btn.value, { x: tx, y: ty, duration: 0.28, ease: 'power3.out' })
}

// ---------- lifecycle ----------
onMounted(() => {
  if (btn.value) {
    btn.value.style.backgroundColor = baseColor.value // ensure readable initial
  }
})
onBeforeUnmount(() => {
  if (followTween) followTween.kill()
  if (overlayTween) overlayTween.kill()
})
</script>

<style scoped>
.hover-btn {
  --radius: var(--btn-radius);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3.2rem;
  padding: 0 1.45rem;
  border-radius: var(--radius);
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  background-color: var(--btn-bg);
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.18s ease;
  box-shadow: 0 8px 26px rgba(18,16,30,0.18);
}

/* overlay que pinta el color de hover; por defecto opacidad 0 */
.bg-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background-color: var(--btn-hover-bg);
  opacity: 0;
  transition: opacity 0.2s ease; /* CSS fallback */
}

/* El contenido encima */
.content {
  position: relative;
  z-index: 2;
  pointer-events: none;
}

/* CSS :hover y :focus también activan el overlay (garantía visual inmediata) */
.hover-btn:hover .bg-overlay,
.hover-btn:focus .bg-overlay {
  opacity: 1;
}

/* foco accesible: outline */
.hover-btn:focus {
  outline: 2px solid rgba(255,255,255,0.08);
  outline-offset: 4px;
}
</style>