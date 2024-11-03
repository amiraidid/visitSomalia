import React from 'react'

function About() {


    return (
        <div className='overflow-hidden ' id='about'>
            <div className='m-8 text-black'>
                <h1 className='text-3xl font-bold text-blue-400 text-center'>//ABOUT SOMALIA</h1>
                <h1 className='text-2xl font-medium text-center my-4'>A Land of Rich History and Stunning Landscapes</h1>
                <div className='flex max-sm:flex-wrap justify-between items-center gap-2 '>
                    <div className='block text-center w-[740px] mx-auto'>
                        <p className='text-xl max-sm:w-full max-sm:text-sm'>Somalia, located in the Horn of Africa, is a country with a rich cultural heritage and diverse natural beauty. From the bustling streets of Mogadishu to the serene beaches of the Indian Ocean, Somalia offers a unique travel experience. Despite its challenging past, Somalia is home to resilient and welcoming people, ready to share their stories and traditions with visitors.</p>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm my-4 px-8 py-2 "><a href="https://en.wikipedia.org/wiki/Somalia" target='_blank'>See More</a></button>
                    </div>
                    {/* <video src="./somalia.mp4" autoPlay controls muted className='w-fit h-64'></video> */}
                </div>
            </div>
        </div>
    )
}

export default About

