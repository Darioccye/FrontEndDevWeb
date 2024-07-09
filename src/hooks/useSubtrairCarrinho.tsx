import useAPICarrinho from "./useAPICarrinho"
import { URL_CARRINHO} from "../util/constants";
import { useQuery } from "@tanstack/react-query";

const useSubtrairCarrinho = (idUsuario: number, idProduto: number) => {
    const { subtrairCarrinho } = useAPICarrinho(URL_CARRINHO);
    
    return useQuery({
        queryKey: ["carrinho", "subtrair", idUsuario, idProduto ],
        queryFn: () => subtrairCarrinho(idUsuario, idProduto),
        staleTime: 10_000,
    })
}
export default useSubtrairCarrinho