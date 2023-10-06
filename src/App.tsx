import { useState } from 'react'
import './App.css'
//npm install --save-dev @types/react@latest @types/react-dom@latest


function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [user, setUser] = useState({})
  
  function handlerRegister(e:any){
   e.preventDefault()

    setUser({
      nome:name,
      email:email,
      idade:age 
    })

  }




  return (
    <>
     <h1>Cadastrando USER</h1>

    <form  onSubmit={handlerRegister}>
   <label>Nome:</label>
   <input placeholder='Digite seu nome'
   value={name}
   onChange={(e)=> setName(e.target.value)}
   /><br/>
   <label>Email:</label>
   <input placeholder='Digite seu email'
     value={email}
     onChange={(e)=> setEmail(e.target.value)}
   /><br/>
   <label>Idade:</label>
   <input placeholder='Digite seu idade'
     value={age}
     onChange={(e)=> setAge(e.target.value)}
   /><br/>
      <button type='submit'>Registro</button>
    </form>

    <div>
      <label>Nome:{name}</label><br/>
      <label>Email:{email}</label><br/>
      <label>Idade:{age}</label>
    </div>

    </>

  )
}

export default App
