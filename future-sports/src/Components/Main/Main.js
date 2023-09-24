import React from "react";
import ArticleSection from "./Article/ArticleSection";
import Photos from "./Photos";
import Video from "./Video";

import Contact from './ContactUs';
import 'video-react/dist/video-react.css' 

const Main = () => {
    return(
    <div className="main">
        <ArticleSection />
        <Photos />
        <Video />
        <Contact />

    </div>
    );
};

export default Main;

