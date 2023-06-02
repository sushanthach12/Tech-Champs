"use client";
import React from 'react'
import Image from "next/image";
function page() {
  return (
    <div>
        <h1 className="font-bold text-2xl dark:text-cyan-600 dark:hover:text-gray-600 px-4 text-center py-4">
        Workshop
      </h1>
      <section className="text-gray-600 body-font overflow-hidden box fixed-container bg-blue-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <div className="box fixed-container">
                {/* <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xl font-medium tracking-widest">
                  Workshop
                </span> */}
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                  Let's Change The World Together !
                </h2>
                <p className="leading-relaxed mb-8 ">
                  By learning about new topics and meeting leaders in their
                  field student feels encouraged and motivated. Listening to any
                  prominent personality in any seminar or workshop helps the
                  student to gain information about their way of work or how
                  things take place.
                </p>
                <div>
                  <Image
                    src="/workshop.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="font-bold text-2xl dark:text-cyan-600 dark:hover:text-gray-600 px-4 text-center py-4">
        Mentorship
      </h1>
      <section className="text-gray-600 body-font overflow-hidden box fixed-container bg-red-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <div className="box fixed-container">
                {/* <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xl font-medium tracking-widest">
                  Workshop
                </span> */}
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                  Let's Change The World Together !
                </h2>
                <p className="leading-relaxed mb-8 ">
                  By learning about new topics and meeting leaders in their
                  field student feels encouraged and motivated. Listening to any
                  prominent personality in any seminar or workshop helps the
                  student to gain information about their way of work or how
                  things take place.
                </p>
              </div>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="font-bold text-2xl dark:text-cyan-600 dark:hover:text-gray-600 px-4 text-center py-4">
        Event
      </h1>
      <section className="text-gray-600 body-font overflow-hidden box fixed-container bg-green-100 px-5">
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <div className="box fixed-container">
                {/* <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xl font-medium tracking-widest">
                  Workshop
                </span> */}
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                  Let's Change The World Together !
                </h2>
                <p className="leading-relaxed mb-8 ">
                  By learning about new topics and meeting leaders in their
                  field student feels encouraged and motivated. Listening to any
                  prominent personality in any seminar or workshop helps the
                  student to gain information about their way of work or how
                  things take place.
                </p>
              </div>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
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
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page