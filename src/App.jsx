import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import Alertas from './components/Alert';

function App() {


  return (
    <Container>
      <Login />
    </Container>
  );
}



export default App
