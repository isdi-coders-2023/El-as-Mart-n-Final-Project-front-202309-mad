import { SyntheticEvent, useState } from 'react';
import './create.clothingItem.scss';
import { useClothes } from '../../hooks/clothes/use.clothes';
import { useNavigate } from 'react-router-dom';

export function CreateClothingItem() {
  const [selectedFrontFileName, setSelectedFrontFileName] = useState('');
  const [selectedBackFileName, setSelectedBackFileName] = useState('');
  const { createClothingItem } = useClothes();
  const navigate = useNavigate();

  const handleCreateClothingItem = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    createClothingItem(formData);
    navigate('/');
  };

  const handleFrontFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileInput = event.target;
    const files = fileInput.files;
    setSelectedFrontFileName(files![0].name);
  };

  const handleBackFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const files = fileInput.files;
    setSelectedBackFileName(files![0].name);
  };

  return (
    <div className="create-form-container">
      <div className="create-form-h2">
        <h2>AÑADIR PRENDA</h2>
      </div>
      <form
        onSubmit={handleCreateClothingItem}
        className="create-form"
        aria-label="form"
      >
        <input type="text" name="name" placeholder="Nombre" />
        <input type="text" name="size" placeholder="Talla" />
        <input type="text" name="price" placeholder="Precio" />
        <input
          type="text"
          name="clothingItemHeight"
          placeholder="Largo de la prenda"
        />
        <input
          type="text"
          name="clothingItemWidth"
          placeholder="Ancho de la prenda"
        />
        <input type="text" name="tares" placeholder="Taras" />
        <label className="custom-front-file-upload">
          <input
            type="file"
            name="clothingItemFrontImg"
            id="clothingItemFrontImg"
            onChange={handleFrontFileChange}
            data-testid="file-front-input"
          />
          {selectedFrontFileName ? (
            <span>{selectedFrontFileName}</span>
          ) : (
            <div className="file-front-input-text">
              <div className="select-front-front-text">Imagen frontal</div>
              <div>
                <img
                  src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_20/v1702829281/elPerroVintage/yikoxrp1eochrde68y7h.webp"
                  alt="Upload icon"
                />
              </div>
            </div>
          )}
        </label>
        <label className="custom-back-file-upload">
          <input
            type="file"
            name="clothingItemBackImg"
            id="clothingItemBackImg"
            onChange={handleBackFileChange}
            data-testid="file-back-input"
          />
          {selectedBackFileName ? (
            <span>{selectedBackFileName}</span>
          ) : (
            <div className="file-back-input-text">
              <div className="select-back-text">Imagen trasera</div>
              <div>
                <img
                  src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_20/v1702829281/elPerroVintage/yikoxrp1eochrde68y7h.webp"
                  alt="Upload icon"
                />
              </div>
            </div>
          )}
        </label>
        <div className="create-buttons-container">
          <button type="submit">AÑADIR PRENDA</button>
        </div>
      </form>
    </div>
  );
}
