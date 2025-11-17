<template>
  <footer class="bg-black border-t border-neutral-800">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Logo Section -->
        <div class="flex flex-col">
          <router-link to="/" class="flex items-center gap-2 w-fit mb-4">
            <Flame class="w-8 h-8 text-orange-500" />
            <span class="text-2xl font-bold text-white">Prometheus</span>
          </router-link>
          <p class="text-neutral-400 text-sm max-w-xs">
            Transformando ideas en soluciones digitales innovadoras y de alto impacto para tu negocio.
          </p>
          <div class="flex gap-4 mt-6">
            <a href="#" class="text-neutral-400 hover:text-orange-500 transition-colors">
              <!-- Facebook Icon -->
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.02c0-2.77 1.69-4.28 4.16-4.28 1.18 0 2.2.09 2.49.13v2.89h-1.71c-1.34 0-1.6.64-1.6 1.57v2.05h3.2l-.42 3.54h-2.78V20" />
              </svg>
            </a>
            <a href="#" class="text-neutral-400 hover:text-orange-500 transition-colors">
              <!-- LinkedIn Icon -->
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 1.5h-5v3.5h5v-3.5m-6 0H8v3.5h5.5v-3.5M8 9.5H5V19h8v-9.5H8m10 0h-5v9.5h5V9.5z" />
              </svg>
            </a>
            <a href="#" class="text-neutral-400 hover:text-orange-500 transition-colors">
              <!-- Twitter Icon -->
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Links Section -->
        <div class="flex flex-col">
          <h3 class="text-white font-semibold text-lg mb-6">Enlaces</h3>
          <nav class="flex flex-col gap-3">
            <router-link
              v-for="link in navigationLinks"
              :key="link.label"
              :to="link.href"
              class="text-neutral-400 hover:text-orange-500 transition-colors text-sm"
            >
              {{ link.label }}
            </router-link>
          </nav>
        </div>

        <!-- Recent Posts Section -->
        <div class="flex flex-col">
          <h3 class="text-white font-semibold text-lg mb-6">Posts Recientes</h3>
          <div class="space-y-4">
            <router-link
              v-for="post in recentPosts"
              :key="post.id"
              :to="`#post-${post.id}`"
              class="group block"
            >
              <p class="text-sm text-neutral-300 group-hover:text-orange-500 transition-colors line-clamp-2">
                {{ post.title }}
              </p>
              <span class="text-xs text-neutral-500 mt-1 block">{{ post.date }}</span>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-neutral-500">
          © 2025 Prometheus. Todos los derechos reservados.
        </p>
        <div class="flex gap-6">
          <router-link to="#" class="text-xs text-neutral-500 hover:text-neutral-400 transition-colors">
            Privacidad
          </router-link>
          <router-link to="#" class="text-xs text-neutral-500 hover:text-neutral-400 transition-colors">
            Términos
          </router-link>
          <router-link to="#" class="text-xs text-neutral-500 hover:text-neutral-400 transition-colors">
            Cookies
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Flame } from 'lucide-vue-next'

const recentPosts = [
  { id: 1, title: 'Automatización de Diseño a Código', date: 'Nov 15, 2024' },
  { id: 2, title: 'Mejora tu Flujo de Trabajo', date: 'Nov 12, 2024' },
  { id: 3, title: 'Tendencias de Diseño 2024', date: 'Nov 10, 2024' },
]

const navigationLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Nosotros', href: '#nosotros' },
]
</script>