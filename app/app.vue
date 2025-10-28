<script setup>
  import Navbar from './components/Navbar.vue';
  import Hero from './components/Home/Hero.vue';
  import InfoBlock from './components/Home/InfoBlock.vue';
  import AnimatedSection from './components/Home/AnimatedSection.vue';
  import CursorFollower from './components/CursorFollower.vue';
</script>

<template>
  <Navbar />
  <CursorFollower></CursorFollower>
  <div id="smooth-wrapper">
  <div class="flex flex-col gap-y-40 justify-center py-20 bg-black min-h-screen overflow-hidden " id="smooth-content">
    <Hero/>
    <InfoBlock />
    <AnimatedSection></AnimatedSection>
  </div>
  </div>
</template>
