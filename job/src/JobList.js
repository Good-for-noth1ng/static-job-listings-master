import React from 'react'
import './scss/style.css';
import JobListItem from './JobListItem';

function JobList({jobs}) {
    return (
        <div className="jobList">
            {jobs.map((job) => (
              <JobListItem job={job}/>
            ))}
        </div>
    )
}

export default JobList
