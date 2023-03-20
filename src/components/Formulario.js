import react from 'react';
import '../stylesheets/Formulario.css'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function Formulario(props) {

    const [input, setInput]= useState(''); 

    const manejarCambio = e =>{
      setInput(e.target.value);
    }

    const manejarEnvio = e =>{
      e.preventDefault();  
      const tareaNueva ={
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }

    return(
        <form 
        onSubmit={manejarEnvio}
        className='formulario'>
            <input 
            className='input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={manejarCambio}
            />
            <button className='boton-formulario'> Agregar Tarea</button>
        </form>
    );
}

export default Formulario;