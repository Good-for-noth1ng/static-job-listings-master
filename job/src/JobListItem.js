import React from 'react';
import JobInfoImg from './JobInfoImg';
import Skills from './Skills';
function JobListItem({job}) {
    
    return (
        <div className="jobList__item">
            <JobInfoImg job={job} />
            <Skills role={job["role"]} level={job["level"]} languages={job["languages"]} tools={job["tools"]}/>
        </div>
    )
}

export default JobListItem
