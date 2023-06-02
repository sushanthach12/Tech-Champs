"use client";
import React from 'react'

import { GrWorkshop } from "react-icons/gr"
import { MdPeople } from "react-icons/md"

function page() {
  return (
    <section class="text-gray-600 body-font my-14 mx-6 px-10">

      <div class="flex flex-col text-center w-full mb-3">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Get involved with us.</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Providing the best possible assistance and mentorship with industry mentors.</p>
      </div>

      <div class="flex flex-col text-center w-full mt-20 py-4 mx-4">
        <h1 class="text-2xl font-semibold title-font mb-4 text-gray-900">Our Assistance include.</h1>
      </div>

      <div class="container mt-8 px-5 py-4 mx-auto">
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100  flex-shrink-0">
            <GrWorkshop size={50} color={"blue"} />
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Workshops</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Mentorship</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <MdPeople size={50} />
          </div>
        </div>

        <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Community Support</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl text-center font-bold tracking-tight text-gray-900">Mentors</h2>

        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>

          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>

          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>

          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>

        </div>
      </div>




      {/* Testimonils */}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                <a class="inline-flex items-center">
                  <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                <a class="inline-flex items-center">
                  <img alt="testimonial" src="https://dummyimage.com/107x107" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                    <span class="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>


    // <div>
    //   <h1 className="font-bold text-2xl dark:text-cyan-600 dark:hover:text-gray-600 px-4 text-center py-4">
    //     Workshop
    //   </h1>
    //   <section className="text-gray-600 body-font overflow-hidden box fixed-container bg-blue-200">
    //     <div className="container px-5 py-24 mx-auto">
    //       <div className="flex flex-wrap -m-12">
    //         <div className="p-12 md:w-1/2 flex flex-col items-start">
    //           <div className="box fixed-container">
    //             {/* <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xl font-medium tracking-widest">
    //               Workshop
    //             </span> */}
    //             <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
    //               Let's Change The World Together !
    //             </h2>
    //             <p className="leading-relaxed mb-8 ">
    //               By learning about new topics and meeting leaders in their
    //               field student feels encouraged and motivated. Listening to any
    //               prominent personality in any seminar or workshop helps the
    //               student to gain information about their way of work or how
    //               things take place.
    //             </p>
    //             <div>
    //               <Image
    //                 src="/workshop.png"
    //                 width={500}
    //                 height={500}
    //                 alt="Picture of the author"
    //                 style={{
    //                   display: "flex",
    //                   justifyContent: "center",
    //                 }}
    //               />
    //             </div>
    //           </div>
    //           <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
    //             <a className="text-indigo-500 inline-flex items-center">
    //               Learn More
    //               <svg
    //                 className="w-4 h-4 ml-2"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //                 fill="none"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               >
    //                 <path d="M5 12h14"></path>
    //                 <path d="M12 5l7 7-7 7"></path>
    //               </svg>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <h1 className="font-bold text-2xl dark:text-cyan-600 dark:hover:text-gray-600 px-4 text-center py-4">
    //     Mentorship
    //   </h1>
    //   <section className="text-gray-600 body-font overflow-hidden box fixed-container bg-red-200">
    //     <div className="container px-5 py-24 mx-auto">
    //       <div className="flex flex-wrap -m-12">
    //         <div className="p-12 md:w-1/2 flex flex-col items-start">
    //           <div className="box fixed-container">
    //             {/* <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xl font-medium tracking-widest">
    //               Workshop
    //             </span> */}
    //             <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
    //               Let's Change The World Together !
    //             </h2>
    //             <p className="leading-relaxed mb-8 ">
    //               By learning about new topics and meeting leaders in their
    //               field student feels encouraged and motivated. Listening to any
    //               prominent personality in any seminar or workshop helps the
    //               student to gain information about their way of work or how
    //               things take place.
    //             </p>
    //           </div>
    //           <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
    //             <a className="text-indigo-500 inline-flex items-center">
    //               Learn More
    //               <svg
    //                 className="w-4 h-4 ml-2"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //                 fill="none"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               >
    //                 <path d="M5 12h14"></path>
    //                 <path d="M12 5l7 7-7 7"></path>
    //               </svg>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <h1 className="font-bold text-2xl dark:text-cyan-600 dark:hover:text-gray-600 px-4 text-center py-4">
    //     Event
    //   </h1>
    //   <section className="text-gray-600 body-font overflow-hidden box fixed-container bg-green-100 px-5">
    //     <div className="container mx-auto">
    //       <div className="flex flex-wrap -m-12">
    //         <div className="p-12 md:w-1/2 flex flex-col items-start">
    //           <div className="box fixed-container">
    //             {/* <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xl font-medium tracking-widest">
    //               Workshop
    //             </span> */}
    //             <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
    //               Let's Change The World Together !
    //             </h2>
    //             <p className="leading-relaxed mb-8 ">
    //               By learning about new topics and meeting leaders in their
    //               field student feels encouraged and motivated. Listening to any
    //               prominent personality in any seminar or workshop helps the
    //               student to gain information about their way of work or how
    //               things take place.
    //             </p>
    //           </div>
    //           <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
    //             <a className="text-indigo-500 inline-flex items-center">
    //               Learn More
    //               <svg
    //                 className="w-4 h-4 ml-2"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //                 fill="none"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               >
    //                 <path d="M5 12h14"></path>
    //                 <path d="M12 5l7 7-7 7"></path>
    //               </svg>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    // </div>
  )
}

export default page