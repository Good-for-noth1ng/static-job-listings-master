import React from 'react'

function CompanyInfo({company, isNew, isFeatured}) {
    return (
        <div className="companyInfo">
            <span className="company">{company}</span>
            {isNew && (
                <span className="new">NEW!</span>
            )}
            {isFeatured && (
                <span className="featured">FEATURED</span>
            )}
            
        </div>
    )
}

export default CompanyInfo
