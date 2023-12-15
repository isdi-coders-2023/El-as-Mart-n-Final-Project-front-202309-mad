import { SyntheticEvent, useEffect, useState } from 'react';
import './update.clothingItem.scss';
import { useClothes } from '../../hooks/clothes/use.clothes';
import { useNavigate } from 'react-router-dom';

export function UpdateClothingItem() {
  const navigate = useNavigate();

  const { currentClothingItem, updateClothingItem } = useClothes();

  const [clothingItem, setClothingItem] = useState(currentClothingItem);

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

  return (
    <>
      <div className="update-form-container">
        <div className="update-form-h2">
          <h2>EDITAR PRENDA</h2>
        </div>
        <form
          onSubmit={handleUpdateClothingItem}
          className="update-form"
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
          <label className="custom-file-upload">
            <input
              type="file"
              name="clothingItemFrontImg"
              id="clothingItemFrontImg"
            />
            Imagen frontal
          </label>
          <label className="custom-file-upload">
            <input
              type="file"
              name="clothingItemBackImg"
              id="clothingItemBackImg"
            />
            Imagen trasera
          </label>
          <div className="update-buttons-container">
            <button type="submit">EDITAR PRENDA</button>
          </div>
        </form>
      </div>
    </>
  );
}
