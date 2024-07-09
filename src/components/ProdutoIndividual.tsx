import { useParams , useNavigate} from "react-router-dom";
import useSingularProduto from "../hooks/useSingularProduto"
import { Link } from "react-router-dom";
import useProdutoStore from "../store/produtoStore";
import Produto from "../interfaces/produto"
import useRemoverProduto from "../hooks/useRemoverProduto";


const ProdutoIndividual = () => {
  const { id } = useParams();
  const IdNumber = Number(id)
  const setProdutoSelecionado = useProdutoStore((s) => s.setProdutoSelecionado);
  const removerProduto = useRemoverProduto();
  const navigate = useNavigate();


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

  const alterar = (produto: Produto) => {
    setProdutoSelecionado(produto)
    navigate('/cadastrar-produto');
  }

  const deletar = () => {
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
            <h4 style={{fontWeight:"bold"}}>
              ID: {data.id}
            </h4>
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
    <a className="btn btn-primary" onClick={() => alterar(data)} style={{textAlign:"center", marginBottom:"50px"}}>Alterar</a> 
    <a className="btn btn-danger" onClick={() => deletar()} style={{textAlign:"center"}}>Deletar</a>
  </div>
  </div>
</div>) : 
            (<div>
                <h4 style={{textAlign:"center", marginTop:"80px"}}>Produto Removido</h4>
                <Link to="/" style={{textAlign:"center", alignItems:"center", position:"absolute", top:"30%", left:"50%", transform: "translate(-50%, -50%)"}} className="btn btn-primary">Clique aqui para voltar para a tela inicial</Link>
            </div>)}
</>
    )
};
export default ProdutoIndividual;