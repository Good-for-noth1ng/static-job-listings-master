import React from 'react';
import CompanyInfo from './CompanyInfo';
import Position from './Position';
import PositionInfo from './PositionInfo';

function JobInfo({job}) {
    return (
        <div className="jobList__item__left__generalInfo">
            <CompanyInfo company={job["company"]} isNew={job["new"]} isFeatured={job["featured"]}/>
            <Position position={job["position"]}/>
            <PositionInfo postedAt={job["postedAt"]} contract={job["contract"]} location={job["location"]}/>
        </div>
    )
}

export default JobInfo
