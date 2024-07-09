import useAPICarrinho from "./useAPICarrinho"
import { URL_CARRINHO} from "../util/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useAdicionarCarrinho = (idUsuario: number) => {
    const { adicionarCarrinho } = useAPICarrinho(URL_CARRINHO);
    
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (idProduto:number) => adicionarCarrinho(idUsuario, idProduto),

        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["carrinho"],
            })
    })

}
export default useAdicionarCarrinho