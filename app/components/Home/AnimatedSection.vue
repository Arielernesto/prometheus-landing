<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CTAAnimated from '../CTA-Animated.vue'
import { sections } from '~/data/Home'

const cursorStore = useCursor()
gsap.registerPlugin(ScrollTrigger)

let mm
const scroll = () => {
  const panels = Array.from(document.querySelectorAll(".sticky-section_panel"));

  panels.forEach((panel, index) => {
    const isLast = index === panels.length - 1;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          scrub: true,
        },
      })
      // Animate panel
      .to(
        panel,
        {
          ease: "none",
          startAt: { filter: "brightness(100%) blur(0px)" },
          filter: isLast ? "none" : "brightness(50%) blur(10px)",
          borderRadius: 40,
        },
        "<"
      )
  });
};


onMounted(() => {
  const details = gsap.utils.toArray('.desktopContentSection:not(:first-child)')
  const photos = gsap.utils.toArray('.desktopPhoto:not(:first-child)')
  const allPhotos = gsap.utils.toArray('.desktopPhoto')
  gsap.set(photos, { yPercent: 101 })
	scroll()
  mm = gsap.matchMedia()

  mm.add('(min-width: 600px)', () => {
    console.log('desktop')

    ScrollTrigger.create({
      trigger: '.gallery',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.right'
    })


    details.forEach((detail, index) => {
      const animation = gsap.timeline()
        .to(photos[index], { yPercent: 0 })
        .set(allPhotos[index], { autoAlpha: 0 })

      ScrollTrigger.create({
        trigger: detail,
        start: 'top 80%',
        end: 'top 30%',
        animation,
        scrub: true,
        markers: false
      })
    })
  })
})

onBeforeUnmount(() => {
  if (mm) mm.revert()
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<template>
 <section class=" relative md:px-5">
  <div class="bg-[#1A1A1A] rounded-4xl  top-0 text-white sticky-section_panel">
    <div class="gallery" id="smooth-content">
      <!-- LADO IZQUIERDO (Texto desktop) -->
      <div class="left">
        <div class="desktopContent">
          <div
            v-for="(item, index) in sections"
            :key="index"
            class="desktopContentSection"
          >
            <CTAAnimated
              :color="item.color"
              :brand="item.brand"
              :title="item.title"
              :description="item.description"
              :button-label="item.buttonLabel"
            />
          </div>
        </div>
      </div>

      <!-- LADO DERECHO (Imágenes desktop + mobile responsive) -->
      <div class="right">
        <!-- Mobile responsive content -->
        <div class="mobileContent space-y-20 py-10">
          <div
            v-for="(item, index) in sections"
            :key="'mobile-' + index"
            class="flex flex-col items-center text-center"
          >
            <div class="mobilePhoto overflow-hidden shadow-lg rounded-3xl">
              <img
                :src="item.image"
                alt=""
                class="w-full sticky-section_image mt-20  h-full object-cover rounded-3xl"
              />
            </div>

            <div class="mt-6 w-[90%]">
              <CTAAnimated
                :color="item.color"
                :brand="item.brand"
                :title="item.title"
                :description="item.description"
                :button-label="item.buttonLabel"
              />
            </div>
          </div>
        </div>

        <!-- Desktop content (imágenes fijas) -->
        <div class="desktopPhotos">
          <div
            v-for="(item, index) in sections"
            :key="'photo-' + index"
            class="desktopPhoto"
          >
            <img :src="item.image" alt="" class="w-full h-full object-cover " v-on:mouseleave="cursorStore.desactivateHoverClickPhoto" v-on:mouseover="cursorStore.activateHoverClickPhoto(item.color)" />
          </div>
        </div>
      </div>
    </div>
  </div>
 </section>
</template>

<style>
.gallery {
  display: flex;
}

.left {
  width: 50%;
}

.right {
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.desktopContent {
  margin: auto;
  width: 80%;
}

.desktopContentSection {
  margin-top: 50px;
  min-height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.desktopPhotos {
  width: 500px;
  height: 500px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
}

.desktopPhoto {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mobileContent {
  display: none;
  width: 100%;
}

.mobilePhoto {
  width: 85vw;
  height: 85vw;
  border-radius: 1.5rem;
}

/* Responsive */
@media screen and (max-width: 599px) {
  .left {
    display: none;
  }

  .right {
    height: auto;
    width: 100%;
    align-items: center;
  }

  .desktopPhotos {
    display: none;
  }

  .mobileContent {
    display: block;
  }
}
</style>
