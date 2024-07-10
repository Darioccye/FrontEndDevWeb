import { Link } from "react-router-dom";
import cart from "/shoppingcart.png"
import roupaLogo from "/roupa-logo.png"
import useProdutosComPaginacao from "../hooks/useProdutosComPaginacao";
import useProdutoStore from "../store/produtoStore";
import useTotalCarrinho from "../hooks/useTotalCarrinho";
import useUsuarioStore from "../store/usuarioStore";

function NavBar() {
  const pagina = useProdutoStore((s) => s.pagina);
  const tamanho = useProdutoStore((s) => s.tamanho);
  const nome = useProdutoStore((s) => s.nome);
  const filtro = useProdutoStore((s) => s.filtro);
  const idUsuario = useUsuarioStore((s) => s.idUsuario)

  const {
    data: resultadoPaginado,
    isPending: carregandoProdutos,
    error: errorProdutos,
  } = useProdutosComPaginacao({ pagina, tamanho, nome , filtro});

  const {
    data: totalCarrinho,
    isPending: carregandoTotal,
    error: errortotal,
  } = useTotalCarrinho(idUsuario)

  const totalFormatado = totalCarrinho !== undefined ? totalCarrinho.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  }): '';

  if (carregandoProdutos) return <h6>Carregando...</h6>;
  if (errorProdutos) throw errorProdutos;

  const produtos = resultadoPaginado.itens;

  return (
    <>
      <div className="container mt-3 mb-2">
        <div className="row">
          <div className="col-3 d-flex align-items-center">
            <Link to="/">
              <img className="d-none d-md-block" src={roupaLogo} style={{ width: "100px" }} />
            </Link>
          </div>

          <h5 className="col d-flex align-items-center">
            <Link to="/catalogo" style={{ textDecoration: "none" , color: "#DDD"}}>
                  Catálogo
                </Link>
            </h5>

            <h5 className="col d-flex align-items-center">
            <Link to="/listar-produtos" style={{ textDecoration: "none" , color: "#DDD"}}>
                  Pesquisa
                </Link>
            </h5>

            <h5 className="col d-flex align-items-center">
            <Link to="/cadastrar-produto" style={{ textDecoration: "none" , color: "#DDD"}}>
                  Cadastro de Produtos
                </Link>
            </h5>

            <h5 className="col d-flex align-items-center">
              <Link to="/login" style={{textDecoration: "none", color: "#DDD"}}>
                Login
              </Link>
            </h5>

            <h5 className="col">
            <Link to="/carrinho" style={{ textDecoration: "none", color: "#DDD"}}>
                  <img className="d-none d-md-block" src={cart} style={{ width: "35px" }} />
                  Carrinho
                  <br></br>
                </Link>
                R${" "}
                {totalFormatado}
            </h5>

        </div>
      </div>

      <div className="bg-dark" style={{ padding: "3px" }}></div>
    </>
  );
}
export default NavBar;
