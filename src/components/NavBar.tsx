import { Link } from "react-router-dom";
import cart from "/shoppingcart.png"
import roupaLogo from "/roupa-logo.png"
import useProdutosComPaginacao from "../hooks/useProdutosComPaginacao";
import useProdutoStore from "../store/produtoStore";

function NavBar() {
  const pagina = useProdutoStore((s) => s.pagina);
  const tamanho = useProdutoStore((s) => s.tamanho);
  const nome = useProdutoStore((s) => s.nome);

  const {
    data: resultadoPaginado,
    isPending: carregandoProdutos,
    error: errorProdutos,
  } = useProdutosComPaginacao({ pagina, tamanho, nome });

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
            <Link to="/listar-produtos" style={{ textDecoration: "none" }}>
                  Listar produtos
                </Link>
            </h5>

            <h5 className="col d-flex align-items-center">
            <Link to="/cadastrar-produto" style={{ textDecoration: "none" }}>
                  Cadastrar produto
                </Link>
            </h5>

            <h5 className="col d-flex align-items-center">
              <Link to="/login" style={{textDecoration: "none"}}>
                Login
              </Link>
            </h5>

            <h5 className="col">
            <Link to="/carrinho" style={{ textDecoration: "none" }}>
                  <img className="d-none d-md-block" src={cart} style={{ width: "35px" }} />
                  Carrinho
                  <br></br>
                </Link>
                R${" "}
                {produtos
                  .reduce((total, produto) => total + produto.qtdEstoque * produto.preco, 0)
                  .toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    useGrouping: true,
                  })}
            </h5>

        </div>
      </div>

      <div className="bg-danger" style={{ padding: "3px" }}></div>
    </>
  );
}
export default NavBar;
