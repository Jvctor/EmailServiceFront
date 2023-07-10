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
        <div className='name-form-container'>
          <Spacer height='4' />
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
        <Spacer height='4' />
        <Button colorScheme='green' width='100%'>Enviar</Button>
      </form>
    </div>
  )
}

export default App
