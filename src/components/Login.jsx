import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [alerta, setAlerta] = useState({ isShown: true, msg: '', variant: '' });
    /*     const [boton, setBoton] = useState(true);
    
        const validarBoton = () => {
            if (email !== '' || password !== '') {
                setBoton(false)
            }
        } */

    const validarInput = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setAlerta({ isShown: true, msg: 'Debes completar todos los campos.', variant: 'warning' });
            return;
        } else if (email.trim() === 'user@desafiolatam.cl' && password.trim() === 'desafiolatam123') {
            setAlerta({ isShown: true, msg: 'Usuario y contraseña correctos. Ingresando al sitio...', variant: 'info' });
            return;
        } else {
            setAlerta({ isShown: true, msg: 'El usuario o la contraseña ingresados son incorrectos.', variant: 'danger' });
            return;
        }

    }

    return (

        <Form onSubmit={validarInput}>
            {alerta.isShown ? <Alert key={alerta.variant} variant={alerta.variant}>{alerta.msg}</Alert> : null}


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="ejemplo@micorreo.cl" />
                <Form.Text className="text-muted">
                    Nunca compartiremos tus credenciales con nadie.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Contraseña" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordar este dispositivo" />
            </Form.Group>

            <Button variant="primary" type="submit" /* disabled={boton} */ >
                Iniciar Sesión
            </Button>

            <p>Pista <br></br>email: user@desafiolatam.cl <br></br>pass: desafiolatam123</p>

        </Form >
    );
}


export default Login;