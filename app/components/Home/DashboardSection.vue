<template>
  <div ref="heroRef" class="text-center py-20 px-6">
    <h1 class="text-5xl md:text-6xl font-bold mb-6 text-foreground">
      Scale your analytics without hiring
    </h1>
    <p class="text-xl text-muted-foreground mb-2">
      The first data tool that you'll love.
    </p>
    <p class="text-xl text-muted-foreground mb-12">
      And a team of experts to <span class="text-primary">get you started</span>.
    </p>

    <!-- Dashboard Image with Glass Border -->
    <div class="max-w-6xl mx-auto px-4">
      <div
        ref="imageRef"
        class="relative rounded-2xl overflow-hidden"
        :style="imageStyle"
      >
        <!-- Decorative corner accents -->
        <div class="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
        <div class="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/40 rounded-tr-xl" />
        <div class="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/40 rounded-bl-xl" />
        <div class="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-xl" />

        <!-- Placeholder for dashboard image -->
        <img
          src="/dash.webp"
          alt="Analytics Dashboard"
          class="w-full h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";

const heroRef = ref<HTMLDivElement | null>(null);
const imageRef = ref<HTMLDivElement | null>(null);

const imageStyle = {
  border: "6px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
  boxShadow:
    "0 0 60px rgba(234, 88, 12, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.03)",
};

let ctx: gsap.Context | null = null;

onMounted(() => {


  ctx = gsap.context(() => {
    // Animate heading
    gsap.from("h1", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate paragraphs
    gsap.from("p", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      delay: 0.3,
      ease: "power2.out",
    });


  }, heroRef);
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});
</script>

<style scoped>
.text-foreground {
  color: white;
}
.text-muted-foreground {
  color: rgba(255, 255, 255, 0.7);
}
.text-primary {
  color: rgb(234 88 12); /* tailwind orange-600 */
}
</style>
