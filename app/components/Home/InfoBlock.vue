<script setup>
import { ref, onMounted } from 'vue'
import { BarChart3, TrendingUp, Database, Zap } from 'lucide-vue-next'
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';


gsap.registerPlugin(SplitText);

const isVisible = ref(false)
const warnings = ref([
  { icon: BarChart3, text: 'Analítica e insights en tiempo real', delay: 0 },
  { icon: TrendingUp, text: 'Tendencias predictivas y pronósticos', delay: 100 },
  { icon: Database, text: 'Gestión centralizada de datos', delay: 200 },
  { icon: Zap, text: 'Consultas ultrarrápidas', delay: 300 }
])

onMounted(() => {
  const heading = document.querySelector("#heading");
  const heading2 = document.querySelector("#heading2");

  if (heading && heading2) {
    // SplitText para cada uno
    const split1 = new SplitText(heading, { type: "chars" });
    const split2 = new SplitText(heading2, { type: "chars" });

    // Animación para el primero
    gsap.from(split1.chars, {
      y: 40,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // 🔥 Animación para el segundo con color naranja temporal
    split2.chars.forEach(char => {
      char.style.color = "#f97316"; // naranja Tailwind: orange-500
    });

    gsap.from(split2.chars, {
      scale: 0.8,
      y: -20,
      autoAlpha: 0,
      stagger: 0.06,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: heading2,
        start: "top 80%",
        toggleActions: "play none none none"
      },
    });
  }

  requestAnimationFrame(() => {
    setTimeout(() => {
      isVisible.value = true;
    }, 100);
  });
});
</script>

<template>
  <section class="py-4 px-4 sm:px-0 md:px-0 md:pl-12 sticky-section_panel">
    <div class="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
      
      <!-- Contenido izquierdo -->
      <div 
        class="flex-1 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-700 ease-out w-full"
        :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'"
      >
       <div class="text-animated">
  <h1 id="heading" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-balance">
    Tus datos tienen un
  </h1>
  <h1 id="heading2" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white  leading-tight text-balance">
    potencial oculto
  </h1>
</div>

        <p class="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty">
          Has estado recopilando datos durante años, pero sin las herramientas adecuadas, son solo números en pantalla. Transforma datos crudos en decisiones que impulsen el crecimiento real.
        </p>
        <p class="text-gray-400 text-base sm:text-lg md:text-xl font-semibold">
          Es hora de desbloquear su poder.
        </p>
      </div>

      <!-- Tarjeta derecha -->
      <div class="flex-1 w-full">
        <div 
          class="relative bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl sm:rounded-br-none sm:rounded-tr-none p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border-r  transition-all duration-700 ease-out hover:shadow-orange-500/20 group overflow-hidden"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'"
        >
          <!-- Resplandor animado -->
          <div class="absolute -right-20 top-0 bottom-0 w-40 bg-gradient-to-l from-orange-500/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <!-- Contenido -->
          <div class="relative z-10">
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-7 md:mb-8 leading-tight transition-all duration-300 group-hover:bg-gradient-to-r text-balance">
              Transforma tu negocio con analítica inteligente.
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <div
                v-for="(warning, index) in warnings"
                :key="index"
                class="flex items-start gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-zinc-800/30 border border-zinc-700/30 transition-all duration-300 hover:bg-zinc-800/50 hover:border-orange-500/30 hover:translate-x-1 hover:shadow-lg hover:shadow-orange-500/10 group/item cursor-pointer"
                :style="{ transitionDelay: isVisible ? `${warning.delay}ms` : '0ms' }"
                :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
              >
                <div class="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 transition-all duration-300 group-hover/item:shadow-orange-500/50 group-hover/item:scale-110 group-hover/item:rotate-6">
                  <component :is="warning.icon" class="w-4 h-4 sm:w-5 sm:h-5 text-white" :stroke-width="2.5" />
                </div>
                <p class="text-xs sm:text-sm md:text-base text-gray-200 leading-snug flex-1 transition-colors duration-300 group-hover/item:text-white font-medium">
                  {{ warning.text }}
                </p>
              </div>
            </div>
          </div>

          <!-- Línea decorativa -->
          <div class="absolute left-0 top-1/3 bottom-1/3 w-0.5 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-2xl {
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.03),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.05),
    0 10px 30px -10px rgba(0, 0, 0, 0.5);
}
</style>
