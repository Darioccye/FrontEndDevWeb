import dayjs from "dayjs";
import deleteIcon from "../assets/skin/database_delete.png";
import useProdutosComPaginacao from "../hooks/useProdutosComPaginacao";
import useProdutoStore from "../store/produtoStore";
import useRemoverProduto from "../hooks/useRemoverProduto";
import "../index.css"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'


const TabelaDeProdutosPrivado = () => {
  const pagina = useProdutoStore((s) => s.pagina);
  const tamanho = useProdutoStore((s) => s.tamanho);
  const nome = useProdutoStore((s) => s.nome);
  const [filtro, setFiltro] = useState(0);
  const [identificador, setIdentificador] = useState(0)

  const setPagina = useProdutoStore((s) => s.setPagina);
  const setProdutoSelecionado = useProdutoStore((s) => s.setProdutoSelecionado);

  const removerProduto = useRemoverProduto();

  const tratarRemocao = (id: number) => {
    setIdentificador(id)
    removerProduto.mutate(id)
    setPagina(0);
  };

  
  const {
    data: resultadoPaginado,
    isPending: carregandoProdutos,
    error: errorProdutos,
  } = useProdutosComPaginacao({ pagina, tamanho, nome , filtro});

  if (carregandoProdutos) return <h6>Carregando...</h6>;
  if (errorProdutos) throw errorProdutos;

  let produtos = resultadoPaginado.itens;


  function filter(sortType: number){
    if(filtro == sortType){
      setFiltro(sortType+6)
    }
    else{
      setFiltro(sortType)
    }
    setPagina(0);
  }



  return (
    //As cores do background tiveram que ficar no style pois, quando eu mudava no index.css, nada acontecia.

    <table className="table table-responsive table-sm table-hover table-bordered" style={{backgroundColor:"#CCCCCC", borderColor:"#AAAAAA"}}>
      <thead style={{backgroundColor:"#04AA6D"}}>
        <tr>
        <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Id <a onClick={() => filter(0)}><FontAwesomeIcon icon={faSort} /></a></th>
          <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Imagem</th>
          <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Categoria <a onClick={() => filter(1)}><FontAwesomeIcon icon={faSort} /></a></th>
          <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Nome <a onClick={() => filter(2)}><FontAwesomeIcon icon={faSort} /></a></th>
          <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Tamanho</th>
          <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Data de Cadastro <a onClick={() => filter(3)}><FontAwesomeIcon icon={faSort} /></a></th>
          <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Quantidade <a onClick={() => filter(4)}><FontAwesomeIcon icon={faSort} /></a></th>
          <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Preço <a onClick={() => filter(5)}><FontAwesomeIcon icon={faSort} /></a></th>
          <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Ação</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto) => (
          <tr key={produto.id}>
            <td width="8%" className="align-middle text-center" style={{backgroundColor:"#DDDDDD"}}>
              {produto.id}
            </td>
            <td width="7%" className="align-middle text-center" style={{backgroundColor:"#DDDDDD"}}>
              <img src={produto.imagem} width={45} />
            </td>
            <td width="10%" className="align-middle text-center" style={{backgroundColor:"#DDDDDD"}}>
              {produto.categoria.nome}
            </td>
            <td width="16%" className="align-middle text-center" style={{backgroundColor:"#DDDDDD"}}>
              <a
                className="link-underline"
                onClick={() => {
                  setProdutoSelecionado(produto);
                }}
              >
                {produto.nome}
              </a>
            </td>
            <td width="10%" className="align-middle text-center" style={{backgroundColor:"#DDDDDD"}}>
              {produto.tamanho}
            </td>
            <td width="15%" className="align-middle text-center" style={{backgroundColor:"#DDDDDD"}}>
              {dayjs(produto.dataCadastro).format("DD/MM/YYYY")}
            </td>
            <td width="12%" className="align-middle text-center" style={{backgroundColor:"#DDDDDD"}}>
              {produto.qtdEstoque.toLocaleString("pt-BR", {
                useGrouping: true,
              })}
            </td>
            <td width="10%" className="align-middle text-center pe-3" style={{backgroundColor:"#DDDDDD"}}>  
              {produto.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}
            </td>
            <td width="12%" className="align-middle text-center" style={{backgroundColor:"#DDDDDD"}}>
            <button id="btn" onClick={() => tratarRemocao(produto.id!) } className="btn btn-danger btn-sm" >
            {removerProduto.isPending && produto.id == identificador ? (
        <div className="spinner-active"></div>
      ) : <img src={deleteIcon} alt="Imagem do Botão" className="button-image"/>}
       Remover
                </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr >
          <td colSpan={4} style={{backgroundColor:"#CCCCCC"}}></td>
          <td className="align-middle text-center fw-bold" style={{backgroundColor:"#CCCCCC"}}>Total</td>
          <td className="align-middle text-center fw-bold" colSpan={2} style={{backgroundColor:"#CCCCCC"}}>
            R${" "}
            
            {produtos
              .reduce((total, produto) => total + produto.qtdEstoque * produto.preco, 0)
              .toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}
          </td>
          <td style={{backgroundColor:"#CCCCCC"}}></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TabelaDeProdutosPrivado;
