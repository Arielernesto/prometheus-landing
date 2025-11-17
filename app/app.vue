<script setup>
  import Navbar from './components/Navbar.vue';
  import Hero from './components/Home/Hero.vue';
  import InfoBlock from './components/Home/InfoBlock.vue';
  import AnimatedSection from './components/Home/AnimatedSection.vue';
  import CursorFollower from './components/CursorFollower.vue';
  import AnimatedCardsSection from './components/Home/AnimatedCardsSection.vue';
  import DashboardSection from './components/Home/DashboardSection.vue';
  import LeadsSection from './components/Home/LeadsSection.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <CursorFollower></CursorFollower>

  <div class="flex flex-col gap-y-40 justify-center py-20 bg-black min-h-screen overflow-hidden " >
    <Hero/>
    <InfoBlock />
    <AnimatedSection></AnimatedSection>
    <AnimatedCardsSection></AnimatedCardsSection>
    <DashboardSection></DashboardSection>
    <LeadsSection></LeadsSection>
  </div>

  <Footer></Footer>

</template>
