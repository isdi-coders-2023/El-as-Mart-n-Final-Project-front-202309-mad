import { SyntheticEvent, useState } from 'react';
import { LoginUser } from '../../entities/user';
import { useUsers } from '../../hooks/use.users';
import './login.scss';
import { Link } from 'react-router-dom';

export function Login() {
  const [hasLogin, setHasLogin] = useState(false);
  const { login } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const loginUser: LoginUser = {
      email: formData.get('email')?.toString() as string,
      passwd: formData.get('passwd')?.toString() as string,
    };
    login(loginUser);
    setHasLogin(true);
  };
  return (
    <div className="login-form-container">
      <div className="login-form-h2">
        <h2>INGRESAR</h2>
      </div>
      {!hasLogin && (
        <form onSubmit={handleSubmit} className="login-form">
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="passwd"
            placeholder="Password"
            required
          />
          <div className="login-buttons-container">
            <button type="submit">INGRESAR CUENTA</button>
            <Link
              to={'/register/'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <p>¿Aún no tienes cuenta?</p>
            </Link>
          </div>
        </form>
      )}
      {hasLogin && (
        <div>
          <p>Login correcto</p>
          <Link to={'/home/'}>
            <button type="button">Continuar</button>
          </Link>
        </div>
      )}
    </div>
  );
}
