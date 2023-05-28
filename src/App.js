import React, { useState } from 'react';
import './App.css';
import Login from './componentes/login/Login.jsx';
import Alertaa from './componentes/alertaa/Alertaa.jsx';
import portadaDeFondo from "../src/portadaDeFondo.gif";

const App = () => {
  const [isMensajeEnPantalla, setisMensajeEnPantalla] = useState(null);

  const mostrarResultado = (e) => {
    setisMensajeEnPantalla(e);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${portadaDeFondo})` }}>
      <Login onSubmitForm={mostrarResultado} titulo="Bienvenido a Pet Society" texto1="Tu email abajo, por favor" texto2="Ingresa abajo tu contraseña" boton="Iniciar Sesión" />
      {isMensajeEnPantalla !== null && (
        <Alertaa
          texto={isMensajeEnPantalla ? "🥳🎉 Adelante, puedes pasar 🎉🥳" : "🚫 Alto! 🚫, 🙅‍♂️ datos incorrectos, intenta de nuevo 🙅‍♂️"}
          variant={isMensajeEnPantalla ? "success" : "danger"}
          
        />
      )}
    </div>
  );
}

export default App;


