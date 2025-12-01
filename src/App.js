import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="min-h-screen">
          <Navbar />

          <div className="p-6">
            <Routes>
              <Route path="/" element={<News/>} />
              <Route path="/page1" element={<h1 className="text-xl">Page 1</h1>} />
              <Route path="/page2" element={<h1 className="text-xl">Page 2</h1>} />
              <Route path="/page3" element={<h1 className="text-xl">Page 3</h1>} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
