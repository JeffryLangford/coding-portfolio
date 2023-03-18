import React from 'react';
import photo1 from '../../assets/portfolio/photo1.jpg';
import photo2 from '../../assets/portfolio/photo2.jpg';
import photo3 from '../../assets/portfolio/photo3.jpg';
import photo4 from '../../assets/portfolio/photo4.jpg';
import photo5 from '../../assets/portfolio/photo5.jpg';
import photo6 from '../../assets/portfolio/photo6.jpg';

const Portfolio = () => {
    const projects = [
        {
            photo: photo1,
            name: "Workday Scheduler",
            category: "HTML, Javascript, JQuery",
            link: "https://github.com/JeffryLangford/scheduling-my-workday"
        },
        {
            photo: photo2,
            name: "Classical Music Composer Quiz",
            category: "HTML, Javascript, JQuery, Web APIs",
            link: "https://github.com/JeffryLangford/Quiz-for-Coding"
        },
        {
            photo: photo3,
            name: "Note Taker App",
            category: "Javascript, Express",
            link: "https://github.com/JeffryLangford/taker-of-the-notes"
        },
        {
            photo: photo4,
            name: "My Coding Portfolio",
            category: "Javascript, React, State",
            link: "https://github.com/JeffryLangford/coding-portfolio"
        },
        {
            photo: photo5,
            name: "Date Night in Austin",
            category: "HTML, Tailwind, Javascript, Third-Party APIs",
            link: "https://github.com/JeffryLangford/group-project-1"
        },
        {
            photo: photo6,
            name: "Professional README Generator",
            category: "Javascript, Node",
            link: "https://github.com/JeffryLangford/create-a-readme"
        }
    ]

    return(
        <section>
            <h2>Portfolio</h2>
            <div className='portfolio'>
            {projects.map((image) => (
                <div class="project">
                    <a href={image.link}><img src={image.photo} alt={image.name} class="imagecorrection"></img></a>
                    <div class="project-text">
                        <p>{image.name}</p>
                        <span>{image.category}</span>
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
};

export default Portfolio;