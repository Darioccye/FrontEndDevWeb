import useRecuperarCarrinho from "../hooks/useRecuperarCarrinho";
import useUsuarioStore from "../store/usuarioStore";
import useRecuperarQuantidadeCarrinho from "../hooks/useRecuperarQuantidadeCarrinho";
import useAdicionarCarrinho from "../hooks/useAdicionarCarrinho";
import useSubtrairCarrinho from "../hooks/useSubtrairCarrinho";
import useRemoverCarrinho from "../hooks/useRemoverCarrinho";
import { useState } from "react";


const CarrinhoPage = () => {
  const idUsuario = useUsuarioStore((s) => s.idUsuario);
  const recuperarCarrinho = useRecuperarCarrinho(idUsuario);
 /*  const [idProduto, setIdProduto] = useState(0); */
  const recuperarQuantidade = useRecuperarQuantidadeCarrinho(idUsuario);
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
    data: listaQuantidade,
    isPending: carregandoQuantidade,
    error: errorquantidade,
  } = useRecuperarQuantidadeCarrinho(idUsuario);

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
    <div>
      
  <h4 className="text-center" >Você está quase terminando! Verifique seus produtos e finalize a sua compra</h4>


  <div className="list-group mx-auto" >
    <a onClick={() => subtrairProduto(1)} className="list-group-item list-group-item-action  " aria-current="true">
      Produto 1
    </a>
    <a onClick={() => adicionarProduto(2)} className="list-group-item list-group-item-action">Produto 2</a>
    <a onClick={() => removerProduto(2)} className="list-group-item list-group-item-action">Produto 3</a>
    <a onClick={() => adicionarProduto(3)} className="list-group-item list-group-item-action">Produto 4</a>
    <a onClick={() => printCarrinho()} className="list-group-item list-group-item-action">Produto 4</a>
    <a className="list-group-item list-group-item-action disabled" aria-disabled="true">Produto Indisponível  :( </a>
  </div>

  </div>
  );
};
export default CarrinhoPage;
