import React from "react";
import Image from "next/image"
export default function page() {
  return (
    <div className="mb-8">
      <div class="flex flex-col text-center w-full my-20">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            What are we!
          </div>
        </div>
        <h1 class="sm:text-6xl text-4xl title-font mb-4 text-blue-900 font-extrabold">What we are?</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700"> EmpowerED is a youth organisation and global pioneer in supporting
        youth-led enterpreneurship development. Our mission is to support youth to create positive change towards more
        inclusive, fair, and sustainable communities. We do this by providing
        skills development, capacity building, mentoring, and grants. Young people are the key to success for the Sustainable Development
        Goals, yet donor funding rarely goes to young people and youth-led
        projects. Even when funding may be available, support and resources to
        develop the skills and capacity of these young leaders are often
        missing. EmpowerD works to fill this gap - and the results are
        astounding.
</p>
      </div>
      <div className="relative overflow-hidden py-8 sm:py-18">
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

          </div>
        </div>
      </div>

    </div>
  )
}
