// Import necessary libraries
import React from "react";
import ArticleSection from "./Article/ArticleSection";
import Photos from "./Photos";
import Video from "./Video";
import Contact from './ContactUs';
import 'video-react/dist/video-react.css' 

// Define the Main component
const Main = () => {
    // Render the Main component
    return(
    <div className="main">
        <ArticleSection />
        <Photos />
        <Video />
        <Contact />
    </div>
    );
};

// Export the Main component
export default Main;

