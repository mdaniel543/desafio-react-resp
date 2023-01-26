import logo from '../../Icono.png';
import './style.css';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contenido de la página1 en <code>src/App.js</code>
        </p>
      </header>

      <div className="App-line"></div>
      
      <main className="App-main">
        <p>
          Page 1
        </p>

        <Link to="/page2" className="App-link">
          Next Page
        </Link>
      </main>
    </div>
  );
}
