import React from 'react';
import './section.css';
import Header from '../Header';

const Section = ({name, children, extraHeaderContents }) => {
    return (
        <section className="section">
            <Header className="section__sectionHeader" name={name} extraHeaderContents={extraHeaderContents} />
            <main className="section__sectionBody">
                {children}
            </main>
        </section>
    )
}

export default Section;