import React from 'react';
import JobInfo from './JobInfo';

function JobInfoImg({ job }) {
    return (
        <div className="jobList__item__left">
            <img src={job["logo"]} alt="Company logo" />
            <JobInfo job={job}/>
        </div>
    )
}

export default JobInfoImg
