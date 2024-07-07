import { useParams } from "react-router-dom";
import useSingularProduto from "../hooks/useSingularProduto"
import { Link } from "react-router-dom";
import useProdutoStore from "../store/produtoStore";
import Produto from "../interfaces/produto"
import useRemoverProduto from "../hooks/useRemoverProduto";
import TabelaDeProdutosPrivado from "../components/TabelaDeProdutosPrivado";

const ProdutoPage = () => {
  const { id } = useParams();
  const IdNumber = Number(id)
  const setProdutoSelecionado = useProdutoStore((s) => s.setProdutoSelecionado);
  const removerProduto = useRemoverProduto();


  const tratarRemocao = (id: number) => {
    removerProduto.mutate(id)
  };

  const {
    data,
    isPending: carregandoProdutos,
    error: errorprodutos,
  } = useSingularProduto(IdNumber);



  if (carregandoProdutos) return <h6>Carregando...</h6>;
  if (errorprodutos) throw errorprodutos;
  
  console.log(data.nome)
  console.log(id)

  const alterar = (click: React.MouseEvent<HTMLAnchorElement>, produto: Produto) => {
    click.preventDefault
    setProdutoSelecionado(produto)
  }

  const deletar = (click: React.MouseEvent<HTMLAnchorElement>) => {
    click.preventDefault
    tratarRemocao(IdNumber)
  }


  return (
    <>{data ? 
(<div className="card">
  <div className="card-header">
    Página de {data.nome}
  </div>
  <div className="card-body d-flex">
    <div className="col d-flex">
        <img src={"../" + data.imagem} width={'300px'}>
        </img>
        <div className="row" style={{padding:"30px"}}>
            <h5>
              Nome: {data.nome}  
            </h5>
            <h5>
                Categoria: {data.categoria.nome}
            </h5>
            <h5>
                Preço: {data.preco}
            </h5>
            <h5>
                Estoque: {data.qtdEstoque}
            </h5>
            <h5>
                Data Cadastro: {data.dataCadastro.toString()}
            </h5>
            {data.disponivel ? (<h5>
                Disponível: Sim
            </h5>) : (<h5>
                Disponível: Não
            </h5>)}
        </div>
    </div>
    <div className="row">
    <Link to="/cadastrar-produto" className="btn btn-primary" onClick={(event) => alterar(event, data)} style={{textAlign:"center", marginBottom:"50px"}}>Alterar</Link>
    <a className="btn btn-danger" onClick={(event) => deletar(event)} style={{textAlign:"center"}}>Deletar</a>
  </div>
  </div>
</div>) : 
            (<div>
                <h4 style={{textAlign:"center", marginTop:"80px"}}>Produto Removido</h4>
                <Link to="/" style={{textAlign:"center", alignItems:"center", marginLeft:"490px", marginTop:"30px"}} className="btn btn-primary">Clique aqui para voltar para a tela inicial</Link>
            </div>)}
</>
    )
};
export default ProdutoPage;