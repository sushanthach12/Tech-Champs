"use client";

import { getSession, signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation"
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link';
import { SignupHandler } from '@/libs/User/AuthContext';

const page = () => {
    const { data: session } = useSession();

    useEffect(() => {
      if(session){
        redirect('/')
      }
    }, [session])
    

    const handleGoogleLogin = async () => {
        const res = await signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_HOST}` })
    }

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        // signIn("credentials-login", { ...credentials, callbackUrl: `${process.env.NEXT_PUBLIC_HOST}`, redirect: true })
        // handleLogin();
        
    }

    return (
        <div className=" bg-white">

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-2 text-center text-sm text-gray-500">
                    <p>not a member? <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2 underline">Signup</Link></p>
                    
                </div>
                <div className="mt-2 text-center text-sm text-gray-500">
                    <p>or <Link href="/login-mentor" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2 underline">Login as mentor</Link></p>
                    
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-3" method="POST" onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 ring-2 ring-gray-300 text-gray-900 shadow-sm px-3 placeholder:text-gray-400  sm:text-sm sm:leading-6" value={credentials.email} onChange={handleChange} />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 ring-2 ring-gray-300 px-3  text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6" value={credentials.password} onChange={handleChange} />
                            </div>
                        </div>

                        <div className='pt-4'>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>

                        </div>
                    </form>

                    <div className='mt-6'>
                        <button type="button" className="flex w-full justify-center rounded-md border-1 bg-white px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm shadow-gray-200 hover:bg-gray-50 items-center gap-2" onClick={handleGoogleLogin}> <FcGoogle size={20} /> Sign in with Google</button>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default page;


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