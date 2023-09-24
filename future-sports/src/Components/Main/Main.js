import React from "react";
import ArticleSection from "./News/ArticleSection";
import Photos from "./Photos";
import Video from "./Video";
import Team from "./Team";
import 'video-react/dist/video-react.css' 

const Main = () => {
    return(
    <div className="main">
        <ArticleSection />
        <Photos />
        <Video />
        <Team />
    </div>
    );
};

export default Main;

