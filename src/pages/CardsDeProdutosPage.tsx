import { useParams } from "react-router-dom";
import Card from "../components/Card";
import useProdutosPaginadosPorSlugDaCategoria from "../hooks/useProdutosPaginadosPorSlugDaCategoria";
import InfiniteScroll from "react-infinite-scroll-component";
import useAdicionarCarrinho from "../hooks/useAdicionarCarrinho";
import useUsuarioStore from "../store/usuarioStore";
import useRecuperarCarrinho from "../hooks/useRecuperarCarrinho";
import useRecuperarQuantidadeCarrinho from "../hooks/useRecuperarQuantidadeCarrinho";
import Produto from "../interfaces/produto";

const CardsDeProdutosPage = () => {
  const { slug } = useParams();
  const tamanho = 12;
  const idUsuario = useUsuarioStore((s) => (s).idUsuario)
  const addProduto  = useAdicionarCarrinho(idUsuario);



  const {
    data,
    isPending: carregandoProdutos,
    error: errorprodutos,
    hasNextPage,
    fetchNextPage
  } = useProdutosPaginadosPorSlugDaCategoria({ tamanho, slug });

/*   const {
    data: listaProdutos,
    isPending: carregandoCarrinho,
    error: errorCarrinho,
  } = useRecuperarCarrinho(idUsuario);


  const {
    data: listaQuantidade,
    isPending: carregandoQuantidade,
    error: errorquantidade,
  } = useRecuperarQuantidadeCarrinho(idUsuario);


  if (carregandoQuantidade) return <h6>Carregando...</h6>;
  if (errorquantidade) throw errorquantidade;

  if (carregandoCarrinho) return <h6>Carregando...</h6>;
  if (errorCarrinho) throw errorCarrinho;

  const checaCarrinho = (produto: Produto) => {
    if (listaProdutos.includes(produto)){
      return true
    }
    return false
    } */

  if (carregandoProdutos) return <h6>Carregando...</h6>;
  if (errorprodutos) throw errorprodutos;


  const tratarAdicao = (idProduto: number) => {
    addProduto.mutate(idProduto);
  }

  return (
    <InfiniteScroll
      dataLength={data.pages.reduce((total, page) => total + page.itens.length, 0) }
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<h6>Carregando...</h6>}>
      <h5>{slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "Produtos"}</h5>
      <div className="row mb-3">
        {data.pages.map((page) =>
          page.itens.map((produto) => (
            <div key={produto.id} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Card
                id={produto.id}
                imagem={produto.imagem}
                titulo={produto.nome}
                descricao={produto.descricao}
                tamanho={produto.tamanho}
                preco={produto.preco.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}
                footer={
                  <input type="button" className="btn btn-primary btn-sm w-100" value="Comprar" onClick={() => tratarAdicao(produto.id!)}/>
                }
              />
            </div>
          ))
        )}
      </div>
    </InfiniteScroll>
  );
};
export default CardsDeProdutosPage;
