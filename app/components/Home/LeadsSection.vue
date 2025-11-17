<template>
  <section class="relative overflow-hidden bg-black py-16 md:py-20">
    <!-- Glow de fondo naranja -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-orange-500/20 blur-[200px] z-0"
    ></div>

    <!-- Contenedor principal -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado -->
      <div class="text-center mb-5 md:mb-5">
        <h1 class="text-white text-3xl md:text-5xl font-bold tracking-tight ">
          Trusted by Product Teams
        </h1>
      </div>

      <!-- Botón CTA -->
      <div class="flex justify-center mb-8 md:mb-16">
        <LeadsButton
          class="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50"
        >
          Contact Me
        </LeadsButton>
      </div>

      <!-- GRID RESPONSIVE SIN SWIPER -->
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <div
          v-for="(item, index) in testimonials"
          :key="index"
          class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg   hover:border-orange-500/30 p-6 md:p-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10"
        >
          <p class="text-white/90 text-base leading-relaxed italic mb-6 md:mb-8">
            "{{ item.text }}"
          </p>

          <div class="flex items-center gap-4 pt-4 md:pt-6 border-t border-white/10">
            <div
              class="w-14 h-14 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0"
            >
              <span class="text-orange-500 font-bold text-xl">
                {{ item.leadName.charAt(0) }}
              </span>
            </div>

            <div class="flex-1 min-w-0">
              <p class="font-semibold text-white text-sm">
                {{ item.leadName }}
              </p>
              <p class="text-white/60 text-xs truncate">
                {{ item.job }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">

import LeadsButton from '../buttons/LeadsButton.vue';
type Testimonial = {
  text: string
  leadName: string
  job: string
}

const testimonials: Testimonial[] = [
  {
    text: "The automation from design to code is incredible. It saves us so much time and allows us to focus on the details.",
    leadName: "Roy van Rooijen",
    job: "Product Designer at Pitch"
  },
  {
    text: "Specify helps our designers keep their design system in sync across all their tools, while saving time during development.",
    leadName: "Niels Bovy",
    job: "Product Designer at Pocket"
  },
  {
    text: "Specify is the perfect addition to our front-end toolbox. It connects our design tokens, components, and fonts.",
    leadName: "Alexis Oney",
    job: "Lead Developer at Pola Studio"
  }
]
</script>

