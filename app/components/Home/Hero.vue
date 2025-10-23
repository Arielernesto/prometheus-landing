<script setup>
import Button from '../Button.vue';
import Badge from '../ui/badge/Badge.vue';

const images = [
  {
    src: 'tools.png',
    width: 250,
    height: 300,
    class: '',
    badge: "Integracion con tus apps"
  },
  {
    src: 'apps.png',
    width: null,
    height: null,
    class: 'col-span-2 object-contain',
    badge: "Datos que viajan contigo"
  },
  {
    src: 'work.png',
    width: 250,
    height: 300,
    class: 'object-contain',
    badge: "Haz que tu trabajo brille"
  },
  {
    src: 'table.png',
    width: 250,
    height: 300,
    class: '',
    badge: "Conecta con tus datos"
  },
  {
    src: 'apps.png',
    width: 250,
    height: 300,
    class: 'col-span-2 object-cover',
    badge: "Conecta con tus datos"
  },
]
</script>

<template>
  <section class="flex-col">
    <!-- Hero Content -->
    <div class="flex flex-col lg:flex-row gap-6 lg:gap-x-2 justify-between text-white mt-6 md:mt-10 px-4 md:px-10">
      
      <!-- Título principal -->
      <div class="w-full lg:w-[60%]">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold p-0 m-0 lg:ml-15">
          Transforma tus datos en <span class="texto-gradiente">decisiones inteligentes</span>
        </h1>
      </div>

      <!-- Componente con resplandor -->
      <div class="w-full lg:w-[320px] glow-gradiente relative z-10">
        <p class="text-left text-sm md:text-base mt-4 md:mt-8 text-white">
          Nuestra plataforma convierte datos complejos en herramientas simples, intuitivas y eficientes que tu equipo puede usar desde cualquier lugar sin necesidad de código.
        </p>
        <Button class="mt-6 md:mt-8">Start for Free</Button>
      </div>
    </div>

    <!-- Marquee de imágenes -->
    <div class="mt-10 md:mt-20">
      <NuxtMarquee class="grid grid-cols-8 z-10 over" gradient="true" gradient-color="rgba(0, 0, 0, 0.8)">
        <div v-for="(item, index) in images" :key="index" class="mx-2 relative">
          <NuxtImg :src="item.src" :class="`rounded-lg w-full h-[200px] md:h-[300px] object-cover ${item.class}`" />
          <Badge class="absolute bottom-2 px-2 md:px-3 py-1 md:py-2 left-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm rounded-2xl shadow">
            {{ item.badge }}
          </Badge>
        </div>
      </NuxtMarquee>
    </div>
  </section>
</template>

<style>
.texto-gradiente {
  background: linear-gradient(270deg, #ff4e00, #ff9900, #ff4e00);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fuegoGradiente 5s ease infinite;
}

@keyframes fuegoGradiente {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 🔥 Luz naranja animada detrás del div */
.glow-gradiente::before {
  content: "";
  position: absolute;
  inset: -80px; /* Más expansión */
  z-index: -20;
  background: radial-gradient(
    circle at center,
    rgba(255, 120, 0, 0.45) 0%,   /* Naranja más cálido y más opaco */
    rgba(255, 80, 0, 0.25) 40%,   /* Transición más rica */
    transparent 80%
  );
  animation: resplandor 8s ease-in-out infinite;
  border-radius: 50%;
  filter: blur(100px); /* Más difuso */
  opacity: 0.9; /* Más presencia sin saturar */
}

.glow-gradiente::before {
  mix-blend-mode: screen;
}

@keyframes resplandor {
  0%   { transform: scale(1) translate(-30px, -30px); }
  50%  { transform: scale(1.1) translate(30px, 30px); }
  100% { transform: scale(1) translate(-30px, -30px); }
}
</style>