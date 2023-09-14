import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const {dataDentistas} = useContext(ContextGlobal);

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