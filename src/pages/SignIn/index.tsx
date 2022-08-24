import { GoogleLogo } from "phosphor-react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase";
// signInWithPopup - Abri uma janela para selecionar a conta para autênticar

import "./styles.scss";

export function SignIn() {
  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      //auth = parâmetros de autênticação
      //provider = provedor de autênticação
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  }

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
