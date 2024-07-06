import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ClassifiedDivision from "../assets/classifiedDivision.jpg";
import nonClassified from "../assets/nonClassified.jpg";
import classified from "../assets/classified.jpg";
import resolution from "../assets/resolution.jpg";
import segmented from "../assets/segmented.jpg";
import fixitCincy from "../assets/fixitCincy.webp";
import fixitCincy2 from "../assets/fixitCincy2.webp";


function About()
{
    const images = [
        ClassifiedDivision,
        nonClassified,
        classified,
        resolution,
        segmented,
        fixitCincy,
        fixitCincy2
    ];
    console.log(images);

    return (
        <>
            <h3 className="display-7 headersTitles textColor" style={{ textAlign: "center" }} >About</h3>
            <br></br>
            <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <span>Slide 3</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                        <span>Slide 4</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                        <span>Slide 5</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                        <span>Slide 6</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[6]})` }}>
                        <span>Slide 7</span>
                    </div>
                </div>
            </Slide>
            <p className="lead textColor" style={{ textAlign: "center" }} >Hello, thank you so much for visiting my website! I am a professional GIS analyst and software engineer with over 8 years of experience in a wide range of technical disciplines. These include developing machine learning to models to classify remote sensing data to development of  mobile apps, web, and desktop applications. Feel free to reach out to me if you would like to discuss any business opportunities that I may be of assistance in.</p>
        </>

    )

}

export default About;