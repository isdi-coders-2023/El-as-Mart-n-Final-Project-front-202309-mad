import './details.scss';
import { makeImageURL } from '../../services/images';
import { SetStateAction, useState } from 'react';
import { useClothes } from '../../hooks/clothes/use.clothes';

export function Details() {
  const [currentBigImage, setCurrentBigImage] = useState('front');
  const [selectedSmallImage, setSelectedSmallImage] = useState('front');
  const handleSmallImageClick = (side: SetStateAction<string>) => {
    setCurrentBigImage(side);
    setSelectedSmallImage(side);
  };
  const { currentClothingItem } = useClothes();

  const mobileBigClothingItemFrontImg =
    currentClothingItem?.clothingItemFrontImg?.publicId &&
    makeImageURL(currentClothingItem.clothingItemFrontImg.publicId, 340);
  const mobileSmallClothingItemFrontImg =
    currentClothingItem?.clothingItemFrontImg?.publicId &&
    makeImageURL(currentClothingItem.clothingItemFrontImg.publicId, 140);
  const mobileBigClothingItemBackImg =
    currentClothingItem?.clothingItemBackImg?.publicId &&
    makeImageURL(currentClothingItem.clothingItemBackImg.publicId, 340);
  const mobileSmallClothingItemBackImg =
    currentClothingItem?.clothingItemBackImg?.publicId &&
    makeImageURL(currentClothingItem.clothingItemBackImg.publicId, 140);

  return (
    <div className="details-container">
      <div className="details-image-container">
        <div className="big-details-image-container">
          <img
            src={
              currentBigImage === 'front'
                ? mobileBigClothingItemFrontImg!
                : mobileBigClothingItemBackImg!
            }
            alt={currentClothingItem?.name}
            className="mobile-big-back-img"
          />
        </div>
        <div className="small-details-images-container">
          <img
            src={mobileSmallClothingItemFrontImg!}
            alt={currentClothingItem?.name}
            className={`mobile-small-front-img ${
              selectedSmallImage === 'front' ? 'selected' : ''
            }`}
            onClick={() => handleSmallImageClick('front')}
            data-testid="small-image-front"
          />
          <img
            src={mobileSmallClothingItemBackImg!}
            alt={currentClothingItem?.name}
            className={`mobile-small-back-img ${
              selectedSmallImage === 'back' ? 'selected' : ''
            }`}
            onClick={() => handleSmallImageClick('back')}
            data-testid="small-image-back"
          />
        </div>
      </div>
      <div className="details-info-container">
        <div className="details-name-container">
          <p>
            {currentClothingItem?.name.toUpperCase()}
            <span> ({currentClothingItem?.size})</span>
          </p>
        </div>
        <div className="details-price-container">
          <p>{currentClothingItem?.price}</p>
        </div>
        <div className="details-size-container">
          <p>
            Talla de la prenda: <span>{currentClothingItem?.size}</span>
          </p>
        </div>
        <div className="details-especific-sizes-container">
          <p>
            Largo: <span>{currentClothingItem?.clothingItemHeight}</span>
          </p>
          <p>
            Ancho: <span>{currentClothingItem?.clothingItemWidth}</span>
          </p>
        </div>
        <div className="details-tares-container">
          <p>
            Taras: <span>{currentClothingItem?.tares}</span>
          </p>
        </div>
        <div className="details-shopping-cart-container">
          <div className="shopping-cart-text">
            <p>AGREGAR AL CARRITO</p>
          </div>
          <div className="shopping-cart-icon">
            <img
              src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_36/v1702369496/elPerroVintage/gutb4gkaockkcrxq1rw3.png"
              alt="Icono de carrito de compra"
            />
          </div>
        </div>
        <div className="details-extra-info-container">
          <p>
            🚀 Realiza tu pedido ahora para recibirlo en las próximas 24/48
            horas laborales.
          </p>
          <p>
            🗣️ Las prendas vintage pueden tener un pequeño desgaste por el uso o
            por el paso del tiempo.
          </p>
        </div>
      </div>
    </div>
  );
}
