import useAPICarrinho from "./useAPICarrinho"
import { URL_CARRINHO} from "../util/constants";
import { useQuery } from "@tanstack/react-query";

const useRemoverCarrinho = (idUsuario: number, idProduto: number) => {
    const { removerCarrinho } = useAPICarrinho(URL_CARRINHO);
    
    return useQuery({
        queryKey: ["carrinho", "remover", idUsuario, idProduto ],
        queryFn: () => removerCarrinho(idUsuario, idProduto),
        staleTime: 10_000,
    })
}
export default useRemoverCarrinho