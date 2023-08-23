import { useState } from 'react'
import { Button, Spacer } from '@chakra-ui/react'
import PrimaryInput from './components/Input/PrimaryInput'
import './App.css'
import emailjs from '@emailjs/browser'

function App() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  const submit = () => {
    let message = 'Você acabou de adquirir sua assinatura mensal no valor de R$250,00'

    const templateParams = {
      from_name: firstName + secondName,
      message: message,
      email: email
    }
    emailjs.send("service_1mzz6fd", "template_tao9hcc", templateParams, "zqlBCdDW5aJsrtC0b")
      .then((response) => {
        console.log('EMAIL ENVIADO', response.status, response.text)
        setFirstName('')
        setSecondName('')
        setEmail('')
      }, (erro) => {
        console.log("ERRO: ", erro)
      })
  }


  return (
    <div className='container'>
      <form>
        <div className='name-form-container'>
          <PrimaryInput
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            name="firstName"
            label='Primeiro'
            placeholder='João'
          />
          <PrimaryInput
            value={secondName}
            onChange={event => setSecondName(event.target.value)}
            name="secondName"
            label='Sobrenome'
            placeholder='Silva'
          />
        </div>
        <Spacer height='4' />
        <PrimaryInput
          value={email}
          onChange={event => setEmail(event.target.value)}
          name="email"
          label='Digite seu e-mail'
          placeholder='fulano@email.com'
        />
        <Spacer height='4' />
        <Button colorScheme='green' width='100%' onClick={submit}>Enviar</Button>
      </form>
      {/* <Spacer height='6' maxWidth='4' /> */}
      <div className='product-details'>
        <h2>Assinatura Mensal</h2>
        <Spacer height='4' maxWidth='4' />
        <p>você irá pagar</p>
        <span>R$ 250,00</span>
        <Spacer height='4' maxWidth='4' />
        <p></p>
      </div>
    </div>
  )
}

export default App
