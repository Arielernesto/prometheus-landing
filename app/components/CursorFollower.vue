<template>
  <div
    class="flair"
    :class="{ 'flair-hover': hoverClick.hoverClick }"
    :style="{ backgroundColor: hoverClick.hoverClick ? hoverClick.color : '#fff' }"
  >
    <span v-if="hoverClick.hoverClick">{{ hoverClick.text }}</span>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const hoverClick = useCursor()

onMounted(() => {
  const flair = document.querySelector(".flair")

  // Centrar el flair sobre el puntero
  gsap.set(flair, { xPercent: -50, yPercent: -50 })

  // Movimiento suave
  const xTo = gsap.quickTo(flair, "x", { duration: 0.6, ease: "power3" })
  const yTo = gsap.quickTo(flair, "y", { duration: 0.6, ease: "power3" })

  const handleMouseMove = (e) => {
    xTo(e.clientX)
    yTo(e.clientY)
  }

  window.addEventListener("mousemove", handleMouseMove)

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", handleMouseMove)
  })
})
</script>

<style scoped>
.flair {
  width: 20px;
  height: 20px;
  z-index: 99999;
  position: fixed;
  border-radius: 50%;
  mix-blend-mode: difference;
  top: 0;
  left: 0;
  pointer-events: none;
  transition: all 0.25s ease;
}

.flair-hover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  color: #fff;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
