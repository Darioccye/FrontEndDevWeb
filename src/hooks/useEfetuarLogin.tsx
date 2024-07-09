import { useMutation } from "@tanstack/react-query";
import Usuario from "../interfaces/usuario";
import useAPIAutenticacao from "./useAPIAutenticacao";
import { URL_AUTENTICACAO } from "../util/constants";

const useEfetuarLogin = () => {
    const { login } = useAPIAutenticacao();
  
    return useMutation({
      mutationFn: (usuario: Usuario) => login(usuario),
    });
  };
  
export default useEfetuarLogin;
