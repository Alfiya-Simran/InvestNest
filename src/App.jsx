// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Startups from "./pages/Startups.jsx";
import Investors from "./pages/Investors.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
