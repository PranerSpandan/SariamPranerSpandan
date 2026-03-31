import React from 'react'
import NavigationBar from './Components/NavigationBar'
import WorkSlideShow from './Components/WorkSlideShow'
import Kards from './Components/Kards'
import AboutSection from './Components/AboutSection'
import BottomBar from './Components/BottomBar'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <WorkSlideShow/>
      <AboutSection/>
      <Kards/>
      <BottomBar/>
    </div>
  )
}

export default App
