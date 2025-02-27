import React from 'react'; // Importa la biblioteca de React
import './Contact.css'; // Importa el archivo de estilos CSS para este componente

const Contact = () => { // Define un componente funcional llamado Contact
    return ( // Retorna el JSX que define la estructura del componente
        <section id="contact" className="contact"> {/* Sección con id "contact" y clase "contact" */}
            <h2>Contacto</h2> {/* Título de la sección */}
            <p>Puedes contactarme a través de las siguientes plataformas:</p> {/* Párrafo descriptivo */}
            <ul> {/* Lista desordenada */}
                <li>Email: felpe.toon@gmail.com</li> {/* Elemento de lista con el email */}
                <li>LinkedIn: <a href="https://www.linkedin.com/in/andr%C3%A9s-felipe-zuluaga-osorio/" target="_blank" rel="noreferrer">Mi Perfil</a></li> {/* Elemento de lista con enlace a LinkedIn */}
                <li>GitHub: <a href="https://github.com/ABRILSAAC" target="_blank" rel="noreferrer">Mi GitHub</a></li> {/* Elemento de lista con enlace a GitHub */}
            </ul>
        </section>
    );
};

export default Contact; // Exporta el componente Contact como exportación predeterminada