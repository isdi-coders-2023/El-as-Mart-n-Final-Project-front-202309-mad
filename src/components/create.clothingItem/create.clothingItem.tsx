import { SyntheticEvent } from 'react';
import './create.clothingItem.scss';
import { useClothes } from '../../hooks/use.clothes';
import { useNavigate } from 'react-router-dom';

export function CreateClothingItem() {
  const { createClothingItem } = useClothes();
  const navigate = useNavigate();

  const handleCreateClothingItem = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    createClothingItem(formData);
    navigate('/');
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
          name="clothingItemHeigh"
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
        <div className="create-buttons-container">
          <button type="submit">AÑADIR PRENDA</button>
        </div>
      </form>
    </div>
  );
}
