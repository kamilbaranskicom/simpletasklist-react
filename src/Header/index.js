import React from 'react';

const Header = ({ name, extraHeaderContents }) => {
    return (
        <header className="section__sectionHeader">
            <h2 className="section__sectionHeaderText">{name}</h2>
            {extraHeaderContents ? extraHeaderContents : ''}
        </header>
    )
}

export default Header;