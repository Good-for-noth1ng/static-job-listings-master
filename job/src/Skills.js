import React from 'react';

function Skills({role, level, languages, tools}) {
    return (
        <div className="jobList__item__right">
            <span>{role}</span>
            <span>{level}</span>
            {languages.map((lang) => (
                <span>{lang}</span>
            ))}
            {tools.map((tool) => (
                <span>{tool}</span>
            ))}
        </div>
    )
}

export default Skills
