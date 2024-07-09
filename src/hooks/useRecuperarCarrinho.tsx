import useAPICarrinho from "./useAPICarrinho"
import { URL_CARRINHO} from "../util/constants";
import { useQuery } from "@tanstack/react-query";

const useRecuperarCarrinho = (idUsuario: number) => {
    const { recuperarProdutosCarrinho } = useAPICarrinho(URL_CARRINHO);
    
    return useQuery({
        queryKey: ["carrinho", idUsuario ],
        queryFn: () => recuperarProdutosCarrinho(idUsuario),
        staleTime: 10_000,
    })
}
export default useRecuperarCarrinho