import logo from '../../Icono.png';
import './style.css';
import { Link } from 'react-router-dom';

export function PageTwo() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contenido de la página 2 en <code>src/App.js</code>
        </p>
      </header>

      <div className="App-line"></div>
      
      <main className="App-main">
        <p>
          Página 2
        </p>

        <Link to="/" className="App-link">
          Anterior
        </Link>
      </main>
    </div>
  );
}
