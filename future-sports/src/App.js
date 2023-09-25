// Import Navigation, Header, Main, Aside, and Footer components
import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";

// Define the App component
function App() {
  // Render the App component
  return (
    <div className="App">
      <Header /> {/* Include Header component */}
      <Navigation /> {/* Include Navigation component */}
      <div className="container"> {/* Container for Main and Aside components */}
        <Main /> {/* Include Main component */} 
        <Aside /> {/* Include Aside component */}
      </div>
      <Footer /> {/* Include Footer component */}
    </div>
  );
}

// Export the App component
export default App;