<template>
  <main>
    <section class="flex flex-col px-44 items-start lg:px-44 md:px-10 sm:px-10">
      <h1 class="text-left font-mainFont font-extrabold text-4xl mt-20">
        Individual & Umbrella Policies
        <hr class="w-16 h-[2px] bg-[#BECEC7] font-bold" />
      </h1>
      <div class="flex items-center justify-center gap-5 mt-10 sm:flex-col">
        <div
          class=" rounded-md cursor-pointer hover:shadow-darkShadow"
        >
          <img :src="policy2" alt="" />

          <h2 class="font-mainFont font-extrabold text-2xl pt-3 px-7">
            Life Insurance
          </h2>
          <p
            class="font-secondaryFont mt-5 px-7 text-[#4F4F4F] font-light text-[16px] pb-6"
          >
            Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet
            nisl tempus convallis
          </p>
        </div>
        <div
          class=" rounded-md cursor-pointer hover:shadow-darkShadow"
        >
          <img :src="policy1" alt="" />
          <h2 class="font-mainFont font-extrabold text-2xl pt-3 px-7 md:px-2">
            Home Insurance
          </h2>
          <p
            class="font-secondaryFont mt-5 px-7 text-[#4F4F4F] font-light text-[16px] pb-6"
          >
            Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet
            nisl tempus convallis
          </p>
        </div>
        <div
          class="rounded-md cursor-pointer hover:shadow-darkShadow"
        >
          <img :src="policy3" alt="" />
          <h2 class="font-mainFont font-extrabold text-2xl pt-3 px-7">
            Auto Insurance
          </h2>
          <p
            class="font-secondaryFont mt-5 px-7 text-[#4F4F4F] font-light text-[16px] pb-6"
          >
            Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet
            nisl tempus convallis
          </p>
        </div>
      </div>
      <button
        class="text-[#2B2B31] px-2 py-3 mt-14 uppercase bg-secondary w-[15rem] rounded-md font-medium font-secondaryFont mx-auto"
      >
        Browse All Policies
      </button>
    </section>
  </main>
</template>

<script setup>
import policy1 from "@/assets/Insurance assets/Mask Group (1).png";
import policy2 from "@/assets/Insurance assets/Mask Group (2).png";
import policy3 from "@/assets/Insurance assets/Mask Group.png";
</script>

<style lang="scss" scoped></style>
