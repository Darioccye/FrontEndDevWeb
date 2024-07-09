import useAPICarrinho from "./useAPICarrinho"
import { URL_CARRINHO} from "../util/constants";
import { useQuery } from "@tanstack/react-query";

const useAdicionarCarrinho = (idUsuario: number, idProduto: number) => {
    const { adicionarCarrinho } = useAPICarrinho(URL_CARRINHO);
    
    return useQuery({
        queryKey: ["carrinho", "adicionar", idUsuario, idProduto ],
        queryFn: () => adicionarCarrinho(idUsuario, idProduto),
        staleTime: 10_000,
    })
}
export default useAdicionarCarrinho