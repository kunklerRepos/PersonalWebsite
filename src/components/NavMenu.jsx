import React, { useState } from 'react';
import About from './About';
import Footer from './footer';
import Education from './Education';
import Experience from './Experience';
import Freelancing from './Freelancing';
import Projects from './Projects';


function NavMenu()
{
    

    const openNav = () => {
        let sidepanel = document.getElementById("mySidepanel");
        console.log(sidepanel);
        sidepanel.style.width = "35%";
    };

    const closeNav = () => { document.getElementById("mySidepanel").style.width = "0%"; }

    const pageObj = {
        'About': <About />,
        'Education': <Education />,
        'Experience': <Experience />,
        'Freelancing': <Freelancing />,
        'Projects': <Projects/>
    }

    const [page, setPage] = useState('About');

    const GoTo = (pageStr) => {setPage(pageStr)}


    return (
        <>
            <main  >
                <div style={{ display: "flex" }}>
                    <div id="mySidepanel" className="sidepanel">
                        <a onClick={ closeNav } className="closebtn" >×</a>
                        <a href="#" onClick={() => GoTo('About') }>About</a>
                        <a href="#" onClick={() => GoTo('Experience') }>Experience</a>
                        <a href="#" onClick={() => GoTo('Freelancing') }>Freelancing</a>
                        <a href="#">Projects</a>
                        <a href="#" onClick={() => GoTo('Education') }>Education</a>
                    </div>

                    <button className="openbtn" onClick={openNav}>☰</button> 
                    <div className="p-1 rounded-lg m-2">
                        <h2 className="display-5 headersTitles textColor" style={{ textAlign: "center" }}>Warren Kunkler </h2>
                        <p className="lead headersTitles textColor" style={{ textAlign: "center" }}>Software Engineer and GIS Analyst</p>
                    </div>
                </div>
                { pageObj[page]}
            </main>
            <Footer />
        </>
    )
}

export default NavMenu;