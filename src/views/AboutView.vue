<template>
  <main>
    <section
      class="flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div
        class="flex items-center justify-around gap-20 px-36 mt-24 lg:px-40 sm:flex-col sm:px-2 md:px-5"
      >
        <div class="">
          <h2
            class="text-3xl text-[#093624] font-mainFont font-extrabold pr-[25rem] lg:pr-[25rem] sm:pr-2 md:pr-[10rem]"
          >
            Experienced Agents You Can Trust
            <hr class="h-[2px] bg-[#BECEC7] w-10 mt-2" />
          </h2>
          <p class="pr-[15rem] mt-10 sm:pr-2 md:pr-20 lg:pr-[15rem]">
            Proin eget tortor risus. Praesent sapien massa, convallis a
            pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
            malesuada. Nulla porttitor accumsan tincidunt. Donec rutrum congue
            leo eget malesuada.
          </p>
        </div>
        <div
          class="grid grid-cols-2 place-items-center relative text-center pr-20 sm:pr-0 sm:px-4 md:pr-10"
        >
          <div
            class="bg-primary py-16 px-20 sm:px-16 relative sm:right-5 right-20 rounded-xl"
          >
            <h2 class="font-secondaryFont text-3xl font-normal text-white">
              18
            </h2>
            <p class="font-secondaryFont text-sm text-white">Policies</p>
          </div>
          <div
            class="bg-primary py-16 px-20 sm:px-16 relative sm:right-5 -right-2 rounded-xl border-2 border-solid border-l-blue-500"
          >
            <h2 class="font-secondaryFont text-3xl font-normal text-white">
              9
            </h2>
            <p class="font-secondaryFont text-sm text-white">Agents</p>
          </div>
          <div
            class="bg-primary py-[5rem] px-[1rem] sm:w-[11rem] w-[13rem] sm:right-5 rounded-xl relative right-20 -top-4 border-2 border-solid border-t-blue-500"
          >
            <h2 class="font-secondaryFont text-3xl font-normal text-white">
              10
            </h2>
            <p class="font-secondaryFont text-sm text-white">
              Years in business
            </p>
          </div>
          <div
            class="bg-white text-center shadow-darkShadow py-8 px-[1rem] sm:w-[13rem] w-[15rem] h-[15rem] rounded-xl relative sm:pb-5 sm:right-3 -top-[16px] -right-[1rem]"
          >
            <h2 class="font-mainFont text-2xl font-normal text-[#093624]">
              Free Consultation
            </h2>
            <p
              class="font-secondaryFont text-sm mt-5 px-5 sm:px-2 text-[#595959]"
            >
              Proin eget tortor risus. Praesent  sapien massa, convallis.
            </p>
            <button
              class="bg-secondary text-[#2B2B31] px-6 py-2 mt-5 uppercase font-medium font-secondaryFont rounded-md text-sm"
            >
              Chat Now
            </button>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center gap-52 lg:px-20 lg:gap-52 px-10 mt-10 sm:flex-col sm:gap-20 sm:px-0 md:gap-10 md:px-4"
      >
        <div>
          <img
            :src="img2"
            alt=""
            class="w-[80rem] ml-32 sm:ml-0 md:ml-0 lg:ml-10"
          />
        </div>
        <div class="">
          <h2
            class="text-3xl text-[#093624] font-mainFont font-extrabold pr-[10rem] lg:pr-[10rem] md:pr-14 sm:pr-0"
          >
            We Got You Covered. Don’t Get Caught Off Guard
            <hr class="h-[2px] bg-[#BECEC7] w-14 mt-3" />
          </h2>
          <p class="mt-10 pr-[10rem] sm:pr-0 sm:mb-10 md:pr-10 lg:pr-[10rem]">
            Proin eget tortor risus. Praesent sapien massa, convallis a
            pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
            malesuada. Nulla porttitor accumsan tincidunt. Donec rutrum congue
            leo eget malesuada.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import img2 from "@/assets/Insurance assets/Mask Group (3).png";
</script>

<style lang="scss" scoped></style>
