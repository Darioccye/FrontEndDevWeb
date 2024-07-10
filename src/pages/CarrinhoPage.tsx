import useRecuperarCarrinho from "../hooks/useRecuperarCarrinho";
import useUsuarioStore from "../store/usuarioStore";
import useRecuperarQuantidadeCarrinho from "../hooks/useRecuperarQuantidadeCarrinho";
import useAdicionarCarrinho from "../hooks/useAdicionarCarrinho";
import useSubtrairCarrinho from "../hooks/useSubtrairCarrinho";
import useRemoverCarrinho from "../hooks/useRemoverCarrinho";
import useTotalCarrinho from "../hooks/useTotalCarrinho";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'



const CarrinhoPage = () => {
  const idUsuario = useUsuarioStore((s) => s.idUsuario);
  // const produtosCarrinho = useRecuperarCarrinho()
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

  const totalFormatado = totalCarrinho !== undefined ? totalCarrinho.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  }): '';

  const {
    data: listaQuantidade,
    isPending: carregandoQuantidade,
    error: errorquantidade,
  } = useRecuperarQuantidadeCarrinho(idUsuario);


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

  function printCarrinho(){
    console.log(listaProdutos)
    console.log(listaQuantidade)
  }



  return (
    <table className="table table-responsive table-sm table-hover">
          <thead>
            <tr>
            <th className="align-middle text-center">ID</th>
              <th className="align-middle text-center"></th>
              <th className="align-middle text-center">Nome</th>
              <th className="align-middle text-center">Tamanho</th>
              <th className="align-middle text-center">Quantidade</th>
              <th className="align-middle text-center" >Preço</th>
              <th className="align-middle text-center" >Total</th>
            </tr>
          </thead>
          <tbody>
            {listaProdutos.map((produto, indice) => (
              <tr key={produto.id}>
                <td width="10%" className="align-middle text-center">
                    {produto.id}
                </td>
                <td width="10%" className="align-middle text-center">
                  <img src={produto.imagem} width={100} />
                </td>
                <td width="10%" className="align-middle text-center">
                    {produto.nome}
                </td>
                <td width="10%" className="align-middle text-center">
                  {produto.tamanho}
                </td>
                <td width="12%" className="align-middle text-center">
                 <a onClick={() => subtrairProduto(produto.id!)}><FontAwesomeIcon icon={faCircleMinus}/></a>
                     {listaQuantidade[indice]}                     
                   <a onClick={() => adicionarProduto(produto.id!)}><FontAwesomeIcon icon={faCirclePlus}/>
                    </a> 
                </td>
                <td width="10%" className="align-middle text-center">  
                  {produto.preco.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    useGrouping: true,
                  })}
                </td>
                <td width="12%" className="align-middle text-center">
                  {(produto.preco*listaQuantidade[indice]).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    useGrouping: true,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot style= {{transform:"translateX(71%)"}}>
            <td style={{fontWeight:"bold", fontSize: "25px"}}>
              Total: 
            </td>
            <td style={{fontWeight:"bold", fontSize: "25px"}}>
              R$ {totalFormatado}
              </td>
          </tfoot>
        </table>
  )
};
export default CarrinhoPage;
