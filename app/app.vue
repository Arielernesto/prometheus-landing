<script setup>
  import Navbar from './components/Navbar.vue';
  import Hero from './components/Home/Hero.vue';
  import InfoBlock from './components/Home/InfoBlock.vue';
  import AnimatedSection from './components/Home/AnimatedSection.vue';
  import CursorFollower from './components/CursorFollower.vue';
  import AnimatedCardsSection from './components/Home/AnimatedCardsSection.vue';
</script>

<template>
  <Navbar />
  <CursorFollower></CursorFollower>

  <div class="flex flex-col gap-y-40 justify-center py-20 bg-black min-h-screen overflow-hidden " >
    <Hero/>
    <InfoBlock />
    <AnimatedSection></AnimatedSection>
    <AnimatedCardsSection></AnimatedCardsSection>
  </div>

</template>
