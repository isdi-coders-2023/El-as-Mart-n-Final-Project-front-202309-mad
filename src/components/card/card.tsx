import { useClothes } from '../../hooks/clothes/use.clothes';
import { Link } from 'react-router-dom';
import { ClothingItem } from '../../entities/clothingItem';
import './card.scss';
import { makeImageURL } from '../../services/images';
import { useState } from 'react';

type Props = {
  clothingItem: ClothingItem;
};

export function Card({ clothingItem }: Props) {
  const { handleDetailsPage } = useClothes();

  const mobileClothingItemFrontImg =
    clothingItem?.clothingItemFrontImg?.publicId &&
    makeImageURL(clothingItem.clothingItemFrontImg.publicId, 160);
  const mobileClothingItemBackImg =
    clothingItem?.clothingItemBackImg?.publicId &&
    makeImageURL(clothingItem.clothingItemBackImg?.publicId, 160);
  const desktopMediumClothingItemFrontImg =
    clothingItem?.clothingItemFrontImg?.publicId &&
    makeImageURL(clothingItem.clothingItemFrontImg.publicId, 205);
  const desktopMediumClothingItemBackImg =
    clothingItem?.clothingItemBackImg?.publicId &&
    makeImageURL(clothingItem.clothingItemBackImg?.publicId, 205);
  const desktopBigClothingItemFrontImg =
    clothingItem?.clothingItemFrontImg?.publicId &&
    makeImageURL(clothingItem.clothingItemFrontImg.publicId, 255);
  const desktopBigClothingItemBackImg =
    clothingItem?.clothingItemBackImg?.publicId &&
    makeImageURL(clothingItem.clothingItemBackImg?.publicId, 255);

  const [currentMobileImage, setCurrentMobileImage] = useState(
    mobileClothingItemFrontImg
  );
  const [currentDesktopImage, setCurrentDesktopImage] = useState(
    desktopMediumClothingItemFrontImg
  );
  const [currentDesktopBigImage, setCurrentDesktopBigImage] = useState(
    desktopBigClothingItemFrontImg
  );

  return (
    <li className="clothes-card">
      <div className="card-container">
        <div className="card-image-container">
          <Link
            to={'/details/' + clothingItem.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src={currentMobileImage}
              alt={`imagen de ${clothingItem.name}`}
              onMouseOver={() =>
                setCurrentMobileImage(mobileClothingItemBackImg)
              }
              onMouseOut={() =>
                setCurrentMobileImage(mobileClothingItemFrontImg)
              }
              onClick={() => handleDetailsPage(clothingItem)}
              className="mobile-front-img"
              data-testid="details"
            />
            <img
              src={currentDesktopImage}
              alt={`imagen de ${clothingItem.name}`}
              onMouseOver={() =>
                setCurrentDesktopImage(desktopMediumClothingItemBackImg)
              }
              onMouseOut={() =>
                setCurrentDesktopImage(desktopMediumClothingItemFrontImg)
              }
              onClick={() => handleDetailsPage(clothingItem)}
              className="desktop-front-img"
              data-testid="details2"
            />
            <img
              src={currentDesktopBigImage}
              alt={`imagen de ${clothingItem.name}`}
              onMouseOver={() =>
                setCurrentDesktopBigImage(desktopBigClothingItemBackImg)
              }
              onMouseOut={() =>
                setCurrentDesktopBigImage(desktopBigClothingItemFrontImg)
              }
              onClick={() => handleDetailsPage(clothingItem)}
              className="desktopBig-front-img"
              data-testid="details3"
            />
          </Link>
        </div>
        <div className="card-info-container">
          <div className="card-name-container">
            <p className="card-name">{clothingItem.name}</p>
          </div>
          <div className="card-price-container">
            <p className="card-price">{clothingItem.price}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
