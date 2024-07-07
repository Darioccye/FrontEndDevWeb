import CadastroDeProdutosForm from "../components/CadastroDeProdutosForm";
import Paginacao from "../components/Paginacao";
import Pesquisa from "../components/Pesquisa";
import TabelaDeProdutos from "../components/TabelaDeProdutosPrivado";

const CadastroDeProdutosPage = () => {
  return (
    <>
      <h4>Cadastro de Produtos</h4>
      <hr className="mt-1" />
      <CadastroDeProdutosForm />

      <h4>Lista de Produtos</h4>
      <hr className="mt-1" />
      <Pesquisa />
      <TabelaDeProdutos />
      <Paginacao />
    </>
  );
};
export default CadastroDeProdutosPage;
