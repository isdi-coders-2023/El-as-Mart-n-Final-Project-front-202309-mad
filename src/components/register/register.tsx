import { SyntheticEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useUsers } from '../../hooks/users/use.users';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';

export function Register() {
  const { register } = useUsers();
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    await register(formData);
    setRegistrationSuccessful(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const files = fileInput.files;
    setSelectedFileName(files![0].name);
  };

  useEffect(() => {
    if (isRegistrationSuccessful) {
      Swal.fire({
        icon: 'success',
        title: '¡Cuenta creada con éxito!',
        showConfirmButton: false,
        timer: 1500,
        width: 350,
      }).then(() => {
        setRegistrationSuccessful(false);
        navigate('/login/');
      });
    }
  }, [isRegistrationSuccessful]);

  return (
    <div className="register-form-container">
      <div className="register-form-h2">
        <h2>CREAR CUENTA</h2>
      </div>
      <form onSubmit={handleSubmit} className="register-form" aria-label="form">
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
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleFileChange}
            data-testid="file-input"
          />
          {selectedFileName ? (
            <span>{selectedFileName}</span>
          ) : (
            <div className="file-input-text">
              <div className="select-avatar-text">Selecciona tu avatar</div>
              <div>
                <img
                  src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_20/v1702829281/elPerroVintage/yikoxrp1eochrde68y7h.webp"
                  alt="Upload icon"
                />
              </div>
            </div>
          )}
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
  );
}
