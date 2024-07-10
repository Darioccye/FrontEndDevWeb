import { NavLink, Outlet } from "react-router-dom";

const CatalogoPage = () => {
  return (
    <div className="row">
      <div className="col-lg-2">
        <h5>Categorias</h5>
        <div style={{ padding: "10px" }}></div>
        <div className="nav flex-column nav-pills">
          <NavLink aria-current="page" className="nav-link" to="/catalogo/">
            Todos
          </NavLink>
          <div style={{ padding: "10px" }}></div>
          <NavLink aria-current="page" className="nav-link" to="/catalogo/calcas">
            Calças
          </NavLink>
          <div style={{ padding: "10px" }}></div>
          <NavLink aria-current="page" className="nav-link" to="/catalogo/roupas">
            Roupas
          </NavLink>
          <div style={{ padding: "10px" }}></div>
          <NavLink aria-current="page" className="nav-link" to="/catalogo/acessorios">
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

export default CatalogoPage;
