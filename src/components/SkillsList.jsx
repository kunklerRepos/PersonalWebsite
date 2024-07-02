import React, { Fragment } from 'react';

function SkillsList(props)
{
    console.log(props);
    return (
        <>
            {props["skills"].map(skill => {

                return (
                    <Fragment>
                        <a className="btn btn-design disabled" href="#">{skill}</a>
                    </Fragment>
                )
            })}
        </>
    )
    
    
}

export default SkillsList;