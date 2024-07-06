import React from 'react';
import Png from '../assets/uw-favicons/uw-favicons/images/favicons/android-chrome-192x192.png';
import ucsbPng from '../assets/480px-UC_Santa_Barbara_Seal.png';

function Education()
{
    return (
        <>
        <br></br>
            <br></br>
            <div className="align-items-center justify-content-center">
                <ul>
                    <li>
                        <a href="https://guide.wisc.edu/graduate/geography/cartography-geographic-information-systems-ms/cartography-geographic-information-systems-gis-development-ms/#text" target="_blank">
                            
                            <img src={Png} className="img-thumbnail"  />
                            <h4 className="display-7 headersTitles textColor" style={{ textAlign: "center" }} >University Of Wisconsin-Madison</h4>
                            
                                <p className="display-7 headersTitles textColor" style={{ textAlign: "center" }} >2018: M.S. Cartography and GIS (GIS Software Development Emphasis)</p>
                        </a>
                    </li>
                    <br></br>
                    <li>
                        <a href="https://www.ucsb.edu/" target="_blank">
                            <img src={ucsbPng} className="img-thumbnail" style={{width: '50%', height: 'auto'}} />
                            <h4 className="display-7 headersTitles textColor" style={{ textAlign: "center" }} >University of California, Santa Barbara</h4>
                            <p className="display-7 headersTitles textColor" style={{ textAlign: "center" }} >2015: B.A. History and Geography (GISc Emphasis) Double Major</p>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Education;