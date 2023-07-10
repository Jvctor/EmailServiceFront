import { useState } from 'react'
import PrimaryInput from './components/Input/PrimaryInput'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  // const handleChange = (event: HTMLInputElement) => (
  //   setEmail(event.target.value)
  // )
 
  return (
    <div className='container'>
    <div className='name-form-container'>
    <PrimaryInput 
      value={email} 
      onChange={event => setEmail(event.target.value)} 
      name="firstName"
      label='Primeiro'
      placeholder='João'
    />
    <PrimaryInput 
      value={firstName} 
      onChange={event => setEmail(event.target.value)} 
      name="secondName"
      label='Sobrenome'
      placeholder='Silva'
    />
    </div>
    <PrimaryInput 
      value={secondName}  
      onChange={event => setEmail(event.target.value)} 
      name="email"
      label='Digite seu e-mail'
      placeholder='fulano@email.com'
    />
    </div>
  )
}

export default App
