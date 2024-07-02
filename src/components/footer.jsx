import React from 'react';
import Pdf from '../assets/Kunkler_Resume.pdf';

function Footer()
{
    return (
        <>
            <footer className="text-center text-white">

                <div className="text-center text-light " style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} >
                    <a className="btn text-light" href={Pdf } target="_blank">Resume</a>
                    <a
                        className="btn text-dark"
                        href="https://www.linkedin.com/in/warrenkunkler/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fa fa-linkedin"></i>
                    </a>
                    <a
                        className="btn text-dark"
                        href="https://github.com/Skunkler"
                        role="button"
                    ><i className="fa fa-github"></i></a>
                </div>
            </footer>
        </>
    )
}

export default Footer;