import { SyntheticEvent, useEffect, useState } from 'react';
import './update.clothingItem.scss';
import { useClothes } from '../../hooks/clothes/use.clothes';
import { useNavigate } from 'react-router-dom';

export function UpdateClothingItem() {
  const navigate = useNavigate();
  const { currentClothingItem, updateClothingItem } = useClothes();
  const [clothingItem, setClothingItem] = useState(currentClothingItem);
  const [selectedUpdateFrontFileName, setSelectedUpdateFrontFileName] =
    useState('');
  const [selectedUpdateBackFileName, setSelectedUpdateBackFileName] =
    useState('');

  useEffect(() => {
    setClothingItem(currentClothingItem);
  }, [currentClothingItem]);

  const handleUpdateClothingItem = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    updateClothingItem(clothingItem!.id, formData);
    navigate('/home');
  };

  const handleUpdateFrontFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileInput = event.target;
    const files = fileInput.files;
    setSelectedUpdateFrontFileName(files![0].name);
  };

  const handleUpdateBackFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileInput = event.target;
    const files = fileInput.files;
    setSelectedUpdateBackFileName(files![0].name);
  };

  return (
    <div className="update-form-container">
      <div className="update-form-h2">
        <h2>EDITAR PRENDA</h2>
      </div>
      <form
        onSubmit={handleUpdateClothingItem}
        className="update-form"
        aria-label="form"
        data-testid="form-id"
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
        <label className="custom-update-front-file-upload">
          <input
            type="file"
            name="clothingItemFrontImg"
            id="clothingItemFrontImg"
            onChange={handleUpdateFrontFileChange}
            data-testid="update-file-front-input"
          />
          {selectedUpdateFrontFileName ? (
            <span>{selectedUpdateFrontFileName}</span>
          ) : (
            <div className="update-file-front-input-text">
              <div className="select-upload-front-text">Imagen frontal</div>
              <div>
                <img
                  src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_20/v1702829281/elPerroVintage/yikoxrp1eochrde68y7h.png"
                  alt="Upload icon"
                />
              </div>
            </div>
          )}
        </label>
        <label className="custom-update-back-file-upload">
          <input
            type="file"
            name="clothingItemBackImg"
            id="clothingItemBackImg"
            onChange={handleUpdateBackFileChange}
            data-testid="update-file-back-input"
          />
          {selectedUpdateBackFileName ? (
            <span>{selectedUpdateBackFileName}</span>
          ) : (
            <div className="update-file-back-input-text">
              <div className="select-upload-back-text">Imagen trasera</div>
              <div>
                <img
                  src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_20/v1702829281/elPerroVintage/yikoxrp1eochrde68y7h.png"
                  alt="Upload icon"
                />
              </div>
            </div>
          )}
        </label>
        <div className="update-buttons-container">
          <button type="submit">EDITAR PRENDA</button>
        </div>
      </form>
    </div>
  );
}
