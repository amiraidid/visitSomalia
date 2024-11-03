import React from 'react'

function TravelTips() {

    return (
        <section className='overflow-hidden '>
            <h1 className='text-3xl font-bold text-blue-400 m-8'>TRAVEL TIPS</h1>

            <div className='flex flex-col flex-wrap gap-4 m-8'>
                <div className='max-w-full'>
                    <div className='w-[550px] max-sm:w-full  max-sm:float-start float-end shadowed mr-10'> 
                        <h1 className='p-3 font-bold text-2xl text-slate-900'>Safety</h1>
                        <p className='p-3 text-xl max-sm:text-sm text-black'>While Somalia is a beautiful country with much to offer, it is important to stay informed about the current security situation. Travel with a reputable tour operator and follow local guidelines to ensure a safe and enjoyable trip.</p>
                    </div>
                </div>
                <div className='max-w-full'>
                    <div className='w-[550px] max-sm:w-full max-sm:float-start float-start shadowed ml-10 max-sm:ml-0'>
                        <h1 className='p-3 font-bold text-2xl text-slate-900'>Culture and Etiquette</h1>
                        <p className='p-3 text-xl max-sm:text-sm text-black'>Somalia has a rich cultural heritage and it is important to respect local customs and traditions. Dress modestly, ask for permission before taking photographs, and be mindful of local customs and etiquette.</p>
                    </div>
                </div>
                <div className='max-w-full'>
                    <div className='w-[550px] max-sm:w-full max-sm:float-start float-end shadowed mr-10'> 
                        <h1 className='p-3 font-bold text-2xl text-slate-900'>Best Time to Visit</h1>
                        <p className='p-3 text-xl max-sm:text-sm text-black'>The best time to visit Somalia is during the cooler months from November to February. During this time, the weather is more pleasant and suitable for sightseeing and outdoor activities.</p>
                    </div>
                </div>
                <div className='max-w-full'>
                    <div className='w-[550px] max-sm:w-full max-sm:float-start float-start shadowed ml-10 max-sm:ml-0 mb-10'>
                        <h1 className='p-3 font-bold text-2xl text-slate-900'>Visa and Entry Requirements</h1>
                        <p className='p-3 text-xl max-sm:text-sm text-black'>Ensure you have the necessary visas and travel documents before planning your trip. Check with the local embassy or consulate for the most up-to-date information on entry requirements.</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default TravelTips