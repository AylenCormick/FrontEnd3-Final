import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id}=useParams();

  const [dataDentista, setDataDentista] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setDataDentista(data);
    })
    .catch((e) => console.log(e))
    }, []);

    console.log(dataDentista);

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <h2>{dataDentista.name}</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="user-table-header">Name</th>
            <th className="user-table-header">Email</th>
            <th className="user-table-header">Phone</th>
            <th className="user-table-header">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr key={dataDentista.id}>
            <td className="user-name">{dataDentista.name}</td>
            <td className="user-email">{dataDentista.email}</td>
            <td className="user-phone">{dataDentista.phone}</td>
            <td className="user-website">{dataDentista.website}</td>
          </tr>
        </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail