import react from 'react';
import '../stylesheets/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ texto, completada, id, completarTarea, eliminarTarea}) {
  return(
        <div className={completada ? 'contenedor-tarea completada' : 'contenedor-tarea'}>
          <div className='texto-tarea' onClick={() => completarTarea(id)}>
            {texto}
          </div>
          <div className='icono-tarea' onClick={() => eliminarTarea(id)}>
            <AiOutlineCloseCircle className='icono'/>
          </div>
        </div>
    );
}

export default Tarea;

// <button className='boton' onClick={ () => {
//         if (className == 'boton'){
//           className = 'boton-activo';
//         } else {
//           className = 'boton'
//         }
//       }}>{props.children} <button className='eliminar'>X</button></button>   