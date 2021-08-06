import React, { useEffect } from "react";
import Header from "./Header";
import Yoga from "./Yoga";

import About from "./About";
import Banner from "./Banner";
import Read from "./Read"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/Read">
            <Read />
            </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/yoga">
            <Yoga />
          </Route>

          

          <Route path="/">
            <Banner />
            {/* <Home /> */}
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
export default App;
