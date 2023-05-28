import React, { useState } from 'react';
import './login.css';
import Button from 'react-bootstrap/Button';

const Login = ({ onSubmitForm, titulo, texto1, texto2, boton }) => {
  const [areaDeEmail, setareaDeEmail] = useState("");
  const [areaDeContraseña, setareaDeContraseña] = useState("");
  const [isDesabled, setisDesabled] = useState(true);
  const correoVerdadero = "mi_nombre_es_enrique@gmail.com";
  const claveVerdadera = "si.ese.soy.yo";

  const paraEnviar = (e) => {
    e.preventDefault();
    if (areaDeEmail === correoVerdadero && areaDeContraseña === claveVerdadera) {
      return onSubmitForm(true);
    }
    return onSubmitForm(false);
  };

  const manejadorDeEntrada = (e) => {
    setareaDeContraseña(e.target.value);
    if (areaDeEmail !== "" && areaDeContraseña !== "") {
      setisDesabled(false);
    }
  };

  const manejarPresionarTecla = (e) => {
    if (e.key === "Enter") {
      paraEnviar(e);
    }
  };

  return (
    <form onSubmit={paraEnviar} className='contenedor-principal'>
      <div className='tarjeta'>
        <h1 className='titulo' >{titulo}</h1>
      <p className='textos' >{texto1}</p>
      <input type='text' placeholder="Ingresar email" onChange={(e) => setareaDeEmail(e.target.value)} />
      <p className='textos' >{texto2}</p>
      <input placeholder="Ingresar contraseña" type="password" onChange={(e) => manejadorDeEntrada(e)} onKeyPress={(e) => manejarPresionarTecla(e)} />
      <div className='contenedor-boton'>
        <Button type='submit' disabled={isDesabled} value="enviar" variant="outline-primary">{boton}</Button>
      </div>
      </div>
    </form>
  );
};

export default Login;


