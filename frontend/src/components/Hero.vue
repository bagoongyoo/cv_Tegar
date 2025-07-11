<template>
  <section id="profil" class="">
    <div
      id="kontenprofil"
      class="container mx-auto px- py-20 flex flex-col md:flex-row items-center"
    >
      <div class="md:w-1/2 mb-10 md:mb-10">
        <h1
          class="text-5xl font-bold text-white-800 mb-4 animate-slide-in-left"
          style="animation-delay: 200ms"
        >
          Halo, Saya <br />
          <span class="text-blue-300">Muhammad Tegar</span>
        </h1>

        <p class="text-xl text-white-600 mb-8 animate-slide-in-left" style="animation-delay: 400ms">
          Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
        </p>

        <a
          href="#kontak"
          class="bg-slate-500 text-white font-bold py-3 px-6 rounded-full hover:bg-slate-700 transition-colors duration-300 inline-block animate-slide-in-left"
          style="animation-delay: 600ms"
        >
          Hubungi Saya
        </a>
      </div>
      <div class="md:w-1/2 flex justify-center animate-slide-in-right">
        <img
          src="\src\assets\fotoprofil.JPG"
          alt="Foto Profil"
          class="w-80 h-80 sm:w-82 sm:h-82 rounded-full object-cover shadow-2xl ring-4 ring-white-300 transition duration-300"
        />
      </div>
    </div>
  </section>
</template>
