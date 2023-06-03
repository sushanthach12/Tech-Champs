"use client";

import PostQueryForm from '@/components/PostQueryForm'
import React, { useEffect, useState } from 'react'
import { BiPlus } from "react-icons/bi"

const page = () => {
    const [allQueryPosts, setAllQueryPosts] = useState({})
    
    const [showPostQueryForm, setShowPostQueryForm] = useState(false)
    useEffect(() => {
        (
            async () => {
                const res = await fetch(`http://localhost:5000/api/community/getAllQuery`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    }
                });

                const response = await res.json();

                await setAllQueryPosts({ ...response.Query })
            }
        )()
    }, [showPostQueryForm])

    console.log(allQueryPosts)


    const [showCategory, setShowCategory] = useState(false)
    const [showTags, setShowTags] = useState(false)


    return (
        <div className='my-4 mx-24 py-4'>

            <div className="mb-4 border-b mx-12 border-gray-300 flex justify-between items-center">
                <ul className="flex flex-wrap justify-start items-center -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li className="mr-2" role="presentation">
                        <div className="relative inline-block text-left">
                            <div>
                                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => { setShowCategory(!showCategory); if (showTags) { setShowTags(!showTags) } }}>
                                    All Categories
                                    <svg className="-mr-1 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {showCategory && <div className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div className="py-1" role="none">
                                    <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                    <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                    <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>

                                </div>
                            </div>}
                        </div>
                    </li>

                    <li className="mr-2" role="presentation">
                        <div className="relative inline-block text-left">
                            <div>
                                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => { setShowTags(!showTags); if (showCategory) { setShowCategory(!showCategory) } }}>
                                    Tags
                                    <svg className="-mr-1 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {showTags && <div className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div className="py-1" role="none">
                                    <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                    <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                    <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>

                                </div>
                            </div>}
                        </div>
                    </li>

                    <li className="mr-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg text-gray-500 hover:border-orange-300" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Profile</button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg text-gray-500 hover:border-orange-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg text-gray-500 hover:border-orange-300 " id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
                    </li>
                    <li role="presentation">
                        <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg text-gray-500  hover:border-orange-300 " id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
                    </li>
                </ul>
                <div>
                    <button type="button" className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-green-500 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setShowPostQueryForm(!showPostQueryForm)}>
                        <BiPlus />
                        Post New Query
                    </button>
                </div>
            </div>

            <div className='container mx-auto px-12 py-10 flex flex-col gap-y-4 '>
                {Object.keys(allQueryPosts).map((index, value) => {
                    return (
                        <div className="flex flex-wrap  border" key={index}>
                            <div className="p-6 w-full flex flex-col items-start">
                                <div className="inline-flex items-center">
                                    <img alt="blog" src="https://dummyimage.com/90x90" className="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">{allQueryPosts[index].user.name}</span>
                                        <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                    </span>
                                </div>
                                <h2 className="text-lg title-font font-medium text-gray-900 mt-4 mb-4">{allQueryPosts[index].queryTitle}</h2>
                                <p className="leading-relaxed mb-8 text-sm">{allQueryPosts[index].queryDescription}</p>
                                <div className="flex items-center flex-wrap   mt-auto w-full">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-xs pr-3 py-1 border-r-2 border-gray-200">
                                        {new Date(allQueryPosts[index].createdAt).toLocaleString('en-GB', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                                    </span>
                                    <div className="text-indigo-500 inline-flex items-center text-sm">
                                        Reply
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}



            </div>

            {showPostQueryForm && <PostQueryForm setShowPostQueryForm={setShowPostQueryForm} />}
        </div>
    )
}

export default page;

