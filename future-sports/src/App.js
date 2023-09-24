import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Navigation/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Search />
      <div className="container">
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;