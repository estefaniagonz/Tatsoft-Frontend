import React from "react";
import "./index.css";
import Alerta from "./components/molecules/Alertas";

const App = () => {
  return (
    <div>
      <Alerta
        tipo="Confirmar"
        mensaje="Cambios Guardados"
        onAceptar={() => alert("Aceptar")}      
      />
    </div>
  );
};

export default App;
