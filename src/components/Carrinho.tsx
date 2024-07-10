import useRecuperarCarrinho from "../hooks/useRecuperarCarrinho";
import useUsuarioStore from "../store/usuarioStore";
import useRecuperarQuantidadeCarrinho from "../hooks/useRecuperarQuantidadeCarrinho";
import useAdicionarCarrinho from "../hooks/useAdicionarCarrinho";
import useSubtrairCarrinho from "../hooks/useSubtrairCarrinho";
import useRemoverCarrinho from "../hooks/useRemoverCarrinho";
import useTotalCarrinho from "../hooks/useTotalCarrinho";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus, faTrash} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";



const Carrinho = () => {
  const idUsuario = useUsuarioStore((s) => s.idUsuario);
  const subProduto = useSubtrairCarrinho(idUsuario)
  const addProduto = useAdicionarCarrinho(idUsuario)
  const remProduto = useRemoverCarrinho(idUsuario)

  const tratarAdicao = (idProduto: number) =>{
    addProduto.mutate(idProduto)
  }

  const tratarSubtracao = (idProduto: number) => {
    subProduto.mutate(idProduto)
  }

  const tratarRemocao = (idProduto: number) => {
    remProduto.mutate(idProduto)
  }



  const {
    data: listaProdutos,
    isPending: carregandoProdutos,
    error: errorprodutos,
  } = useRecuperarCarrinho(idUsuario);

  const {
    data: totalCarrinho,
    isPending: carregandoTotal,
    error: errortotal,
  } = useTotalCarrinho(idUsuario)

  const {
    data: listaQuantidade,
    isPending: carregandoQuantidade,
    error: errorquantidade,
  } = useRecuperarQuantidadeCarrinho(idUsuario);


  const totalFormatado = totalCarrinho !== undefined ? totalCarrinho.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  }): '';



  if (carregandoTotal) return <h6>Carregando...</h6>;
  if (errortotal) throw errortotal;

  if (carregandoProdutos) return <h6>Carregando...</h6>;
  if (errorprodutos) throw errorprodutos;

  if (carregandoQuantidade) return <h6>Carregando...</h6>;
  if (errorquantidade) throw errorquantidade;

  function subtrairProduto(idProduto: number){
    tratarSubtracao(idProduto);
  }

  function adicionarProduto(idProduto: number){
    tratarAdicao(idProduto)
  }

  function removerProduto(idProduto: number){
    tratarRemocao(idProduto)
  }



  return (
    //As cores do background tiveram que ficar no style pois, quando eu mudava no index.css, nada acontecia.
    <div>
    <table className="table table-responsive table-sm table-hover" style={{backgroundColor:"#CCCCCC", borderColor:"#AAAAAA"}}>
          <thead>
            <tr>
              <th className="align-middle text-center"style={{backgroundColor:"#CCCCCC"}}></th>
              <th className="align-middle text-center"style={{backgroundColor:"#CCCCCC"}}>Nome do Produto</th>
              <th className="align-middle text-center"style={{backgroundColor:"#CCCCCC"}}>Tamanho</th>
              <th className="align-middle text-center"style={{backgroundColor:"#CCCCCC"}}>Quantidade</th>
              <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Preço Unitário</th>
              <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Preço Total</th>
              <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Remover</th>
            </tr>
          </thead>
          <tbody>
            {listaProdutos.map((produto, indice) => (
              <tr key={produto.id}>
                <td width="20%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
                  <img src={produto.imagem} width={100} />
                </td>
                <td width="15%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
                    {produto.nome}
                </td>
                <td width="15%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
                  {produto.tamanho}
                </td>
                <td width="20%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
                 <a onClick={() => subtrairProduto(produto.id!)} style={{margin:"5px"}}><FontAwesomeIcon icon={faCircleMinus}/></a>
                      {listaQuantidade[indice]}
                   <a onClick={() => adicionarProduto(produto.id!)} style={{margin:"5px"}}><FontAwesomeIcon icon={faCirclePlus}/>
                    </a> 
                </td>
                <td width="12%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>  
                  {produto.preco.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    useGrouping: true,
                  })}
                </td>
                <td width="25%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
                  {(produto.preco*listaQuantidade[indice]).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    useGrouping: true,
                  })}
                </td>
                <td width="15%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
                  <a className="btn btn-danger" onClick={() => removerProduto(produto.id!)}><FontAwesomeIcon icon={faTrash}/></a>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot style= {{transform:"translateX(61%)"}}>
            <tr>
            <td style={{fontWeight:"bold", fontSize: "25px", backgroundColor:"#CCCCCC"}}>
              Total: 
            </td>
            <td style={{fontWeight:"bold", fontSize: "25px", backgroundColor:"#CCCCCC"}}>
              R$ {totalFormatado}
              </td>
              </tr>
          </tfoot>
        </table>
        <div style={{ padding: "10px" }}></div>
        <div className="row">
          <div className="col-6" style={{}}>
          <Link to="/" className="btn btn-primary btn-sm w-100" style={{}} > Voltar à Loja </Link>
        </div>
        <div className="col-6" style={{}}>
          <a className="btn btn-warning btn-sm w-100"> Finalizar Compra </a>
        </div>
        
        </div>
        </div>
  )
};
export default Carrinho;
