import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar'
import BottomBar from './Components/BottomBar'
import BackToTop from './Components/BackToTop'

// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Work from './Pages/Work'
import Join from './Pages/Join'
import Contact from './Pages/Contact'
import Support from './Pages/Support'

// Helper to scroll to top automatically when navigating between pages
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        
        <BottomBar/>
        <BackToTop/>
      </div>
    </Router>
  )
}

export default App
