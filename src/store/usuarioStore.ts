import { create } from "zustand";

interface UsuarioStore {
  usuarioLogado: string;
  tentouLogar: boolean;
  idUsuario: number;

  setUsuarioLogado: (usuario: string) => void;
  setTentouLogar: (valor: boolean) => void;
  setIdUsuario: (idUsuario: number) => void;
}

const useUsuarioStore = create<UsuarioStore>((set) => ({
  usuarioLogado: "",
  tentouLogar: false,
  idUsuario: 0,

  setUsuarioLogado: (usuario: string) => set(() => ({ usuarioLogado: usuario })),
  setTentouLogar: (valor: boolean) => set(() => ({ tentouLogar: valor })),
  setIdUsuario: (idUsuario: number) => set(() =>({idUsuario: idUsuario})),
}));
export default useUsuarioStore;
