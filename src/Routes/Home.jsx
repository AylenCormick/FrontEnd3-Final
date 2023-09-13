import React, { useState } from 'react'
import { useEffect } from 'react';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const [dataDentistas, setDataDentistas] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setDataDentistas(data);
    })
    .catch((e) => console.log(e))
    }, []);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dataDentistas.map((dent) => (
          <Card key={dent.id} id={dent.id} name={dent.name} username={dent.username} />
        ))}
      </div>
    </main>
  )
}

export default Home