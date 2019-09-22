import React, { FC } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import DrawerContainer from './components/nav-bar/DrawerContainer'
import NavBar from './components/nav-bar/NavBar'
import Cv from './components/route-cv/Cv'

const Test: FC = () => <h1>Test 1 Component</h1>
const Home: FC = () => <h1>Home Component</h1>
const Apps: FC = () => <h1>Apps Component</h1>
const Contact: FC = () => <h1>ComponentComponent</h1>

const App: FC = () => (
  <Router>
    <NavBar />
    <DrawerContainer>
      <Route path="/" exact={true} component={Cv} />
      <Route path="/test" component={Test} />
      <Route path="/home" component={Home} />
      <Route path="/apps" component={Apps} />
      <Route path="/contact" component={Contact} />
    </DrawerContainer>
  </Router>
)
export default App


/* <div>
  <Link to="/"> CV</Link> |
<Link to="/test"> Test</Link> |
<Link to="/home"> Home</Link> |
<Link to="/apps"> Apps </Link> |
<Link to="/contact"> Contact</Link> |
</div>
<ToggleDir /> */