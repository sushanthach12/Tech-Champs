import React from 'react'

const page = () => {
  return (
    <div>
      <div className="relative overflow-hidden py-24 sm:py-18">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Let's Change The World Together!
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:pl-24">
          <div className='flex justify-start'>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-6xl">Workshop</h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">By learning about new topics and meeting leaders in their field student feels encouraged and motivated. Listening to any prominent personality in any seminar or workshop helps the student to gain information about their way of work or how things take place.</p>
            </div>
            <div className={`mx-auto max-w-sm px-4 lg:mx-6 rounded-md hidden lg:block`}>
              <img src='/workshop.png' className='rounded-xl object-cover object-center h-52' />
            </div>

          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-blue-500 sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#">More <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden py-10 sm:py-18">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Let's Change The World Together!
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:pl-24">
          <div className='flex justify-start'>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-6xl">Mentorship</h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">By learning about new topics and meeting leaders in their field student feels encouraged and motivated. Listening to any prominent personality in any seminar or workshop helps the student to gain information about their way of work or how things take place.</p>
            </div>
            <div className={`mx-auto max-w-sm px-4 lg:mx-6 rounded-md hidden lg:block`}>
              <img src='/workshop.png' className='rounded-xl object-cover object-center h-52' />
            </div>

          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-blue-500 sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#">More <span aria-hidden="true">&rarr;</span></a>
            </div>
            {/* <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-700">PLATFORM FEE</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">0%</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-700">DONORS</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">300+</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-700">FUNDRAISERS</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">1L+</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-700">TRUSTFULL</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">99.9%</dd>
                            </div>
                        </dl> */}
          </div>
        </div>
      </div>


      <h1 className="font-bold text-3xl dark:text-cyan-600 dark:hover:text-gray-600 px-4 text-center pt-2">
        Events
      </h1>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-400 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-slate-300">
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Event 1
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-400 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-slate-300">
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Event 2
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-400 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-slate-300">
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Event 3
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page