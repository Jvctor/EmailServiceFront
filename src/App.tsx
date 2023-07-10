import { useState } from 'react'
import { Button, Spacer } from '@chakra-ui/react'
import PrimaryInput from './components/Input/PrimaryInput'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  return (
    <div className='container'>
      <form>
         {/* <Spacer height='4' /> */}
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
        <Spacer height='4'/>
        <PrimaryInput
          value={secondName}
          onChange={event => setEmail(event.target.value)}
          name="email"
          label='Digite seu e-mail'
          placeholder='fulano@email.com'
        />
        <Spacer height='4'/>
        <Button colorScheme='green' width='100%'>Enviar</Button>
      </form>
      <Spacer height='6' maxWidth='4' />
      <div className='product-details'>
     <h2>você irá pagar</h2>
     <span>R$ 250,00</span>
      </div>
    </div>
  )
}

export default App
