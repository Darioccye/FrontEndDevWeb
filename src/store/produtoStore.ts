import { create } from "zustand";
import Produto from "../interfaces/produto";

interface ProdutoStore {
    pagina: number;
    tamanho: number;
    nome: string;
    filtro: number;
    produtoSelecionado: Produto;

    setPagina: (pagina: number) => void;
    setTamanho: (tamanho: number) => void;
    setNome: (nome: string) => void;
    setFiltro: (filtro: number) => void;
    setProdutoSelecionado: (produtoSelecionado: Produto) => void;
}

const useProdutoStore = create<ProdutoStore>((set) => ({
    pagina: 0,
    tamanho: 5,
    nome: "",
    filtro: 2,
    produtoSelecionado: {} as Produto,

    setPagina: (pagina: number) => set(() => ({pagina: pagina})),
    setTamanho: (tamanho: number) => set(() => ({tamanho: tamanho})),
    setNome: (nome: string) => set(() => ({nome: nome})),
    setFiltro: (filtro: number) => set(() => ({filtro: filtro})),
    setProdutoSelecionado: (produtoSelecionado: Produto) => set(() => ({produtoSelecionado: produtoSelecionado}))
})) 
export default useProdutoStore;