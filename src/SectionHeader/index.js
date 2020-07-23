import React from 'react';

const SectionHeader = ({ name, extraHeaderContents }) => {
    return (
        <header className="section__sectionHeader">
            <h2 className="section__sectionHeaderText">{name}</h2>
            {extraHeaderContents}
        </header>
    )
}

export default SectionHeader;