<template>
    <main class="bg-primary z-0 clip-custom-polygon -mt-[12rem] sm:-mt-20 lg:flex">
        <section 
        class="relative overflow-hidden pt-[25rem] sm:pt-20 flex items-center justify-center px-44 gap-5 lg:px-44 lg:flex  sm:flex-col sm:px-0 md:flex-col">
           
        <div class=" lg:flex lg:items-center lg:justify-center lg:-gap-32 lg:mx-[5rem] lg:mb-14">
            <div class="relative z-10 p-8 lg:pl-24">
                <h2 class="text-white text-3xl font-secondaryFont">Contact Us
                    <hr class="w-14 h-[2px] bg-white mt-3">
                </h2>
                <p class="text-white pr-[7rem] md:pr-0 mt-10 mb-10 sm:pr-0 lg:pr-[7rem]">
                    Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec,
                    egestas non nisi. Donec rutrum congue leo eget malesuada. 
                    Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.
                </p>
                <div class="flex flex-col space-y-4 bg-white w-[29rem] sm:w-[22rem] md:w-[30rem] rounded-md">
                    <div class="flex gap-6 mt-5 px-4">
                        <div class="bg-gradient-to-r from-[#1F8058] to-[#0D4A31] rounded-full py-2 px-3">
                            <img :src="email" alt="Email Icon" class="py-1" />

                        </div>
                        <div>
                            
                        <h2 class="text-[#093624] font-medium font-secondaryFont text-[16px]">Email</h2>
                        <p class="text-[#272D95] font-secondaryFont font-light text-sm" >inte_ger@yahoo.com</p>
                        </div>
                    </div>

                    <div class="flex  gap-6 px-4">
                        <div class="bg-gradient-to-r from-[#1F8058] to-[#0D4A31] rounded-full py-2 px-3">
                            <img :src="phone" alt="Phone Icon" class="py-1" />
                        </div>
                        <div>
                            
                        <h2  class="text-[#093624] font-medium font-secondaryFont text-[16px]">Phone</h2>
                        <p class="text-[#272D95] font-secondaryFont font-light text-sm" >+62 1404 5123 12312</p>
                        </div>
                    </div>

                    <div class="flex  gap-6 pb-5 px-4">
                        <div class="bg-gradient-to-r from-[#1F8058] to-[#0D4A31] rounded-full py-2 px-3">
                            <img :src="address" alt="Address Icon" class="py-1 sm:w-[2rem]" />
                        </div>
                        <div>
                            
                        <h2  class="text-[#093624] font-medium font-secondaryFont text-[16px]">Address</h2>
                        <p class="text-[#272D95] font-secondaryFont font-light text-sm" >Jl. Jend. Sudirman No.Kav 48A, RT.5/RW.4, Karet Semanggi</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white flex flex-col w-[90rem]  lg:w-[40rem] px-5 py-5 rounded-sm sm:w-[22rem] md:w-[30rem]" >
                <input type="text" placeholder="Name" class="w-full border-2 border-solid border-gray-300 focus:outline-none mb-5 py-2 px-4 text-sm">
                <input type="email" placeholder="Email address"  class="w-full border-2 border-solid border-gray-300 focus:outline-none mb-5 text-sm py-2 px-4">
                <input type="text" placeholder="Phone Number"  class="w-full border-2 border-solid border-gray-300 focus:outline-none mb-5 text-sm py-2 px-4">
                <textarea  placeholder="Message"  class="w-full border-2 border-solid border-gray-300 focus:outline-none mb-5 py-2 px-4 text-sm resize-none h-36"></textarea>
                <button  class="bg-[#6C74F4] rounded-md uppercase font-secondaryFont text-white mt-5 mb-3 py-2  sm:ml-[11.5rem] ml-[17rem] w-32">Submit</button>

            </div>

        </div>
        </section>
    </main>
</template>

<script setup>
import email from '@/assets/Insurance assets/Vector (3).png';
import phone from '@/assets/Insurance assets/Vector (4).png';
import address from '@/assets/Insurance assets/Vector (5).png';
</script>

<style lang="" scoped>
/* You can add any additional styles here if needed */
</style>
