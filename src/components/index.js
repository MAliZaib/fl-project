import React from "react";
import CarouselImages from "./Carousel" ;
function MyApp() {
    return (
        <div className="container mx-auto pb-10">
            <div className="relative">
               <div>
                   <img className="w-full object-cover object-center" style={{height: "700px"}}  src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y291bnRyeSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="A Beautiful house" />
               </div>
               <div className="absolute inset-0 bg-gray-800 bg-opacity-70 py-10 px-6 md:px-10 lg:px-20">
                    <div className="flex items-center justify-between" >
                       <p className="uppercase text-white font-bold text-2xl">Logo</p>
                       <div className="flex items-center space-x-4">
                            <div className="bg-white rounded-full py-2 px-6">
                                <p className="text-sm text-gray-800 font-semibold">Add Your Space</p>
                            </div>
                            <img className="rounded-full w-10 h-10" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="Display avatar" />
                       </div>
                    </div>

                    <div className="mt-32">
                        <h1 className="text-4xl xl:text-5xl text-white font-semibold font-serif leading-tight w-9/12 lg:w-7/12">Find out <span className="border-b-8 border-red-400 font">anykind of space</span> for rent</h1>
                        <p className="mt-10 text-white text-lg w-8/12 lg:w-7/12 xl:w-6/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt hendrerit sapien, eget blandit eros ullamcorper quis. Nam condimentum libero ut justo rutrum, at laoreet felis scelerisque.</p>
                    </div>
                    <div className="mt-10 bg-white rounded-full flex items-center justify-between p-4 w-9/12">
                        <div className="pl-8">
                            <h2 className="text-sm font-bold text-red-400">Location</h2>
                            <input className="text-sm text-gray-600 focus:outline-none " type="text" placeholder="Find your home office" />
                        </div>
                        <div className="flex space-x-8">
                            <div className="border-l border-gray-300 pl-2">
                                <div className="flex items-center">
                                    <h2 className="text-red-400 text-sm font-bold" >Type</h2>
                                    <div className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down text-red-400 border-none" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>    
                                </div>
                                <p className="text-sm font-semibold text-gray-800">Backyard</p> 
                            </div>
                            <div className="border-l border-gray-300 pl-2">
                                <div className="flex items-center">
                                    <h2 className="text-red-400 text-sm font-bold" >Date</h2>
                                    <div className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down text-red-400 border-none" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>    
                                </div>
                                <p className="text-sm font-semibold text-gray-800">22 Mar - 23 Mar</p> 
                            </div>
                            <button className="bg-gray-800 text-white text-lg  rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                Explore
                            </button>
                        </div>
                    </div>

               </div>
            </div>
            {/* Insert Carousel here */}
            <div className="mt-20 mx-6 flex flex-col items-center justify-center">
                <div className="text-center flex flex-col items-center">
                    <h1 className="text-2xl text-gray-800 font-semibold font-serif">Discover Different Type Of Properties For Rent </h1>
                    <p className="mt-2 font-base text-gray-600 w-6/12 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt hendrerit sapien, eget blandit eros ullamcorper quis. eget blandit eros ullamcorper.</p>
                </div>
                <div className="mt-8">
                    <div className="flex space-x-6 ">
                        <div className="w-3/5 h-56 relative cursor-pointer" >
                            <img className="w-full h-full rounded-lg object-center object-cover" src="https://www.whitworthpestsolutions.com/wp-content/uploads/2019/04/insect-free-backyard-party_whitworth.jpg" alt="A decorated table" />
                            <div className="absolute bottom-0 pl-6 pb-5">
                                <h3 className="text-lg text-white font-semibold">Backyards</h3>
                                <p className="text-base text-gray-300 ">56 Places In Your City</p>
                            </div>
                        </div>
                        <div className="w-2/5 h-56 relative cursor-pointer">
                            <img className="w-full h-full object-center object-cover rounded-lg" src="https://cdn.homedit.com/wp-content/uploads/2016/07/Italy-backyard-house-with-pool.jpg" alt="a backyard pool" />
                            <div className="absolute bottom-0 pl-6 pb-5">
                                <h3 className="text-lg text-white font-semibold">Pools</h3>
                                <p className="text-base text-gray-300 ">56 Places In Your City</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-6 space-x-6">
                        <div className="w-8/12 h-72 relative cursor-pointer">
                            <img className="w-full h-full object-center object-cover rounded-lg" src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/247262306.jpg?k=d0a11e510577c381ae373e0f58bc55d1bfe73ddaab898cb323fdb66909157c3c&o=" alt="A house garden" />
                            <div className="absolute bottom-0 pl-6 pb-5">
                                <h3 className="text-lg text-white font-semibold">Gardens</h3>
                                <p className="text-base text-gray-300 ">56 Places In Your City</p>
                            </div>
                        </div>
                        <div className="w-4/12 h-72 relative cursor-pointer">
                            <img className="w-full h-full object-center object-cover rounded-lg" src="https://cdn.hipwallpaper.com/i/57/83/OMprw1.jpg" alt="A barbeque grill" />
                            <div className="absolute bottom-0 pl-6 pb-5">
                                <h3 className="text-lg text-white font-semibold">Barbeque</h3>
                                <p className="text-base text-gray-300 ">56 Places In Your City</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default MyApp;
