import axios, { AxiosRequestConfig } from "axios";
import { URL_BASE } from "../util/constants";
import CustomError from "../util/CustomError";
import Usuario from "../interfaces/usuario";

const useAPICarrinho = (endpoint: string) => {

    const axiosInstance = axios.create({
        baseURL: URL_BASE
    });

    const recuperarProdutosCarrinho = (idUsuario: number) => axiosInstance
        .get(endpoint + '/' + idUsuario)
        .then((response) => response.data)
        .catch((error) => {
            if (error.response) {
                throw new CustomError(
                    error.response.data.message,
                    error.response.data.errorCode);
                // significa servidor respondeu
            }
            else if(error.request) {
                throw error;
                // significa que o servidor não respondeu
            }
            else {
                throw error;
                // erro desconhecido
            }
        })

        const recuperarQuantidadeCarrinho = (idUsuario: number) => axiosInstance
        .get(endpoint + "/quantidade/" + idUsuario)
        .then((response) => response.data)
        .catch((error) => {
            if (error.response) {
                throw new CustomError(
                    error.response.data.message,
                    error.response.data.errorCode);
                // significa servidor respondeu
            }
            else if(error.request) {
                throw error;
                // significa que o servidor não respondeu
            }
            else {
                throw error;
                // erro desconhecido
            }
        })


    const removerCarrinho = (idUsuario: number, idProduto: number) => axiosInstance
        .delete(endpoint + "/" + idUsuario + "/" + idProduto)
        .then((response) => response.data)
        .catch((error) => {
            if (error.response) {
                throw new CustomError(
                    error.response.data.message,
                    error.response.data.errorCode);
                // significa servidor respondeu
            }
            else if(error.request) {
                throw error;
                // significa que o servidor não respondeu
            }
            else {
                throw error;
                // erro desconhecido
            }
        })

    const subtrairCarrinho = (idUsuario: number, idProduto: number) => axiosInstance
        .put(endpoint + "/sub/" + idUsuario + "/" + idProduto)
        .then((response) => response.data)
        .catch((error) => {
            if (error.response) {
                throw new CustomError(
                    error.response.data.message,
                    error.response.data.errorCode);
                // significa servidor respondeu
            }
            else if(error.request) {
                throw error;
                // significa que o servidor não respondeu
            }
            else {
                throw error;
                // erro desconhecido
            }
        })

    const adicionarCarrinho = (idUsuario: number, idProduto: number) => axiosInstance
        .post(endpoint + "/add/" + idUsuario + "/" + idProduto)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error.response);
            if (error.response) {
                // significa servidor respondeu
                if (error.response.data.errorCode === 422) {
                    throw new CustomError(
                        error.response.data.message,
                        error.response.data.errorCode,
                        Object.values(error.response.data.map));
                }
                else {
                    throw new CustomError(
                        error.response.data.message,
                        error.response.data.errorCode);
                }
            }
            else if(error.request) {
                throw error;
                // significa que o servidor não respondeu
            }
            else {
                throw error;
                // erro desconhecido
            }
        })


    return {recuperarProdutosCarrinho, recuperarQuantidadeCarrinho, removerCarrinho, adicionarCarrinho, subtrairCarrinho}    
}
export default useAPICarrinho