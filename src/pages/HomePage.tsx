import { Link, NavLink, Outlet } from "react-router-dom";
import {Button, Accordion, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'rgb(124, 124, 124)' }}>

      <div className="row mb-4">
      <img src="./banner-loja.jpg" style={{objectFit: "cover"}}></img>
      <div style={{ padding: "10px" }}></div>
        <div className="col-lg-5 col-md-6 mx-auto mb-4 mr-3">
          <Card className="mb-3" style={{ backgroundColor: 'rgb(187, 187, 187)' }}>
            <Card.Img variant="top" src="./roupavermelha.jpg" alt="Roupas" />
            <Card.Body>
              <div className="text-center">
                <Card.Title>Roupas</Card.Title>
                <Card.Text className="text-danger font-weight-bold">Modelos Femininos</Card.Text>
                <Card.Text className="card-text text-justify mb-4">
                  Dê uma olhada em nossas Roupas e se encante com a qualidade e preço!
                </Card.Text>
              </div>
              <div className="text-center">
              <Link className="btn btn-warning" to="/catalogo/roupas">Mais informações</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-5 col-md-6 mx-auto">
          <Card className="mb-3" style={{ backgroundColor: 'rgb(187, 187, 187)' }}>
            <Card.Img variant="top" src="./calcaamarela.jpg" alt="Calcas" />
            <Card.Body>
              <div className="text-center">
                <Card.Title>Calças</Card.Title>
                <Card.Text className="text-primary font-weight-bold">Modelos Masculinos</Card.Text>
                <Card.Text className="card-text text-justify mb-4">
                  Nossas calças do mais alto nível social darão um charme adicional para o seu Look!
                </Card.Text>
              </div>
              <div className="text-center">
              <Link className="btn btn-warning" to="/catalogo/calcas">Mais informações</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-5 col-md-6 mx-auto mt-4">
          <Card className="mb-3" style={{ backgroundColor: 'rgb(187, 187, 187)' }}>
            <Card.Img variant="top" src="./anelbranco.jpg" alt="Acessorios" />
            <Card.Body>
              <div className="text-center">
                <Card.Title>Acessórios</Card.Title>
                <Card.Text className="text-success font-weight-bold">Modelos Unissex</Card.Text>
                <Card.Text className="card-text text-justify mb-4">
                  Navegue pelo nosso catálogo de acessórios e se maravilhe com as diferentes opções!
                </Card.Text>
              </div>
              <div className="text-center">
                <Link className="btn btn-warning" to="/catalogo/acessorios">Mais informações</Link>
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
      <div style={{ padding: "10px" }}></div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-sm-7">
              <h5>Nossos Produtos</h5>
              <ul className="list-unstyled">
                <li><Link to="/catalogo/roupas" style={{color:"#CCCCCC"}}>Roupas</Link></li>
                <li><Link to="/catalogo/calcas" style={{color:"#CCCCCC"}}>Calças</Link></li>
                <li><Link to="/catalogo/acessorios" style={{color:"#CCCCCC"}}>Acessórios</Link></li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-5">
              <h5>Contato</h5>
              <ul className="list-unstyled">
                <li><i className="fas fa-phone"></i> (21) 2250-0125</li>
                <li><i className="fas fa-phone"></i> (21) 91295-3002</li>
                <li><i className="fas fa-envelope-square"></i> <a href="mailto:zxyzxy@gmail.com.br" style={{color:"#CCCCCC"}}>zxyzxy@gmail.com.br</a></li>
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
