"use client";
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
    const params = useParams();
    const { slug } = params;
    console.log(slug)
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
                setMentors(response.Mentors);
            }
        )()
    }, [])

    console.log(mentors)


    return (
        <div className='mx-auto flex flex-col justify-center items-center my-6 py-6'>
            <div className="max-w-2xl">
                <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900 ">Schedule your meeting</h2>
                <p className="mt-4 tex-xs text-center leading-5 text-gray-600">schedule your interaction with mentor and have a path for your ideas.</p>
            </div>


            <div className='flex mt-10'>
                <div class="p-4 w-full">
                    <div class="w-full h-full flex items-center border-gray-200 border p-6 rounded-lg">
                        <img alt="team" class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-8" src="https://dummyimage.com/80x80" />
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                            <p class="text-gray-500">UI Designer</p>
                            <p class="text-gray-500">UI Designer</p>
                            <p class="text-gray-500">UI Designer</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=Y29kaW5nZHJpdmUxMkBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=N2MzOGYwNGFmNjk5MzAyMTM1OGFkNjUxODU1ZWMzYzRjYTIxYjRiYTdjNDEyODdkOGQ3ZDQzY2JjNmUzOTcwN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YTQwNDI3ODJkY2YwMGM4NmViZDVmNzg1YjZlNzU4NzBmZmZmMzVjZGI3Yjg2NjQ0ZGRkNmJjNjFjNGNjZmNlNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ODQxNzcwMzYxYzk0YjczZjFhOTJlM2U2MDY4YmY4OTA4NDExOWNjZTViM2MyNWY2NmE1NDAwNTEzZWU2NzkzZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAwMjUxMDkwNzg3OTk5NDQ0MjE0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%23616161&color=%23D50000&color=%23B39DDB&color=%23137333&color=%230B8043"  width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
            <Link href='https://calendar.google.com/calendar/u/0?cid=N2MzOGYwNGFmNjk5MzAyMTM1OGFkNjUxODU1ZWMzYzRjYTIxYjRiYTdjNDEyODdkOGQ3ZDQzY2JjNmUzOTcwN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t'><button type="button" className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm '>Schedule a Meeting</button></Link>
        </div>
    )
}

export default page