"use client"
import { getSession, useSession } from 'next-auth/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {

  const {data: session} = useSession({ required: true, onUnauthenticated() { redirect('/login') } });
  const [mentors, setMentors] = useState({})

  useEffect(() => {
    (
      async () => {
        const res = await fetch('http://localhost:5000/api/mentor/getMentors', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          }
        });

        const response = await res.json();
        setMentors({ ...response.Mentors });
      }
    )()
  }, [])

  console.log(mentors)

  return (
    <div>
      <div className="bg-white py-4">
        <div className="mx-auto grid max-w-7xl gap-x-3 gap-y-8 px-6 lg:px-8 xl:grid-rows-3 justify-center items-center">

          <div className="w-full">
            <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900">Meet our Mentors</h2>
            <p className="mt-6 text-center text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
          </div>

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3">

            {Object.keys(mentors).map((index, value) => {
              return (
                <div className="flex flex-col justify-start items-center gap-x-6 border-2 border-gray-200 p-4 rounded-md">
                  <div className='flex justify-center items-center gap-x-6'>
                    <img className="h-14 w-14 rounded-full" src={`${mentors[index].image}`} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{mentors[index].name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{mentors[index].expertise}</p>
                    </div>
                  </div>
                  <div>
                    <Link href={`https://calendar.google.com/calendar/u/0?cid=N2MzOGYwNGFmNjk5MzAyMTM1OGFkNjUxODU1ZWMzYzRjYTIxYjRiYTdjNDEyODdkOGQ3ZDQzY2JjNmUzOTcwN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t`} className="text-sm font-semibold leading-6 text-indigo-600 mt-3 text-start inline-flex items-center">Schedule Meeting <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 " viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg></Link>
                  </div>
                </div>
              )
            })}



          </div>
        </div>
      </div>

    </div>
  )
}

export default page

export const getServerSideProps = async (context) => {
	const session = getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: '/login'
			}
		}
	} else {
		return {
			props: {
				session: session
			}
		}
	}
}
