"use client";
import GetToken from "@/utils/GetToken";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Link from 'next/link';

export default function Home() {
	const { data: session } = useSession({ required: true, onUnauthenticated() { redirect('/login') } });

	console.log(session);

	return (
		<main className="bg-white ">


			<div class="relative px-6 lg:px-8">
				<div class="relative  px-6 lg:px-8">
					<div class="relative px-6 lg:px-8">
						<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
							<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
						</div>
						<div class="mx-auto max-w-2xl py-32 sm:py-30">
							<div class="hidden sm:mb-8 sm:flex sm:justify-center">
								<div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
									Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
								</div>
							</div>
							<div class="text-center">
								<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">“The best way to predict the future is to create it.”</h1>
								{/* <p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p> */}
								<div class="mt-10 flex items-center justify-center gap-x-6">
									<a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
									{/* <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a> */}
								</div>
							</div>
						</div>
						<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
							<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
						</div>
					</div>
				</div>
			</div>

			<section class="text-gray-600 body-font">
				<div class="container px-10 py-24 mx-auto">
					<div class="flex flex-wrap -m-4">
						<div class="p-4 md:w-1/3">
							<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
								<img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
									<div class="p-6">
										<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
										<h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
										<p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
										<div class="flex items-center flex-wrap ">
											<a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
												<svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path d="M5 12h14"></path>
													<path d="M12 5l7 7-7 7"></path>
												</svg>
											</a>
											<span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
												<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
													<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
													<circle cx="12" cy="12" r="3"></circle>
												</svg>1.2K
											</span>
											<span class="text-gray-400 inline-flex items-center leading-none text-sm">
												<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>6
											</span>
										</div>
									</div>
							</div>
						</div>
						<div class="p-4 md:w-1/3">
							<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
								<img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/>
									<div class="p-6">
										<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
										<h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
										<p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
										<div class="flex items-center flex-wrap">
											<a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
												<svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path d="M5 12h14"></path>
													<path d="M12 5l7 7-7 7"></path>
												</svg>
											</a>
											<span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
												<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
													<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
													<circle cx="12" cy="12" r="3"></circle>
												</svg>1.2K
											</span>
											<span class="text-gray-400 inline-flex items-center leading-none text-sm">
												<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>6
											</span>
										</div>
									</div>
							</div>
						</div>
						<div class="p-4 md:w-1/3">
							<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
								<img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog"/>
									<div class="p-6">
										<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
										<h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
										<p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
										<div class="flex items-center flex-wrap ">
											<a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
												<svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path d="M5 12h14"></path>
													<path d="M12 5l7 7-7 7"></path>
												</svg>
											</a>
											<span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
												<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
													<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
													<circle cx="12" cy="12" r="3"></circle>
												</svg>1.2K
											</span>
											<span class="text-gray-400 inline-flex items-center leading-none text-sm">
												<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>6
											</span>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>

	)
}


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
