import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Views/About';
import Resume from './Views/Resume';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="p-10">
          <Switch>
            <Route exact path="/">
              <About/>
            </Route>
            <Route exact path="/resume">
              <Resume/>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
