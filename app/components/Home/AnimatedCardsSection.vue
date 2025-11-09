<template>
  <section class="customer_programs">
    <div class="program_row">
      <!-- Título centrado -->
      <div class="header-wrapper">
        <div class="header-line"></div>
        <h1 class="font-bold text-center text-white text-4xl main-text">How it Works</h1>
        <div class="header-line"></div>
      </div>

      <!-- Cards -->
      <div class="program_row_inner pl-[150px]">
        <!-- Primera card con efecto de ondas de agua al hover -->
        <a href="#contact" class="program_card water-ripple-card">
          <div class="inner ripple-card" @mouseenter="triggerWaterRipple">
            <!-- Ondas de agua expansivas -->
            <div class="ripple-wave ripple-wave-1"></div>
            <div class="ripple-wave ripple-wave-2"></div>
            <div class="ripple-wave ripple-wave-3"></div>
            <div class="ripple-wave ripple-wave-4"></div>
            
            <div class="card-content">
              <div class="step-number">01</div>
              <div class="text-content">
                <h3>Contáctame</h3>
                <p class="card-description">Inicia la conversación</p>
              </div>
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </a>

        <div class="program_card" @click="handleCardClick($event, 1)">
          <div class="inner" ref="card1">
            <div class="bubble-fill bubble-2" ref="bubble1"></div>
            <div class="card-content">
              <div class="step-number">02</div>
              <div class="text-content">
                <h3>Planificación</h3>
                <p class="card-description">Definimos objetivos</p>
              </div>
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="program_card" @click="handleCardClick($event, 2)">
          <div class="inner" ref="card2">
            <div class="bubble-fill bubble-3" ref="bubble2"></div>
            <div class="card-content">
              <div class="step-number">03</div>
              <div class="text-content">
                <h3>Desarrollo</h3>
                <p class="card-description">Construimos tu solución</p>
              </div>
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="program_card" @click="handleCardClick($event, 3)">
          <div class="inner" ref="card3">
            <div class="bubble-fill bubble-4" ref="bubble3"></div>
            <div class="card-content">
              <div class="step-number">04</div>
              <div class="text-content">
                <h3>Entrega</h3>
                <p class="card-description">Lanzamos tu proyecto</p>
              </div>
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cards = [ref(null), ref(null), ref(null), ref(null)]
const bubbles = [ref(null), ref(null), ref(null), ref(null)]

const triggerWaterRipple = (event) => {
  const ripples = event.currentTarget.querySelectorAll('.ripple-wave')
  
  ripples.forEach((ripple, index) => {
    gsap.fromTo(ripple,
      { 
        scale: 0,
        opacity: 0.8
      },
      {
        scale: 3.5,
        opacity: 0,
        duration: 1.5 + (index * 0.2),
        ease: 'power2.out',
        delay: index * 0.1
      }
    )
  })
}

const handleCardClick = (_, index) => {
  const card = cards[index].value
  const bubble = bubbles[index].value
  const rect = card.getBoundingClientRect()

  const x = rect.width / 2
  const y = rect.height / 2

  gsap.set(bubble, { left: x, top: y, scale: 0 })
  gsap.to(bubble, {
    scale: 3,
    duration: 0.8,
    ease: 'power2.out',
    onComplete: () => gsap.to(bubble, { scale: 0, duration: 0.3 })
  })
}

onMounted(() => {
  const row = document.querySelector('.program_row_inner')
  const getScrollAmount = () => -(row.scrollWidth - window.innerWidth) - 850

  const tween = gsap.to(row, {
    x: getScrollAmount,
    duration: 3,
    ease: 'none'
  })

  ScrollTrigger.create({
    trigger: '.program_row',
    start: 'top 20%',
    end: () => `+=${-getScrollAmount()}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true
  })
})
</script>

<style scoped>
.customer_programs {
  background: #000;
  overflow: hidden;
}

.program_row_inner {
  display: flex;
  gap: 2rem;
  padding-left: 450px;
  will-change: transform;
}

.program_card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.program_card:hover {
  transform: translateY(-8px);
}

.inner {
  width: 420px;
  height: 140px;
  padding: 1.5rem 2rem;
  position: relative;
  background: linear-gradient(135deg, #1e1e1e 0%, #141414 100%);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
  transition: all 0.3s ease;
}

/* Efectos de ondas de agua para la primera card */
.water-ripple-card .inner {
  background: #000000;
  border: 1px solid rgba(6,182,212,0.2);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.water-ripple-card:hover .inner {
  background: linear-gradient(135deg, 
    rgba(6,182,212,0.15) 0%, 
    rgba(14,165,233,0.12) 30%,
    rgba(6,182,212,0.08) 60%,
    rgba(0,0,0,0.95) 100%
  );
  border-color: rgba(6,182,212,0.5);
  box-shadow: 
    0 4px 40px rgba(6,182,212,0.4),
    0 0 80px rgba(6,182,212,0.15),
    inset 0 0 40px rgba(6,182,212,0.08);
}

/* Ondas expansivas de agua */
.ripple-wave {
  position: absolute;
  width: 120px;
  height: 120px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}

.ripple-wave-1 {
  background: radial-gradient(circle, 
    rgba(6,182,212,0.4) 0%, 
    rgba(6,182,212,0.3) 30%, 
    rgba(6,182,212,0.1) 60%, 
    transparent 100%
  );
  border: 2px solid rgba(6,182,212,0.6);
}

.ripple-wave-2 {
  background: radial-gradient(circle, 
    rgba(14,165,233,0.35) 0%, 
    rgba(14,165,233,0.25) 30%, 
    rgba(14,165,233,0.08) 60%, 
    transparent 100%
  );
  border: 2px solid rgba(14,165,233,0.5);
}

.ripple-wave-3 {
  background: radial-gradient(circle, 
    rgba(6,182,212,0.3) 0%, 
    rgba(6,182,212,0.2) 30%, 
    rgba(6,182,212,0.05) 60%, 
    transparent 100%
  );
  border: 1px solid rgba(6,182,212,0.4);
}

.ripple-wave-4 {
  background: radial-gradient(circle, 
    rgba(14,165,233,0.25) 0%, 
    rgba(14,165,233,0.15) 30%, 
    rgba(14,165,233,0.03) 60%, 
    transparent 100%
  );
  border: 1px solid rgba(14,165,233,0.3);
}

/* Mejoras visuales para la primera card */
.water-ripple-card .step-number {
  color: rgba(6,182,212,0.35);
  transition: all 0.6s ease;
  text-shadow: 0 0 0 rgba(6,182,212,0);
}

.water-ripple-card:hover .step-number {
  color: rgba(6,182,212,0.8);
  text-shadow: 0 0 25px rgba(6,182,212,0.5);
}

.water-ripple-card h3 {
  transition: all 0.6s ease;
}

.water-ripple-card:hover h3 {
  color: rgba(6,182,212,1);
  text-shadow: 0 0 20px rgba(6,182,212,0.4);
}

.water-ripple-card .card-description {
  transition: all 0.6s ease;
}

.water-ripple-card:hover .card-description {
  color: rgba(6,182,212,0.7);
}

.water-ripple-card .card-icon {
  color: rgb(6,182,212);
  background: rgba(6,182,212,0.1);
  border: 1px solid rgba(6,182,212,0.25);
  transition: all 0.6s ease;
}

.water-ripple-card:hover .card-icon {
  background: rgba(6,182,212,0.25);
  border-color: rgba(6,182,212,0.5);
  box-shadow: 0 0 25px rgba(6,182,212,0.4);
  transform: scale(1.08) rotate(5deg);
}

.bubble-fill {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: scale(0);
  background: radial-gradient(circle, rgba(34,211,238,0.7) 0%, rgba(99,102,241,0.5) 50%, transparent 70%);
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  z-index: 2;
}

.step-number {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(99,102,241,0.3);
  transition: all 0.3s ease;
}

.text-content {
  flex: 1;
  text-align: center;
}

h3 {
  color: #fff;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.card-description {
  color: rgba(255,255,255,0.5);
  font-size: 0.875rem;
  margin: 0;
  transition: all 0.3s ease;
}

.program_card:hover .card-description {
  color: rgba(255,255,255,0.7);
}

.card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(99,102,241,0.1);
  color: rgb(99,102,241);
  transition: all 0.3s ease;
}

.program_card:hover .card-icon {
  transform: scale(1.05) rotate(3deg);
  background: rgba(99,102,241,0.2);
}

/* Variaciones de color para otras cards */
.program_card:nth-child(2) .inner {
  border-color: rgba(168,85,247,0.15);
}

.program_card:nth-child(2) .step-number {
  color: rgba(168,85,247,0.4);
}

.program_card:nth-child(2) .card-icon {
  color: rgb(168,85,247);
  background: rgba(168,85,247,0.1);
}

.program_card:nth-child(2):hover .inner {
  border-color: rgba(168,85,247,0.3);
  box-shadow: 0 4px 24px rgba(168,85,247,0.2);
}

.program_card:nth-child(3) .inner {
  border-color: rgba(236,72,153,0.15);
}

.program_card:nth-child(3) .step-number {
  color: rgba(236,72,153,0.4);
}

.program_card:nth-child(3) .card-icon {
  color: rgb(236,72,153);
  background: rgba(236,72,153,0.1);
}

.program_card:nth-child(3):hover .inner {
  border-color: rgba(236,72,153,0.3);
  box-shadow: 0 4px 24px rgba(236,72,153,0.2);
}

.program_card:nth-child(4) .inner {
  border-color: rgba(251,146,60,0.15);
}

.program_card:nth-child(4) .step-number {
  color: rgba(251,146,60,0.4);
}

.program_card:nth-child(4) .card-icon {
  color: rgb(251,146,60);
  background: rgba(251,146,60,0.1);
}

.program_card:nth-child(4):hover .inner {
  border-color: rgba(251,146,60,0.3);
  box-shadow: 0 4px 24px rgba(251,146,60,0.2);
}

.bubble-2 {
  background: radial-gradient(circle, rgba(168,85,247,0.7), rgba(139,92,246,0.5), transparent 70%)!important;
}

.bubble-3 {
  background: radial-gradient(circle, rgba(236,72,153,0.7), rgba(219,39,119,0.5), transparent 70%)!important;
}

.bubble-4 {
  background: radial-gradient(circle, rgba(251,146,60,0.7), rgba(249,115,22,0.5), transparent 70%)!important;
}

.header-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.header-line {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgb(234, 88, 12), transparent);
}

.main-text {
  background: linear-gradient(135deg,#fff,#a0a0a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
</style>
