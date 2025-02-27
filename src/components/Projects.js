import React from 'react'; // Importa la librería de React
import './Projects.css'; // Importa el archivo de estilos CSS para el componente

const Projects = () => { 
    // Ejemplo de datos para proyectos, puedes modificar o expandir
    const projectsData = [ 
        { 
            title: "Aplicación de Visión Artificial", 
            description: "Una aplicación web que utiliza modelos de deep learning para clasificar imágenes.", 
            link: "https://github.com/tuusuario/proyecto-vision-artificial" 
        }, 
        { 
            title: "Gestor de Tareas", 
            description: "Aplicación fullstack para gestionar tareas diarias usando una API REST.", 
            link: "https://github.com/tuusuario/proyecto-gestor-tareas" 
        }, 
        { 
            title: "App de Clima", 
            description: "Aplicación que consume una API pública para mostrar el clima actual en distintas ciudades.", 
            link: "https://github.com/tuusuario/proyecto-app-clima" 
        } 
    ];

    return ( 
        <section id="projects" className="projects"> 
            <h2>Proyectos</h2> 
            <div className="projects-container"> 
                {projectsData.map((project, index) => ( 
                    <div key={index} className="project-card"> 
                        <h3>{project.title}</h3> 
                        <p>{project.description}</p> 
                        <a href={project.link} target="_blank" rel="noreferrer">Ver proyecto</a> 
                    </div> 
                ))} 
            </div> 
        </section> 
    ); 
};

export default Projects; // Exporta el componente Projects para que pueda ser utilizado en otros archivos