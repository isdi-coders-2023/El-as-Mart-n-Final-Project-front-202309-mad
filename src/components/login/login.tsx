import { SyntheticEvent, useEffect, useState } from 'react';
import { LoginUser } from '../../entities/user';
import { useUsers } from '../../hooks/users/use.users';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function Login() {
  const navigate = useNavigate();
  const [hasLogin, setHasLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  useEffect(() => {
    if (hasLogin) {
      Swal.fire({
        icon: 'success',
        title: '¡Login correcto!',
        showConfirmButton: false,
        timer: 1500,
        width: 350,
      }).then(() => {
        setHasLogin(false);
        navigate('/home/');
      });
    }
  }, [hasLogin]);

  return (
    <div className="login-form-container">
      <div className="login-form-h2">
        <h2>INGRESAR</h2>
      </div>
      {!hasLogin && (
        <form onSubmit={handleSubmit} className="login-form" aria-label="form">
          <input type="email" name="email" placeholder="Email" required />
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="passwd"
              placeholder="Contraseña"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password-button"
              data-testid="show-passwd-button"
            >
              <img
                src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_30/v1702833376/elPerroVintage/esgdaubs95zfrm1ijyrj.webp"
                alt=""
              />
            </button>
          </div>
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
    </div>
  );
}
