import './App.css';
import logo from './images/logo192.png'
import ListaDeTareas from './components/ListaDeTareas.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img 
        className='logo'
        src={logo}
        alt='logoReact'
        />
        <h1 className='logo-texto'>
          ReactApp
        </h1>
      </div>
     <div className='contenedor-principal'>
        <h1>Tareas</h1>
        <ListaDeTareas />
     </div>
    </div>
  );
}

export default App;
