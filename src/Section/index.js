import React from 'react';
import './section.css';
import SectionHeader from '../SectionHeader';

const Section = ({name, children, extraHeaderContents }) => {
    return (
        <section className="section">
            <SectionHeader name={name} extraHeaderContents={extraHeaderContents} />
            <main className="section__sectionBody">
                {children}
            </main>
        </section>
    )
}

export default Section;