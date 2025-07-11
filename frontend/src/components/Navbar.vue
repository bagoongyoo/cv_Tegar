<template>
  <header
    :class="[
      'bg-gray-950 shadow-md sticky top-0 z-50 transition-transform duration-300',
      { '-translate-y-full': isHidden }
    ]"
  >
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800"></div>
      <ul class="flex space-x-6">
        <li><a href="#profil" class="text-slate-300 hover:text-slate-500 transform hover:-translate-y-0.5 transition-all duration-300">Profil</a></li>
        <li><a href="#pendidikan" class="text-slate-300 hover:text-slate-500  transform hover:-translate-y-0.5 transition-all duration-300">Pendidikan</a></li>
        <li><a href="#skill" class="text-slate-300 hover:text-slate-500  transform hover:-translate-y-0.5 transition-all duration-300">Skill</a></li>
        <li><a href="#proyek" class="text-slate-300 hover:text-slate-500  transform hover:-translate-y-0.5 transition-all duration-300">Proyek</a></li>
        <li><a href="#kontak" class="text-slate-300 hover:text-slate-500  transform hover:-translate-y-0.5 transition-all duration-300">Kontak</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
let lastScrollY = window.scrollY

const handleScroll = () => {
  const currentScrollY = window.scrollY
  isHidden.value = currentScrollY > lastScrollY && currentScrollY > 200
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


