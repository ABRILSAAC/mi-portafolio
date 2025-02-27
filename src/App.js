import React from 'react'; // Importa la biblioteca de React
import Header from './components/Header'; // Importa el componente Header
import About from './components/About'; // Importa el componente About
import Projects from './components/Projects'; // Importa el componente Projects
import Contact from './components/Contact'; // Importa el componente Contact
import './App.css'; // Importa el archivo de estilos CSS

function App() { // Define el componente principal App
  return ( // Retorna el JSX que define la estructura del componente
    <div className="App"> {/* Contenedor principal con la clase "App" */}
      <Header /> {/* Renderiza el componente Header */}
      <main> {/* Contenedor principal para el contenido */}
        <About /> {/* Renderiza el componente About */}
        <Projects /> {/* Renderiza el componente Projects */}
        <Contact /> {/* Renderiza el componente Contact */}
      </main>
      <footer className="footer"> {/* Pie de página con la clase "footer" */}
        <p>© {new Date().getFullYear()} Mi Portafolio</p> {/* Muestra el año actual y el texto "Mi Portafolio" */}
      </footer>
    </div>
  );
}

export default App; // Exporta el componente App como el componente predeterminado