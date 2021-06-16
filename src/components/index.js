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
                       <p className="uppercase text-white font-bold text-xl sm:text-2xl">Logo</p>
                       <div className="flex items-center space-x-2 sm:space-x-4">
                            <button className="bg-white rounded-full px-4  py-2 sm:px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <p className=" text-sm text-gray-800 font-semibold">Add Your Space</p>
                            </button>
                            <img className="rounded-full w-10 h-10" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="Display avatar" />
                       </div>
                    </div>

                    <div className="mt-8 sm:mt-16 lg:mt-32">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-white font-semibold font-serif leading-tight sm:w-9/12 lg:w-7/12">Find out <span className="border-b-4 sm:border-b-8 border-red-400 font">anykind of space</span> for rent</h1>
                        <p className="mt-5 lg:mt-10 text-white text-sm sm:text-lg sm:w-8/12 lg:w-7/12 xl:w-6/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt hendrerit sapien, eget blandit eros ullamcorper quis. Nam condimentum libero ut justo rutrum, at laoreet felis scelerisque.</p>
                    </div>
                    <div className="mt-10 bg-white rounded sm:rounded-full flex flex-col sm:flex-row sm:items-center justify-between p-4 lg:w-9/12">
                        <div className="sm:pl-8">
                            <h2 className="text-sm font-bold text-red-400">Location</h2>
                            <input className="text-sm text-gray-600 focus:outline-none " type="text" placeholder="Find your home office" />
                        </div>
                        <div className="flex flex-col  sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0">
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
                            <button className="bg-gray-800 text-white text-lg  rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-900">
                                Explore
                            </button>
                        </div>
                    </div>

               </div>
            </div>
            <div className="mt-10 sm:mt-20 px-5 md:px-10 lg:px-0 lg:pl-10">
                <CarouselImages />
            </div>
            <div className="mt-8 sm:mt-20 mx-6 flex flex-col items-center justify-center">
                <div className="sm:text-center flex flex-col items-center">
                    <h1 className="text-2xl text-gray-800 font-semibold font-serif">Discover Different Type Of Properties For Rent </h1>
                    <p className="mt-2 font-base text-gray-600 lg:w-6/12 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt hendrerit sapien, eget blandit eros ullamcorper quis. eget blandit eros ullamcorper.</p>
                </div>
                <div className="mt-8">
                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 ">
                        <div className="md:w-3/5 h-56 relative cursor-pointer" >
                            <img className="w-full h-full rounded-lg object-center object-cover" src="https://www.whitworthpestsolutions.com/wp-content/uploads/2019/04/insect-free-backyard-party_whitworth.jpg" alt="A decorated table" />
                            <div className="absolute bottom-0 pl-6 pb-5">
                                <h3 className="text-lg text-white font-semibold">Backyards</h3>
                                <p className="text-base text-gray-300 ">56 Places In Your City</p>
                            </div>
                        </div>
                        <div className="md:w-2/5 h-56 relative cursor-pointer">
                            <img className="w-full h-full object-center object-cover rounded-lg" src="https://cdn.homedit.com/wp-content/uploads/2016/07/Italy-backyard-house-with-pool.jpg" alt="a backyard pool" />
                            <div className="absolute bottom-0 pl-6 pb-5">
                                <h3 className="text-lg text-white font-semibold">Pools</h3>
                                <p className="text-base text-gray-300 ">56 Places In Your City</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row  mt-6 space-y-6 md:space-y-0 md:space-x-6">
                        <div className="md:w-8/12 h-72 relative cursor-pointer">
                            <img className="w-full h-full object-center object-cover rounded-lg" src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/247262306.jpg?k=d0a11e510577c381ae373e0f58bc55d1bfe73ddaab898cb323fdb66909157c3c&o=" alt="A house garden" />
                            <div className="absolute bottom-0 pl-6 pb-5">
                                <h3 className="text-lg text-white font-semibold">Gardens</h3>
                                <p className="text-base text-gray-300 ">56 Places In Your City</p>
                            </div>
                        </div>
                        <div className="md:w-4/12 h-72 relative cursor-pointer">
                            <img className="w-full h-full object-center object-cover rounded-lg" src="https://cdn.hipwallpaper.com/i/57/83/OMprw1.jpg" alt="A barbeque grill" />
                            <div className="absolute bottom-0 pl-6 pb-5">
                                <h3 className="text-lg text-white font-semibold">Barbeque</h3>
                                <p className="text-base text-gray-300 ">56 Places In Your City</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            <div className="mt-10 sm:mt-20 mx-5 md:mx-10 flex flex-col md:flex-row  md:space-y-0  md:space-x-4 ">
                <div className="md:w-6/12 flex flex-col lg:flex-row lg:items-strech ">
                    <img className="" src="https://st4.depositphotos.com/20363444/38373/i/600/depositphotos_383739412-stock-photo-young-happy-couple-home-air.jpg" alt="A couple in a new house" />
                    <div className=" flex items-end justify-center mx-auto -mt-28 lg:-mt-0 lg:mx-0  lg:-ml-24 mb-20 ">
                        <img className="object-left w-40 sm:w-56 h-48 sm:h-72 shadow" src="https://p.kindpng.com/picc/s/494-4949497_house-keys-png-house-key-in-hand-transparent.png" alt="new home keys" />
                    </div>
                </div>
                <div className="md:w-6/12 flex flex-col lg:justify-center">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-gray-800">Rent out different places of your house,</h2>
                    <p  className="md:w-10/12 text-base lg:text-lg text-gray-600 mt-4" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div>
                    <button className="bg-gray-800 rounded py-4 px-10 mt-10 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-900">Join Now!</button>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="bg-gray-800 mt-10 lg:mt-20 px-6 md:px-20 py-10">
               <div>
                   <div className="flex flex-col space-y-4 md:space-y-0  md:flex-row md:items-center w-full">
                        <div className="md:w-1/2">
                            <h3 className="text-white font-bold text-xl uppercase">Logo</h3>
                            <p className="text-white text-base mt-8 md:w-8/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        </div>
                        <div className="md:w-1/4">
                            <h3 className="text-lg font-bold text-white">Explore</h3>
                            <hr className="w-12 h-0.5 mt-2 bg-white" />
                            <div className="flex flex-col space-y-2 mt-2">
                                <a href="javascript:void(0)" className="hover:underline focus:outline-none focus:underline text-white text-sm">Top Picks</a>
                                <a href="javascript:void(0)" className="hover:underline focus:outline-none focus:underline text-white text-sm">What We Offer</a>
                                <a href="javascript:void(0)" className="hover:underline focus:outline-none focus:underline text-white text-sm">List Your Space </a>
                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <h3 className="text-lg font-bold text-white">Contact Us</h3>
                            <hr className="w-12 h-0.5 mt-2 bg-white" />
                            <div className="flex flex-col space-y-2 mt-2">
                            <p className="text-sm text-white leading-tight">497 Evergreen Rd. Roseville, CA 95673</p>
                            <p className="text-sm text-white leading-tight">+44 345 678 903</p>
                            <p className="text-sm text-white leading-tight">adobexd@gmail.com</p>
                            </div>
                        </div>
                   </div>
                   <div className="mt-10 flex flex-col md:flex-row items-strech space-y-2 md:space-y-0 md:space-x-2">
                        <div className="flex items-center text-lg text-white font-bold md:border-r-2 md:pr-4">Disclaimer</div>
                        <div className="text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                   </div>
                   <div className="mt-10 flex justify-center">
                        <p className="text-xs text-white">&#169; Copyright Company Name 2021</p>
                   </div>
               </div>
            </div>
        </div>
    );
}

export default MyApp;
