import LoginForm from "../components/LoginForm";
import useUsuarioStore from "../store/usuarioStore";

const LoginPage = () => {
  const usuario = useUsuarioStore((s) => (s).setIdUsuario)
  usuario(0)
  
  return (
    <>
      <div className="mb-4">
        <h5>Página de Login</h5>
        <hr className="mt-0" />
      </div>

      <LoginForm />
    </>
  );
};
export default LoginPage;
