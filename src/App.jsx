import React from 'react'
import NavigationBar from './Components/NavigationBar'
import WorkSlideShow from './Components/WorkSlideShow'
import Kards from './Components/Kards'
import AboutSection from './Components/AboutSection'
import BottomBar from './Components/BottomBar'
import BackToTop from './Components/BackToTop'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <WorkSlideShow/>
      <AboutSection/>
      <Kards/>
      <BottomBar/>
      <BackToTop/>
    </div>
  )
}

export default App
