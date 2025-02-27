// Importa la biblioteca React para poder utilizar sus funcionalidades
import React from 'react'; 

// Importa el archivo CSS específico para este componente
import './About.css';

// Define el componente funcional About
const About = () => {
    // Retorna el JSX que define la estructura del componente
    return (
        // Define una sección con id "about" y clase "about"
        <section id="about" className="about">
            {/* Encabezado de nivel 2 con el texto "Sobre Mí" */}
            <h2>Sobre Mí</h2>
            
            {/* Párrafo que describe la experiencia y habilidades del autor */}
            <p>Soy Ingeniero Mecatrónico con especialización en visión artificial y programación. Me apasiona el desarrollo web y he trabajado en diversos lenguajes como Python, Java, HTML y CSS.</p>
        </section>
    );
};

// Exporta el componente About como el valor predeterminado del módulo
export default About;