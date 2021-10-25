import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Createpost from "./Component/Createpost";
import Blog from "./Component/Blog";
import Blogdetails from "./Component/Blogdetails";

import {
  BrowserRouter as Router, 
  Route,Switch,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
     
      <Switch>
        
        <Route exact path="/"><Home/></Route>
        <Route  path="/createpost"><Createpost/></Route>
        <Route  path="/blog"><Blog/></Route>
        <Route  path="/blogdetails"><Blogdetails/></Route>
      </Switch>
      <Footer/>
      </Router>
      <a href="#top" className="Scrolltop"><i className="icofont-arrow-up"></i></a>

    </div>
  );
}

export default App;
