import { NavLink, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
