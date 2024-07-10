import { NavLink, Outlet } from "react-router-dom";
import {Button, Accordion, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'rgb(124, 124, 124)' }}>
      <div>
        <img src="./tecido-preto3.jpg" style={{width: "1300px"}}></img>
      </div>

      <div className="row mb-4">
        <div className="col-lg-5 col-md-6 mx-auto mb-4 mr-3">
          <Card className="mb-3" style={{ backgroundColor: 'rgb(187, 187, 187)' }}>
            <Card.Img variant="top" src="./roupa.jpg" alt="Roupas" />
            <Card.Body>
              <div className="text-center">
                <Card.Title>Roupas e Vestidos</Card.Title>
                <Card.Text className="text-danger font-weight-bold">Modelos Femininos</Card.Text>
                <Card.Text className="card-text text-justify mb-4">
                  Dê uma olhada em nossas Roupas e Vestidos e se encante com a qualidade e preço!
                </Card.Text>
              </div>
              <div className="text-center">
                <Button variant="warning" href="/roupas">Mais informações</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-5 col-md-6 mx-auto">
          <Card className="mb-3" style={{ backgroundColor: 'rgb(187, 187, 187)' }}>
            <Card.Img variant="top" src="./calca.jpg" alt="Calcas" />
            <Card.Body>
              <div className="text-center">
                <Card.Title>Calças e Saias</Card.Title>
                <Card.Text className="text-danger font-weight-bold">Modelos Femininos</Card.Text>
                <Card.Text className="card-text text-justify mb-4">
                  Nossas calças e saias do mais alto nível social darão um charme adicional para o seu Look!
                </Card.Text>
              </div>
              <div className="text-center">
                <Button variant="warning" href="/calcas">Mais informações</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-5 col-md-6 mx-auto mt-4">
          <Card className="mb-3" style={{ backgroundColor: 'rgb(187, 187, 187)' }}>
            <Card.Img variant="top" src="./acessorio.jpg" alt="Acessorios" />
            <Card.Body>
              <div className="text-center">
                <Card.Title>Acessórios</Card.Title>
                <Card.Text className="text-success font-weight-bold">Modelos Unissex</Card.Text>
                <Card.Text className="card-text text-justify mb-4">
                  Navegue pelo nosso catálogo de acessórios e se maravilhe com as diferentes opções!
                </Card.Text>
              </div>
              <div className="text-center">
                <Button variant="warning" href="/acessorios">Mais informações</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Accordion className="accordion accordion-flush col-md-6 mx-auto" id="accordionFlushExample">
        <Accordion.Item eventKey="0">
          <Accordion.Header id="flush-headingOne">Materiais da Loja</Accordion.Header>
          <Accordion.Body id="flush-collapseOne">
            Todos os materiais utilizados na loja estão mencionados <a style={{color: "blue"}}>aqui</a>.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header id="flush-headingTwo">Tipos de Produtos da Loja</Accordion.Header>
          <Accordion.Body id="flush-collapseTwo">
             Todos os tipos de produto vendidos pela loja estão mencionados <a style={{color: "blue"}}>aqui</a>.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header id="flush-headingThree">Políticas da Loja</Accordion.Header>
          <Accordion.Body id="flush-collapseThree">
            A política de privacidade e reembolso da Loja está <a style={{color: "blue"}}>aqui</a>, disponível para leitura.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-sm-7">
              <h5>Nossos Produtos</h5>
              <ul className="list-unstyled">
                <li><a href="/roupas">Roupas e Vestidos</a></li>
                <li><a href="/calcas">Calças e Saias</a></li>
                <li><a href="/acessorios">Acessórios</a></li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-5">
              <h5>Contato</h5>
              <ul className="list-unstyled">
                <li><i className="fas fa-phone"></i> (21) 2250-0125</li>
                <li><i className="fas fa-phone"></i> (21) 91295-3002</li>
                <li><i className="fas fa-envelope-square"></i> <a href="mailto:zxyzxy@gmail.com.br">zxyzxy@gmail.com.br</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <script src="assets/js/jquery-3.3.1.js"></script>
      <script src="assets/js/popper.js"></script>
      <script src="assets/js/bootstrap.js"></script>
      <script src="assets/js/script.js"></script>
    </div>
  );
} 
export default HomePage;



/*     <div className="col">
      <img src="./tecido-preto.jpg" style={{width: "1300px"}}>
      </img>
    <div className="row">
      <div className="col-lg-2">
        <h5>Categorias</h5>
        <div className="nav flex-column nav-pills">
          <NavLink aria-current="page" className="nav-link" to="/">
            Todos
          </NavLink>
          <NavLink aria-current="page" className="nav-link" to="/calcas">
            Calças
          </NavLink>
          <NavLink aria-current="page" className="nav-link" to="/roupas">
            Roupas
          </NavLink>
          <NavLink aria-current="page" className="nav-link" to="/acessorios">
            Acessórios
          </NavLink>
        </div>
      </div>
      <div className="col-lg-10">
        <Outlet />
      </div>
    </div>
    </div> */
