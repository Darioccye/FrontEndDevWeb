import dayjs from "dayjs";
import useProdutosComPaginacao from "../hooks/useProdutosComPaginacao";
import useProdutoStore from "../store/produtoStore";
import "../index.css"
import { useState } from 'react';


const TabelaDeProdutos = () => {
  const pagina = useProdutoStore((s) => s.pagina);
  const tamanho = useProdutoStore((s) => s.tamanho);
  const nome = useProdutoStore((s) => s.nome);
  const [filtro, setFiltro] = useState(0);

  
  const {
    data: resultadoPaginado,
    isPending: carregandoProdutos,
    error: errorProdutos,
  } = useProdutosComPaginacao({ pagina, tamanho, nome, filtro});

  if (carregandoProdutos) return <h6>Carregando...</h6>;
  if (errorProdutos) throw errorProdutos;

  const produtos = resultadoPaginado.itens;

  function filter(sortType: number){
    if(filtro == sortType){
      setFiltro(sortType+6)
    }
    else{
      setFiltro(sortType)
    }
  }

  return (
    
    //As cores do background tiveram que ficar no style pois, quando eu mudava no index.css, nada acontecia.
    <div>
    <table className="table table-responsive table-sm table-hover table-bordered" style={{backgroundColor:"#CCCCCC", borderColor:"#AAAAAA"}}>
      <thead>
        <tr>
          <th className="align-middle text-center" style={{backgroundColor:"#CCCCCC"}}>Imagem</th>
          <th className="align-middle text-center"style={{backgroundColor:"#CCCCCC"}}><a onClick={() => filter(1)}>Categoria</a></th>
          <th className="align-middle text-center"style={{backgroundColor:"#CCCCCC"}}><a onClick={() => filter(2)}>Nome </a></th>
          <th className="align-middle text-center"style={{backgroundColor:"#CCCCCC"}}>Tamanho</th>
          <th className="align-middle text-center"style={{backgroundColor:"#CCCCCC"}}><a onClick={() => filter(3)}>Data de Cadastro</a></th>
          <th className="align-middle text-center"style={{backgroundColor:"#CCCCCC"}}><a onClick={() => filter(4)}>Quantidade</a></th>
          <th className="align-middle text-center"style={{backgroundColor:"#CCCCCC"}}><a onClick={() => filter(5)}>Preço</a></th>
        </tr>
      </thead>
      <tbody>
        {produtos?.map((produto) => (
          <tr key={produto.id}>
            <td width="18%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
              <img src={produto.imagem} width={45} />
            </td>
            <td width="14%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
              {produto.categoria.nome}
            </td>
            <td width="20%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
                {produto.nome}
            </td>
            <td width="10%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
              {produto.tamanho}
            </td>
            <td width="16%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
              {dayjs(produto.dataCadastro).format("DD/MM/YYYY")}
            </td>
            <td width="12%" className="align-middle text-center"style={{backgroundColor:"#DDDDDD"}}>
              {produto.qtdEstoque.toLocaleString("pt-BR", {
                useGrouping: true,
              })}
            </td>
            <td width="10%" className="align-middle text-center pe-3"style={{backgroundColor:"#DDDDDD"}}>  
              {produto.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TabelaDeProdutos;
