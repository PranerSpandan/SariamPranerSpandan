import React from 'react'
import NavigationBar from './Components/NavigationBar'
import WorkSlideShow from './Components/WorkSlideShow'
import Kards from './Components/Kards'
import BottomBar from './Components/BottomBar'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <WorkSlideShow/>
      <Kards/>
      <BottomBar/>
    </div>
  )
}

export default App
