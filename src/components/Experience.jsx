import React, { Fragment } from 'react';
import SkillsList from './SkillsList';


function Experience()
{
    const workExperience = {
        "Juvare": "Senior GIS Developer and Implementation Analyst (10/2023-Present), Designs and implements web maps and web based applications using Dojo and ESRI JavaScript API for Juvare's UCP platform",
        "Epoch Solutions Group": "Senior Software Engineer (4/2022 - 10/2023), Designs and Develops APIs using Entity Framework and clean architecture. Supported different RDBMS platforms and developed features in Angular.",
        "CAGIS": "Senior Computer Programmer Analyst-Computer Systems Analyst (3/2020-4/2022), Built and designed automated processes in ArcPy for data for both City and County clients. Developed Fixit Cincy! Mobile application using Xamarin Forms. Created several custom widgets for Cagis Online 2.0 and built several custom GIS web applications",
        "Las Vegas Valley Water District": "Trainee/Associate Geospatial Analyst (11/2015-02/2020), classified county wide aerial image collection using machine learning alogirthms and built custom tools and automation in python and R to handle large datasets and merge them into GIS. Also created mapping and GIS datasets and created custom python tools for other colleagues"
    };

    const workSkills = {
        "Juvare": ["JavaScript", "Python"], "Epoch Solutions Group": ["Python", "TypeScript", "Angular", "C#", "Xamarin", "Entity FrameWork Core"],
        "CAGIS": ["Python", "React", "JavaScript", "Dojo", "C#", "ASP .NET", "ASP .NET Core", "Xamarin", "Oracle"],
        "Las Vegas Valley Water District": ["Python", "R", "Oracle", "IDL"]
    }

    const CompanyList = ["Juvare", "Epoch Solutions Group", "CAGIS", "Las Vegas Valley Water District"];

    const CompanyUrls = {
        "Juvare": "https://www.juvare.com/", "Epoch Solutions Group": "https://epochsg.com/",
        "CAGIS": "https://cagismaps.hamilton-co.org/cagisportal", "Las Vegas Valley Water District": "https://www.lvvwd.com/"
    } 





    return (
        <>
            <h3 className="display-7 headersTitles textColor" style={{ textAlign: "center", left: "20%" }} >Experience</h3>
            {CompanyList.map(comp => {
                return (
                    <Fragment>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="card cardClass w-85" style={{ width: '50%' }}>
                            <div className="card-body">
                                    <h5 className="card-title textColor headersTitles">{comp}</h5>
                                    <h6 className="card-subtitle mb-2 textColor headersTitles">{workExperience[comp].split(",")[0]}</h6>
                                    <p className="card-text textColor">{workExperience[comp].split(",")[1]}</p>
                                    <SkillsList skills={workSkills[comp]} />
                            </div>
                        </div>
                        </div>
                    </Fragment>
                )
            }) }
        </>
    )
}

export default Experience;