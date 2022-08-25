import { GoogleLogo } from "phosphor-react";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../../services/firebase";
// signInWithPopup - Abri uma janela para selecionar a conta para autênticar

import "./styles.scss";
import { useState } from "react";

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      //auth = parâmetros de autênticação
      //provider = provedor de autênticação
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

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
