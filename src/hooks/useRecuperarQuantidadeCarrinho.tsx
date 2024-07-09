import useAPICarrinho from "./useAPICarrinho"
import { URL_CARRINHO} from "../util/constants";
import { useQuery } from "@tanstack/react-query";

const useRecuperarQuantidadeCarrinho = (idUsuario: number) => {
    const { recuperarQuantidadeCarrinho } = useAPICarrinho(URL_CARRINHO);
    
    return useQuery({
        queryKey: ["carrinho", "recuperar", idUsuario],
        queryFn: () => recuperarQuantidadeCarrinho(idUsuario),
        staleTime: 10_000,
    })
}
export default useRecuperarQuantidadeCarrinho