<template>
  <main
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    class="background relative mt-32 lg:mt-32 z-20 sm:h-full md:mt-2"
  >
    <section
      class="text-black flex flex-col items-center justify-center h-full"
    >
      <h2
        class="text-[#093624] font-mainFont text-3xl font-bold lg:-mt-20 pt-20 sm:pt-10 md:pt-2"
      >
        Our Customers
        <hr class="w-10 bg-[#BECEC7]" />
      </h2>
      <div>
        <img :src="comma" alt="" class="absolute right-10 top-[12rem]" />
      </div>
      <div
        class="flex items-center justify-center mt-10 sm:mt-5 px-36 gap-20 lg:gap-14 lg:px-36 sm:flex-col sm:px-2 sm:gap-2 md:px-10 md:gap-2"
      >
        <p
          class="text-black text-center text-[16px] leading-[28px] sm:leading-[20px] lg:text-[16px]"
        >
          “Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut
          libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
          auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur
          aliquet quam id dui posuere.”
        </p>
        <p
          class="text-black text-center text-[16px] leading-[28px] sm:leading-[20px] lg:text-[16px]"
        >
          “Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut
          libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
          auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur
          aliquet quam id dui posuere.”
        </p>
        <p
          class="text-black text-center text-[16px] leading-[28px] sm:leading-[20px] lg:text-[16px]"
        >
          “Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut
          libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
          auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur
          aliquet quam id dui posuere.”
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import backgroundImage from "@/assets/Insurance assets/Vector 26.png";
import comma from "@/assets/Insurance assets/“.png";

const backgroundImageRef = ref(backgroundImage);
</script>

<style scoped>
.background {
  height: 100vh;
  background-size: cover;
  background-position: center;
}
</style>
