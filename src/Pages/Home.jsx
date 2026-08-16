import React from 'react'
import WorkSlideShow from '../Components/WorkSlideShow'
import AboutSection from '../Components/AboutSection'
import ImpactSection from '../Components/ImpactSection'
import Gallery from '../Components/Gallery'
import Kards from '../Components/Kards'
import NewsletterSection from '../Components/NewsletterSection'

const Home = () => {
    return (
        <main>
            <WorkSlideShow />
            <AboutSection />
            <ImpactSection />
            <Kards />
            <Gallery isHomePage={true} />
            <NewsletterSection />
        </main>
    )
}

export default Home
