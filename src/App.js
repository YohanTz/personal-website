import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Views/About';
import Resume from './Views/Resume';

const App = () => {
  return (
    <div className="w-10/12 m-auto relative min-h-screen pb-3">
      <Router>
        <Header />
        <div className="">
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;