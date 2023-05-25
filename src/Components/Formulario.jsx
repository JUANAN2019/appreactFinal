import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReCAPTCHA from "react-google-recaptcha"
import React, { useRef, useState } from 'react';
import './formulario.css';



function Formulario() {
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const [usuarioValido, cambiarUsuarioValido] = useState(false);
  const captcha = useRef(null);
  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log('el usuario no es un robot');
      cambiarCaptchaValido(true);
    };
  }
  const submit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      console.log('el usuario no es un robot');
      cambiarUsuarioValido(true);
      cambiarCaptchaValido(true);
    } else {
      console.log('acepta el captcha')
      cambiarUsuarioValido(false);
      cambiarCaptchaValido(false)
    }
  }
  return (
    <Form onSubmit={submit}>

      <h1>Registrate</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirmar contraseñas</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <ReCAPTCHA
        ref={captcha}
        sitekey='6Lf90SAmAAAAABQDo6DH-tOdETM934lleuEg5ici'
        onChange={onChange} />
      {captchaValido === false && <div className='error-captcha'>Por favor acepta captcha</div>}

      <Button variant="primary" type="submit">
        Submit
      </Button>

      <div>
        <h1>Bienvenido</h1>
      </div>



    </Form>
  );
}

export default Formulario;