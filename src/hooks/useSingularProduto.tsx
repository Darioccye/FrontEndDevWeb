import { useQuery } from "@tanstack/react-query";
import useAPI from "./useAPI";
import { URL_PRODUTO } from "../util/constants";
import Produto from "../interfaces/produto";

const useSingularProduto = (id: number) => {
  const {recuperarUm} = useAPI<Produto>(URL_PRODUTO);

  return useQuery({
    queryKey: ["produtos", id],
    queryFn: () => recuperarUm(id),
    staleTime: 10_000,
  })
};
export default useSingularProduto;



