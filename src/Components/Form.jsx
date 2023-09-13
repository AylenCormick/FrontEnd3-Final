import React from "react";
import { useState } from "react";
import MensajeForm from "./MensajeForm";

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

const Form = () => {
  
  const [contacto, setContacto] = useState({
    nombre: "",
    email: ""
  })
  
  function handleNombre(e) {
    setContacto({...contacto, nombre: e.target.value});
  }
  function handleEmail(e) {
    setContacto({...contacto, email: e.target.value});
  }

  const [mensj, setMensj] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacto.nombre.length > 4 && regexEmail.test(contacto.email)) {
      setMensj(1);
      setContacto({
        nombre: "",
        email: ""
      })
    } else {
      setMensj(-1);
    }

    document.querySelector("form").reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre completo" onChange={handleNombre}/>
        <input type="text" placeholder="Ingrese su email" onChange={handleEmail}/>
        <button type="submit">Enviar</button>
        <MensajeForm nombre={contacto.nombre} resp={mensj}/>
      </form>
      <div>

      </div>
    </div>
  );
};

export default Form;
