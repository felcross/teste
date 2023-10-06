import { useState } from 'react'
import './App.css'
import Nome from './components/component'
//npm install --save-dev @types/react@latest @types/react-dom@latest


function App() {
  const [name, setName] = useState("")

  function handlechangename(nome:any){
    setName(nome)
}


  return (
    <>
    <h1>Componente App</h1>
      <h2>Olá : {name}</h2>
      <button onClick={ ()=> handlechangename('Fcross')}>
        Mudar Nome
      </button>
      <Nome name={name}  />

    </>
  )
}

export default App
