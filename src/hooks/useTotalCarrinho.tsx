import useAPICarrinho from "./useAPICarrinho"
import { URL_CARRINHO} from "../util/constants";
import { useQuery } from "@tanstack/react-query";

const useTotalCarrinho = (idUsuario: number) => {
    const { recuperarTotalCarrinho } = useAPICarrinho(URL_CARRINHO);
    
    return useQuery({
        queryKey: ["carrinho", "total", idUsuario ],
        queryFn: () => recuperarTotalCarrinho(idUsuario),
        staleTime: 10_000,
    })
}
export default useTotalCarrinho