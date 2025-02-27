import React from 'react'; // Importa la librería React
import './Header.css'; // Importa el archivo de estilos CSS para el componente Header

// Define el componente funcional Header
const Header = () => {
    return (
        // Define el elemento header con la clase "header"
        <header className="header">
            {/* Contenedor del logo */}
            <div className="logo">
                {/* Título del portafolio */}
                <h1>Mi Portafolio</h1>
            </div>
            {/* Contenedor de la navegación */}
            <nav className="nav">
                {/* Lista de enlaces de navegación */}
                <ul>
                    {/* Enlace a la sección "Sobre Mí" */}
                    <li><a href="#about">Sobre Mí</a></li>
                    {/* Enlace a la sección "Proyectos" */}
                    <li><a href="#projects">Proyectos</a></li>
                    {/* Enlace a la sección "Contacto" */}
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

// Exporta el componente Header para que pueda ser utilizado en otros archivos
export default Header;