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
            <p>"Soy Ingeniero Mecatrónico, con línea de especialización en visión artificial (Python/OpenCV), 
                donde desarrollo algoritmos capaces de interpretar el mundo visual para aplicaciones web. 
                Utilizo HTML/CSS, React y Java como base para el futuro en el que logre integrar Machine Learning
                en soluciones que no solo procesan datos, sino que buscan emular la comprensión humana,
                como sistemas de reconocimiento de objetos tipo Tesla Autopilot. Mi enfoque técnico se centra en
                crear servicios donde la inteligencia artificial y la web convergen para transformar industrias, 
                optimizando procesos críticos mediante modelos predictivos accesibles y escalables."</p>
        </section>
    );
};

// Exporta el componente About como el valor predeterminado del módulo
export default About;