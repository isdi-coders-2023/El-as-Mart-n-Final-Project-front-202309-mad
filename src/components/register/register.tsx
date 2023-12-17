import { SyntheticEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useUsers } from '../../hooks/users/use.users';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';

export function Register() {
  const { register } = useUsers();
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    await register(formData);
    setRegistrationSuccessful(true);
  };

  useEffect(() => {
    if (isRegistrationSuccessful) {
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setRegistrationSuccessful(false);
        navigate('/login/');
      });
    }
  }, [isRegistrationSuccessful]);

  useEffect(() => {
    if (isRegistrationSuccessful) {
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setRegistrationSuccessful(false);
        navigate('/login/');
      });
    }
  }, [isRegistrationSuccessful]);

  return (
    <>
      <div className="register-form-container">
        <div className="register-form-h2">
          <h2>CREAR CUENTA</h2>
        </div>
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
      </div>
    </>
  );
}
