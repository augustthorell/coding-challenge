import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

/*** Components ***/
import Footer from './components/footer'
import Header from './components/header'

/*** Pages ***/
import Home from './pages/home'
import About from './pages/about'
import Career from './pages/career'
import Partners from './pages/partners'

function App() {
  const size = useWindowSize();

  return (
    <Router >
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <Header size={size} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />
          <Route path="/partners" component={Partners} />
        </Switch>
        <Footer size={size} />
      </div>
    </Router >
  );
}

export default App

function useWindowSize() {
  const [windowSize, setWindowSize] = useState();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setWindowSize(true)
      } else {
        setWindowSize(false)
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}


