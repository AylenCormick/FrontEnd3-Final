import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';

const Footer = () => {

  const {state, dispatch} = useContext(ContextGlobal);

  return (
    <footer className={state.clase}>
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
