const CarrinhoPage = () => {
  return (
    <div>
      
  <h4 className="text-center" >Você está quase terminando! Verifique seus produtos e finalize a sua compra</h4>


  <div className="list-group mx-auto" >
    <a href="#produto-1" className="list-group-item list-group-item-action  " aria-current="true">
      Produto 1
    </a>
    <a href="#produto-2" className="list-group-item list-group-item-action">Produto 2</a>
    <a href="#produto-3" className="list-group-item list-group-item-action">Produto 3</a>
    <a href="#produto-4" className="list-group-item list-group-item-action">Produto 4</a>
    <a className="list-group-item list-group-item-action disabled" aria-disabled="true">Produto Indisponível  :( </a>
  </div>

  </div>
  );
};
export default CarrinhoPage;
