import { useMutation, useQueryClient } from "@tanstack/react-query";
import Produto from "../interfaces/produto";
import { URL_PRODUTO } from "../util/constants";
import useAPI from "./useAPI";

const useRemoverProduto = () => {
  const remover = useAPI<Produto>(URL_PRODUTO).remover;

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => remover(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["produtos"]
      });
      queryClient.invalidateQueries({
        queryKey: ["carrinho"]
      })
    }
    
  });
};
export default useRemoverProduto;
