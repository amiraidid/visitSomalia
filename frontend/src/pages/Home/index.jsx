import React from 'react'
import Header from '../../components/Header'
import Hero from './Hero'
import About from './About'
import Destinations from './Destinations'
import TravelTips from './TravelTips'
import FAQ from './FAQ'
function Home() {

    return (
        <section className="home">
            <Header />
            <Hero />
            <About />
            <Destinations />
            <TravelTips />
            <FAQ />
        </section>
    )
}

export default Home