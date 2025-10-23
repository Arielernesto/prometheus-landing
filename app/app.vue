<script setup>
  import Navbar from './components/Navbar.vue';
  import Hero from './components/Home/Hero.vue';
  import InfoBlock from './components/Home/InfoBlock.vue';
</script>

<template>
  <div class="flex flex-col gap-y-40 justify-center py-20 bg-black min-h-screen overflow-hidden ">
    <Navbar />
    <Hero/>
    <InfoBlock />
  </div>
</template>
