import React from 'react'
import './Project.css'
const Project = () => {

    const projectsData = [
        {
            title: "To-Do List",
            desc: "A To-Do List application that allows users to add daily tasks, mark tasks as completed using a checkbox, and delete tasks when they are no longer needed. This app helps users organize their work and manage tasks efficiently.",
            skills: ["HTML5", "CSS3", "JavaScript"],
            github: "https://github.com/yeddulavamshi/todo-list-app"
        },

        {
            title: "Weather App",
            desc: "Weather App built with React that displays real-time weather details like temperature, location, date & time, weather conditions, humidity, wind speed, and pressure using a weather API.",
            skills: ["React", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
            github: "https://github.com/yeddulavamshi/weather-app"
        },

        {
            title: "Employee Management System",
            desc: "A Full-Stack Employee Management System built with Spring Boot, React, and MySQL.",
            skills: ["Java", "Spring Boot", "MySQL", "React", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
            github: "https://github.com/yeddulavamshi/employee-management-system"
        },
    ];

    const MAX_VISIBLE_SKILLS = 3;

    return (
        <div className='container my-5 py-5' id="projects">
            <div className='education-head text-center mb-4'>
                <h3 className='h3 fw-bold'>Projects</h3>
                <p className='pb-3 text-secondary'>Here are some of my projects</p>
            </div>

            <div className='row g-4 justify-content-center'>
                {projectsData.map((project, index) => {

                    const visibleSkills = project.skills.slice(0, MAX_VISIBLE_SKILLS);
                    const remainingSkillsCount = project.skills.length - MAX_VISIBLE_SKILLS;

                    return (
                        <div className='col-12 col-md-6 col-lg-4' key={index}>
                            <div className="card project-card h-100 position-relative mx-3 mx-lg-0">
                                <div className="card-body text-center p-4 d-flex flex-column">

                                    <div className="mb-3">
                                        <i className="fa-brands fa-github fs-1 text-dark"></i>
                                    </div>

                                    <h5 className="card-title fw-bold mb-3">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-decoration-none text-dark stretched-link">
                                            {project.title}
                                        </a>
                                    </h5>

                                    <p className="card-text text-muted mb-4 clamp-text">
                                        {project.desc}
                                    </p>

                                    <div
                                        className="d-flex justify-content-center flex-wrap gap-2 mt-auto skills-container"
                                        title={project.skills.join(', ')}
                                    >
                                        {visibleSkills.map((skill, i) => (
                                            <span key={i} className="badge bg-light text-dark border">
                                                {skill}
                                            </span>
                                        ))}

                                        {remainingSkillsCount > 0 && (
                                            <span className="badge bg-secondary text-white border">
                                                +{remainingSkillsCount}
                                            </span>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project
