import React from "react";
import masterResume from "../../assets/resume/master-resume.pdf"

const Resume = () => {
    return (
        <section>
            <h2>Resume</h2>
            <div className="subwrap">
                <div className="flex space-evenly">
                    <a className="resume-link" href={masterResume}>Link to my resume</a>
                    <div className="flex space-around">
                        <h3 className="proficiencies">Proficiencies</h3>
                        <ul>
                            <h4>Front-End</h4>
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                        </ul>
                        <ul>
                            <h4>Back-End</h4>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Resume;