

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export class App extends Component {
  // static propTypes = {

  // }
 
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <h1 className="text-center">Top Headlines</h1>
        <Routes>
        <Route exact path="/" element={<><News key="/" pageSize={10} country={"in"} category={"technology"} /></>} /> 
        <Route exact path="/business" element={<><News key="business" pageSize={10} country={"in"} category={"business"} /></>} /> 
        <Route exact path="/entertainment"  element={<><News key="entertainment" pageSize={10} country={"in"} category={"entertainment"} /></>} /> 
        <Route exact path="/general"  element={<><News key="general" pageSize={10} country={"in"} category={"general"} /></>} /> 
        <Route exact path="/health"  element={<><News key="health" pageSize={10} country={"in"} category={"health"} /></>} /> 
        <Route exact path="/science"  element={<><News key="science" pageSize={10} country={"in"} category={"science"} /></>} /> 
        <Route exact path="/sports"  element={<><News key="sports" pageSize={10} country={"in"} category={"sports"} /></>} /> 
        <Route exact path="/technology"  element={<><News key="technology" pageSize={10} country={"in"} category={"technology"} /></>} /> 
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App;