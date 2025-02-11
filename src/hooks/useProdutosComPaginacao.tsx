import { useQuery } from "@tanstack/react-query";
import Produto from "../interfaces/produto";
import { URL_PRODUTO } from "../util/constants";
import useAPI from "./useAPI";
import React, { useState, useEffect } from 'react';

interface QueryString {
  pagina: number;
  tamanho: number;
  nome: string;
  filtro: number;
}

const useProdutosComPaginacao = (query: QueryString) => {
  const { recuperarPagina } = useAPI<Produto>(URL_PRODUTO);

  return useQuery({
    queryKey: ["produtos", "paginacao", query],
    queryFn: () =>
      recuperarPagina({
        params: {
          // pagina: query.pagina,
          // tamanho: query.tamanho
          ...query,
        },
      }),
    staleTime: 10_000,
  });
};
export default useProdutosComPaginacao;
