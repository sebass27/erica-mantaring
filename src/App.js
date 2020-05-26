import React from 'react';
import logo from './logo.svg';
import Layout from './components/Layout'
import About from './components/About'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || ''}>
      <Layout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
