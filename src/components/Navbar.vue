<template>
  <nav class="flex items-center justify-between px-10 py-8 bg-primary z-40">
    <img :src="logo" alt="Insurance" class="max-h-12" />

    <div class="relative">
      <button
        class="md:hidden text-white focus:outline-none"
        @click="toggleMenu"
      >
        <span class="block w-8 h-0.5 bg-white mb-1"></span>
        <span class="block w-8 h-0.5 bg-white mb-1"></span>
        <span class="block w-8 h-0.5 bg-white"></span>
      </button>

      <ul
        :class="['absolute -right-10 py-20 text-center gap-10 rounded-l-lg font-mainFont bg-primary border-2 border-solid border-primaryDark w-[20rem] text-white transition-all duration-300 ease-in-out', 
                  isMenuOpen ? 'block' : 'hidden']"
        @click="toggleMenu"
      >
        <li>
          <RouterLink to="/" class="block px-4 py-2 text-xl pb-10 hover:bg-gray-700">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="block px-4 py-2 text-xl pb-10 hover:bg-gray-700">Service</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="block px-4 py-2 text-xl pb-10 hover:bg-gray-700">Insurance Services</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="block px-4 py-2">
            <button class="bg-secondary text-black py-2 px-6 font-secondaryFont rounded-lg">Sign In</button>
          </RouterLink>
        </li>
      </ul>

      <div class="hidden md:flex items-center space-x-4 text-white">
        <RouterLink to="/" class="hover:bg-gray-700 px-4 py-2">Home</RouterLink>
        <RouterLink to="/" class="hover:bg-gray-700 px-4 py-2">Service</RouterLink>
        <RouterLink to="/" class="hover:bg-gray-700 px-4 py-2">Insurance Services</RouterLink>
        <RouterLink to="/">
          <button class="bg-secondary text-black py-2 px-4 rounded-lg">Sign In</button>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import logo from '@/assets/Insurance assets/Insurnce.png';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="" scoped>
</style>
