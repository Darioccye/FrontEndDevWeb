import useRecuperarCarrinho from "../hooks/useRecuperarCarrinho";
import useUsuarioStore from "../store/usuarioStore";
import useRecuperarQuantidadeCarrinho from "../hooks/useRecuperarQuantidadeCarrinho";
import useAdicionarCarrinho from "../hooks/useAdicionarCarrinho";
import useSubtrairCarrinho from "../hooks/useSubtrairCarrinho";
import useRemoverCarrinho from "../hooks/useRemoverCarrinho";
import { useState } from "react";
import Card from "../components/Card";
import dayjs from "dayjs";
import useTotalCarrinho from "../hooks/useTotalCarrinho";
import Produto from "../interfaces/produto";

const CarrinhoPage = () => {
  const idUsuario = useUsuarioStore((s) => s.idUsuario);
  // const produtosCarrinho = useRecuperarCarrinho()
  const subProduto = useSubtrairCarrinho(idUsuario)
  const addProduto = useAdicionarCarrinho(idUsuario)
  const remProduto = useRemoverCarrinho(idUsuario)
  let indiceProduto = 0

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

  console.log(listaQuantidade[0])

  function tabela(produto: Produto){
    indiceProduto = indiceProduto + 1
    return <tr key={produto.id}>
        <td width="18%" className="align-middle text-center">
          <img src={produto.imagem} width={100} />
        </td>
        <td width="20%" className="align-middle text-center">
            {produto.nome}
        </td>
        <td width="10%" className="align-middle text-center">
          {produto.tamanho}
        </td>
        <td width="12%" className="align-middle text-center">
          {listaQuantidade[indiceProduto].toLocaleString("pt-BR", {
            useGrouping: true,
          })}
        </td>
        <td width="20%" className="align-middle text-center">
            {totalCarrinho}
        </td>
        <td width="10%" className="align-middle text-center pe-3">  
          {produto.preco.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true,
          })}
        </td>
      </tr>
    }

  return (

<table className="table table-responsive table-sm table-hover">
      <thead>
        <tr>
          <th className="align-middle text-center"></th>
          <th className="align-middle text-center">Nome</th>
          <th className="align-middle text-center">Tamanho</th>
          <th className="align-middle text-center">Quantidade</th>
          <th className="align-middle text-center" >Preço</th>
           <th className="align-middle text-center" >Preço</th>
        </tr>
      </thead>
      <tbody>
        {listaProdutos.map((produto) => (
          <tr key={produto.id}>
            <td width="18%" className="align-middle text-center">
              <img src={produto.imagem} width={100} />
            </td>
            <td width="20%" className="align-middle text-center">
                {produto.nome}
            </td>
            <td width="10%" className="align-middle text-center">
              {produto.tamanho}
            </td>
            <td width="12%" className="align-middle text-center">
              {listaQuantidade[indiceProduto].toLocaleString("pt-BR", {
                useGrouping: true,
              })}
            </td>
            <td width="20%" className="align-middle text-center">
                {totalCarrinho}
            </td>
            <td width="10%" className="align-middle text-center pe-3">  
              {produto.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot style= {{transform:"translateX(70%)"}}>
        <td style={{fontWeight:"bold", fontSize: "25px"}}>
          Total: 
        </td>
        <td style={{fontWeight:"bold", fontSize: "25px"}}>
          R$ {totalCarrinho.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true,
          })}
          </td>
      </tfoot>
    </table>
  )
};
export default CarrinhoPage;
