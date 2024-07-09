import useAPICarrinho from "./useAPICarrinho"
import { URL_CARRINHO} from "../util/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useRemoverCarrinho = (idUsuario: number) => {
    const { removerCarrinho } = useAPICarrinho(URL_CARRINHO);
    
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (idProduto:number) => removerCarrinho(idUsuario, idProduto),

        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["carrinho"],
            })
    })

}
export default useRemoverCarrinho