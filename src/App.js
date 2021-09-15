import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from './pages/Gallery';
import  Contact  from "./pages/Contact";
import  About  from "./pages/About";
import Home from './pages/Home';



export default function Routes() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}






