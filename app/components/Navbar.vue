<template>
  <!-- Improved navbar with better responsive design -->
  <nav class="fixed px-4 md:px-8 lg:px-10 py-4 z-50 flex justify-between items-center top-0 left-0 w-[100vw] bg-black bg-opacity-50 backdrop-blur-md">
    <!-- Logo Section -->
    <div class="text-white font-bold flex gap-x-3 items-center">
     <NuxtImg src="/icon.png" class="w-12 h-12 object-contain"></NuxtImg>
      <span class="text-xl md:text-2xl">Prometheus</span>
    </div>

    <!-- Desktop Navigation -->
    <div class="text-white font-medium text-base hidden lg:block">
      <ul class="flex gap-x-8">
        <li class="hover:text-orange-400 transition-colors cursor-pointer">Contacto</li>
        <li class="hover:text-orange-400 transition-colors cursor-pointer">Servicios</li>
        <li class="hover:text-orange-400 transition-colors cursor-pointer">Proyectos</li>
        <li class="hover:text-orange-400 transition-colors cursor-pointer">Nosotros</li>
        <li class="hover:text-orange-400 transition-colors cursor-pointer">Blog</li>
      </ul>
    </div>

    <!-- Action Buttons -->
    <div class="flex gap-x-2 md:gap-x-3">
      <Button type="secondary" class="hidden md:block text-sm md:text-base px-4 md:px-6">Log In</Button>
      <Button type="primary" class="text-sm md:text-base px-4 md:px-6">Sign Up</Button>
    </div>
  </nav>
</template>

<script setup>
import Button from './Button.vue'
</script>
