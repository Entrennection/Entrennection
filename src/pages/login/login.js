import { Col, Row } from 'react-bootstrap';
import './login.css';
import { useNavigate } from "react-router-dom";
import imagem from "../../img/login.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import img from "../../img/site-logo.jpg";
import Footer from '../../components/footer/footer';

function Login() {
  const Navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // login e senha
  const handleLogin = () => {
    if (email === 'entrennection@gmail.com' && password === '123' || email === 'admin@admin' && password === 'admin') {
      Navigate("/Home");
    } else {
      alert('Login inválido. Tente novamente.');
    }
  }

  const handleSignup = () => {
    Navigate("/Signup");
  }

  const handleLanding = () => {
    Navigate("/");
  }

  const [showModal, setShowModal] = useState(false);
  const fecharModal = () => setShowModal(false);
  const abrirModal = () => setShowModal(true);

  
  return (
    <div className='p-0'>
      <div className='px-3 py-2' style={{ backgroundColor: "#023859" }}>
        <img src={img} className='imgsite-logo' onClick={handleLanding} alt="Logo do site"></img>
      </div>
      <Row className='p-0 m-0'>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} className='p-0 m-0 d-none d-md-block vh-100'>
          <img src={imagem} className='img-login' alt="Imagem de login"></img>
        </Col>

        <Col xs={12} sm={12} md={7} lg={7} xl={7} className='p-0 m-0 d-flex justify-content-center align-items-center vh-100'>
          <div className='d-flex justify-content-center card-container'>
            <div className="card card-login p-3">
              <div className="card-body">
                <Form>
                  <h2 className='text-center'>Faça Login ou Cadastre-se</h2>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={handleEmailChange} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="************" value={password} onChange={handlePasswordChange} />
                  </Form.Group>

                  <div className="d-grid gap-2 col-12">
                    <Button variant="dark" className='botao-login-1' onClick={handleLogin}>Entrar</Button>
                    <Button variant="dark" onClick={abrirModal}>Cadastre-se</Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={12} className='p-0 m-0'>
          <Footer></Footer>
        </Col>


        {/* <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: "pink"}}>
          meu footer
        </Col> */}
      </Row>

      <Modal show={showModal} onHide={fecharModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cadastre-se</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className='p-2'>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Form.Group className="mb-3" controlId="Nome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Form.Group className="mb-3" controlId="Sobrenome">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Form.Group className="mb-3" controlId="Senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="************" />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Form.Group className="mb-3" controlId="ConfirmarSenha">
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control type="email" placeholder="************" />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Form.Group className="mb-3" controlId="DatadeNascimento">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control type="text" placeholder="ex:09/07/2004" />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Form.Group className="mb-3" controlId="Telefone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="text" placeholder="+55(11)95616-1613" />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Form.Group className="mb-3" controlId="NomedaEmpresa">
                <Form.Label>Nome da empresa</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Form.Group className="mb-3" controlId="Produto">
                <Form.Label>Produto</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Form.Group className="mb-3" controlId="cnpj">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control type="text" placeholder="0000000/0000" />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Form.Group className="mb-3" controlId="cpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="320.481.568-10" />
              </Form.Group>
            </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer className='d-flex justify-content-center'>
          <Button variant="dark" className='botao-login-1' onClick={handleLogin} size="lg">Entrar</Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default Login;