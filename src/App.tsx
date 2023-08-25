import { useState } from 'react';
import { Button, Spacer } from '@chakra-ui/react';
import PrimaryInput from './components/Input/PrimaryInput';
import './App.css';
import emailjs from '@emailjs/browser';
import NotificationPopup from './components/popUp/popUp';

function App() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[A-Za-z\s]*$/.test(event.target.value)) {
      setFirstName(event.target.value);
    }
  };

  const handleSecondNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[A-Za-z\s]*$/.test(event.target.value)) {
      setSecondName(event.target.value);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regex.test(email);
  };

  const submit = () => {
    if (!firstName || !secondName) {
      setPopupMessage('Nome e sobrenome são campos obrigatórios.');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return;
    }

    if (!email) {
      setPopupMessage('O campo de e-mail é obrigatório.');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return;
    }

    if (!validateEmail(email)) {
      setPopupMessage('O email inserido não é válido.');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return;
    }

    let message = "Parabéns! Sua assinatura mensal foi confirmada com sucesso. A partir de agora, você está oficialmente inscrito e pronto para desfrutar de todos os benefícios exclusivos da nossa plataforma. Agradecemos por escolher nossa empresa e aguardamos ansiosamente fornecer a você uma experiência incrível."

    const templateParams = {
      from_name: firstName + ' ' + secondName,
      message: message,
      email: email,
    };

    emailjs
      .send('service_1mzz6fd', 'template_tao9hcc', templateParams, 'zqlBCdDW5aJsrtC0b')
      .then(
        (response) => {
          if (response.status === 200) {
            console.log('EMAIL ENVIADO', response.status, response.text);
            setFirstName('');
            setSecondName('');
            setEmail('');
            setEmailError('');

            setPopupMessage("Assinatura confirmada! Verifique seu e-mail.");
            setShowPopup(true);

            setTimeout(() => {
              setShowPopup(false);
            }, 3000);
          } else {
            console.log('ERRO: Email não enviado', response.status, response.text);
            setEmailError('Ocorreu um erro no envio do email. Por favor, tente novamente mais tarde.');
          }
        },
        (erro) => {
          console.log('ERRO: ', erro);
        }
      );
  };

  return (
    <div className='container'>
      <form>
        <div className='name-form-container'>
          <PrimaryInput
            value={firstName}
            onChange={handleFirstNameChange}
            name='firstName'
            label='Primeiro'
            placeholder='Digite seu primeiro nome'
          />
          <PrimaryInput
            value={secondName}
            onChange={handleSecondNameChange}
            name='secondName'
            label='Sobrenome'
            placeholder='Digite seu sobrenome'
          />
        </div>
        {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        <Spacer height='4' />
        <PrimaryInput
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          name='email'
          label='E-mail'
          placeholder='Digite seu e-mail'
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        <Spacer height='4' />
        <Button colorScheme='green' width='100%' onClick={submit}>
          Enviar
        </Button>
      </form>
      <div className='product-details'>
        <h2>Assinatura Mensal</h2>
        <Spacer height='4' maxWidth='4' />
        <p>você irá pagar</p>
        <span>R$ 250,00</span>
        <Spacer height='4' maxWidth='4' />
        <p></p>
      </div>
      {showPopup && <NotificationPopup message={popupMessage} onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default App;