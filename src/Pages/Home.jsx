import React from 'react'
import WorkSlideShow from '../Components/WorkSlideShow'
import AboutSection from '../Components/AboutSection'
import Gallery from '../Components/Gallery'
import Kards from '../Components/Kards'

const Home = () => {
    return (
        <main>
            <WorkSlideShow />
            <AboutSection />
            <Gallery isHomePage={true} />
            <Kards />
        </main>
    )
}

export default Home
