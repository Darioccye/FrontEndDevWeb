import useAPICarrinho from "./useAPICarrinho"
import { URL_CARRINHO} from "../util/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useSubtrairCarrinho = (idUsuario: number) => {
    const { subtrairCarrinho } = useAPICarrinho(URL_CARRINHO);
    
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (idProduto:number) => subtrairCarrinho(idUsuario, idProduto),

        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["carrinho"],
            })
    })

}
export default useSubtrairCarrinho