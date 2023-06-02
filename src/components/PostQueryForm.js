"use client"
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const PostQueryForm = ({ setShowPostQueryForm }) => {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login')
        }
    });


    const [formData, setFormData] = useState({
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        queryTitle: "",
        queryDescription: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        const res = await fetch(`http://localhost:5000/api/community/postQuery`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email: formData.email, queryTitle: formData.queryTitle, queryDescription: formData.queryDescription })
        });

        const response = await res.json();
        setTimeout(() => {
            setShowPostQueryForm(false);
        }, 1000);
    }

    return (
        <div
            class="border-b border-gray-900 pb-12 flex justify-center items-center fixed mt-10 sm:mt-0 z-50 top-0 right-[50%] left-[50%] overflow-x-hidden overflow-y-hidden md:inset-0 h-full bg-opacity-50 bg-gray-300 ">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }} className='bg-white mt-2 px-6 py-6 rounded-md'>

                <h2 class="text-base font-semibold leading-7 text-gray-900">Post Query</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">post query so that you can get your problems solved.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label htmlFor="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div class="mt-2">
                            <input type="text" name="name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 ring-1 ring-gray-300  py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 px-2 disabled:text-gray-400 disabled:cursor-not-allowed" disabled={session} value={session?.user?.name || formData.name} onChange={handleChange} />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label htmlFor="tag" class="block text-sm font-medium leading-6 text-gray-900">Expertise</label>
                        <div class="mt-2">
                            <input type="text" name="taf" id="tag" autocomplete="family-name" class="block w-full rounded-md border-0 ring-1 ring-gray-300  py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 px-2" />
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label htmlFor="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 ring-1 ring-gray-300  py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 px-2 disabled:text-gray-400 disabled:cursor-not-allowed" disabled={session} value={session?.user?.email || formData.email} onChange={handleChange} />
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label htmlFor="queryTitle" class="block text-sm font-medium leading-6 text-gray-900">Query Title</label>
                        <div class="mt-2">
                            <input type="text" name="queryTitle" id="queryTitle" autocomplete="street-address" class="block w-full rounded-md border-0 ring-1 ring-gray-300  py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 px-2" value={formData.queryTitle} onChange={handleChange} />
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label htmlFor="queryDescription" class="block text-sm font-medium leading-6 text-gray-900">Query Description</label>
                        <div class="mt-2">
                            <textarea type="text" name="queryDescription" id="queryDescription" autocomplete="queryDescription" class="block w-full rounded-md border-0 ring-1 ring-gray-300  py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 px-2" rows={3} cols={10} value={formData.queryDescription} onChange={handleChange} />
                        </div>
                    </div>





                </div>

                <div className='mt-8 '>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSubmit}>Post Query</button>

                    <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-red-600 focus:outline-none bg-white rounded-lg border border-red-500 hover:bg-gray-50 hover:text-red-700 " onClick={() => setShowPostQueryForm(false)}>Close</button>
                </div>
            </motion.div>
        </div>
    )
}

export default PostQueryForm