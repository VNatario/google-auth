import "./styles.scss";
import { GoogleLogo } from "phosphor-react";

export function SignIn() {
  function handleGoogleSignIn() {}

  return (
    <div className="container">
      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social, por exemplo, autenticação com a Google
        você <br /> facilita a vida do usuário permitindo utilizar sua aplicação
        sem fazer cadastro.
      </span>

      <button type="button" className="button" onClick={handleGoogleSignIn}>
        <GoogleLogo size={24} />
        Entrar com o Google
      </button>
    </div>
  );
}
