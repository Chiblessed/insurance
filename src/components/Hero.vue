<template>
  <main>
    <section
      class="bg-primary flex items-center justify-center  lg:px-12 gap-20 px-10 sm:px-3 sm:gap-10 -pt-20 overflow-hidden sm:flex-col"
    >
      <div>
        <h1
          class="font-mainFont text-6xl leading-[60px] mb-5 font-extrabold text-white md:pt-20 pr-[15rem] sm:pr-0"
        >
        Are you covered? Home, Life & Auto Insurance.</h1>
<p class="pr-[16rem] sm:pr-0 sm:mb-10 mb-20 text-white text-xl">
  Don't wait until it's too late—secure your future and protect what matters most. 
  Get a free quote now!
</p>

        <div class="mb-10">
          <button
            class="bg-secondary px-5 py-3 rounded-lg uppercase mr-5 font-secondaryFont font-bold"
          >
            Get Started
          </button>
          <button
            class="text-white px-5 py-3 font-secondaryFont uppercase font-bold hover:border-2 hover:border-secondary hover:border-solid hover:rounded-lg"
          >
            Watch the video
          </button>
        </div>
        <div class="flex gap-3 mb-5">
          <img :src="banner1" alt="" class="bg-white rounded-sm px-3" />
          <img :src="banner2" alt="" class="w-[10rem] rounded-sm" />
          <img
            :src="banner3"
            alt=""
            class="bg-white rounded-sm w-[8rem] px-3"
          />
        </div>
      </div>
      <div class="relative">
        <img
          :src="heroimg"
          class="w-[60rem] lg:w-[60rem] md:w-[40rem] sm:-right-1 top-1 h-full z-0 right-20 relative"
          alt=""
        />
        <img
          :src="details1"
          alt=""
          class="absolute lg:top-[30rem] sm:top-[23rem] sm:-right-5 top-[30rem] md:top-[38rem] -right-6 z-50"
        />
        <img
          :src="details3"
          alt=""
          class="absolute lg:top-[26rem] lg:-left-36 sm:top-[18rem] sm:left-1 top-[28rem] md:-left-16 md:top-[35rem] -left-40 z-50"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import banner1 from "@/assets/Insurance assets/image 212.png";
import banner2 from "@/assets/Insurance assets/image 215.png";
import banner3 from "@/assets/Insurance assets/image 214.png";
import heroimg from "@/assets/Insurance assets/heroimg.png";
import details1 from "@/assets/Insurance assets/Group 323.png";
import details2 from "@/assets/Insurance assets/Group 324.png";
import details3 from "@/assets/Insurance assets/Group 326.png";
import details4 from "@/assets/Insurance assets/Group 327.png";
import details5 from "@/assets/Insurance assets/Group 328.png";
</script>

<style lang="" scoped></style>
