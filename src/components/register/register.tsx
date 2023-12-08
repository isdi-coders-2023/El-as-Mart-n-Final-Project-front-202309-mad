import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/use.users';
import './register.scss';
import { Link } from 'react-router-dom';

export function Register() {
  const [hasRegister, setHasRegister] = useState(false);
  const { register } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    register(formData);
    setHasRegister(true);
  };

  return (
    <>
      <div className="register-form-container">
        <div className="register-form-h2">
          <h2>CREAR CUENTA</h2>
        </div>
        {!hasRegister && (
          <form
            onSubmit={handleSubmit}
            className="register-form"
            aria-label="form"
          >
            <input type="text" name="name" placeholder="Nombre" />
            <input type="text" name="surname" placeholder="Apellidos" />
            <input type="number" name="age" placeholder="Edad" />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
            <input
              type="password"
              name="passwd"
              placeholder="Contraseña"
              required
            />
            <label className="custom-file-upload">
              <input type="file" name="avatar" id="avatar" />
              Selecciona tu avatar
            </label>
            <div className="register-buttons-container">
              <button type="submit">CREAR CUENTA</button>
              <Link
                to={'/login/'}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <p>¿Ya estás registrado?</p>
              </Link>
            </div>
          </form>
        )}
      </div>
      {hasRegister && (
        <div>
          <p>Registro correcto</p>
          <Link to={'/home/'}>
            <button type="button">Continuar</button>
          </Link>
        </div>
      )}
    </>
  );
}
