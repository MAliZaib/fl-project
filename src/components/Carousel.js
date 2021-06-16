import React from 'react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Carousel() {
   
    
    return (
        <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2}>
            <div class="flex items-center justify-center w-full h-full">
                <div class="w-full relative flex items-center justify-center">
                    <ButtonBack aria-label="slide backward" class="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left ring-4 ring-white p-0.5 rounded-full" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </ButtonBack>
                    <div class="w-full h-full mx-auto overflow-x-hidden">
                        <Slider>
                            <Slide>
                                <div class="h-full flex items-center space-x-4 lg:space-x-6">
                                    <div class="flex flex-shrink-0 lg:w-1/4 md:w-1/2 w-full relative">
                                        <img src="https://www.mediastorehouse.com/p/251/manhattan-new-york-city-usa-aerial-view-19938759.jpg" alt="black chair and white table" class=" w-full h-full rounded-lg" />
                                        <div className="absolute inset-0 z-10 pt-4 pl-4">
                                            <h3 className=" text-white text-2xl font-medium">Newyork</h3>
                                            <p className="text-xl text-gray-300 font-medium">56 Places</p>
                                        </div>
                                    </div>
                                    <div class="hidden md:flex flex-shrink-0 lg:w-1/4 md:w-1/2 w-full relative">
                                        <img src="https://st4.depositphotos.com/2435561/27875/i/450/depositphotos_278754190-stock-photo-sunset-over-the-hollywood-hills.jpg" alt="black chair and white table" class=" w-full rounded-lg" />
                                        <div className="absolute inset-0 z-10 pt-4 pl-4">
                                            <h3 className=" text-white text-2xl font-medium">Los Angeles</h3>
                                            <p className="text-xl text-gray-300 font-medium">56 Places</p>
                                        </div>
                                    </div>
                                    <div class="hidden lg:flex flex-shrink-0 lg:w-1/4 md:w-1/2 w-full relative ">
                                        <img src="https://data.whicdn.com/images/137450857/original.jpg" alt="black chair and white table" class=" w-full rounded-lg" />
                                        <div className="absolute inset-0 z-10 pt-4 pl-4">
                                            <h3 className=" text-white text-2xl font-medium">New Haven</h3>
                                            <p className="text-xl text-gray-300 font-medium">56 Places</p>
                                        </div>
                                    </div>
                                    <div class="hidden lg:flex flex-shrink-0 lg:w-1/4 md:w-1/2 w-full relative">
                                        <img src="https://st2.depositphotos.com/3864575/5987/i/600/depositphotos_59874933-stock-photo-buildings-in-downtown-houston-texas.jpg" alt="black chair and white table" class=" w-full rounded-lg" />
                                        <div className="absolute inset-0 z-10 pt-4 pl-4">
                                            <h3 className=" text-white text-2xl font-medium">Houston</h3>
                                            <p className="text-xl text-gray-300 font-medium">56 Places</p>
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide>
                                <div class="h-full flex  items-center space-x-4 lg:space-x-6">
                                    <div class="flex flex-shrink-0 lg:w-1/4 md:w-1/2 w-full relative">
                                        <img src="https://st2.depositphotos.com/3864575/5987/i/600/depositphotos_59874933-stock-photo-buildings-in-downtown-houston-texas.jpg" alt="black chair and white table" class=" w-full rounded-lg" />
                                        <div className="absolute inset-0 z-10 pt-4 pl-4">
                                            <h3 className=" text-white text-2xl font-medium">Houston</h3>
                                            <p className="text-xl text-gray-300 font-medium">56 Places</p>
                                        </div>
                                    </div>
                                    <div class="hidden md:flex flex-shrink-0 lg:w-1/4 md:w-1/2 w-full relative">
                                        <img src="https://qph.fs.quoracdn.net/main-qimg-01f700c6285ed35648a0811a411160ea" alt="black chair and white table" class=" w-full rounded-lg" />
                                        <div className="absolute inset-0 z-10 pt-4 pl-4">
                                            <h3 className=" text-white text-2xl font-medium">Detroit</h3>
                                            <p className="text-xl text-gray-300 font-medium">56 Places</p>
                                        </div>
                                    </div>
                                    <div class="hidden lg:flex flex-shrink-0 lg:w-1/4 md:w-1/2 w-full relative">
                                        <img src="https://www.mediastorehouse.com/p/251/manhattan-new-york-city-usa-aerial-view-19938759.jpg" alt="black chair and white table" class=" w-full h-full rounded-lg" />
                                        <div className="absolute inset-0 z-10 pt-4 pl-4">
                                            <h3 className=" text-white text-2xl font-medium">Newyork</h3>
                                            <p className="text-xl text-gray-300 font-medium">56 Places</p>
                                        </div>
                                    </div>
                                   
                                </div>
                            </Slide>
                        </Slider>
                    </div>
                    <ButtonNext aria-label="slide forward" class=" absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right ring-4 ring-white p-0.5 rounded-full" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </ButtonNext>
                </div>
            </div>
        </CarouselProvider>
    );
}

export default Carousel
