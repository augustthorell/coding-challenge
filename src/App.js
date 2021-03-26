import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/*** Components ***/
import Footer from './components/footer'
import Header from './components/header'

/*** Pages ***/
import Home from './pages/home'
import About from './pages/about'
import Career from './pages/career'
import Partners from './pages/partners'

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />
          <Route path="/partners" component={Partners} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
