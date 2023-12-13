import { useClothes } from '../../hooks/clothes/use.clothes';
import { Link } from 'react-router-dom';
import { ClothingItem } from '../../entities/clothingItem';
import './card.scss';
import { makeImageURL } from '../../services/images';

type Props = {
  clothingItem: ClothingItem;
};

export function Card({ clothingItem }: Props) {
  const { handleDetailsPage } = useClothes();

  const mobileClothingItemFrontImg =
    clothingItem?.clothingItemFrontImg?.publicId &&
    makeImageURL(clothingItem.clothingItemFrontImg.publicId, 160);
  const desktopMediumClothingItemFrontImg =
    clothingItem?.clothingItemFrontImg?.publicId &&
    makeImageURL(clothingItem.clothingItemFrontImg.publicId, 205);
  const desktopBigClothingItemFrontImg =
    clothingItem?.clothingItemFrontImg?.publicId &&
    makeImageURL(clothingItem.clothingItemFrontImg.publicId, 255);

  return (
    <li className="clothes-card">
      <div className="card-container">
        <div className="card-image-container">
          <Link
            to={'/details/' + clothingItem.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src={mobileClothingItemFrontImg}
              alt={`imagen de ${clothingItem.name}`}
              onClick={() => handleDetailsPage(clothingItem)}
              className="mobile-front-img"
              data-testid="details"
            />
            <img
              src={desktopMediumClothingItemFrontImg}
              alt={`imagen de ${clothingItem.name}`}
              onClick={() => handleDetailsPage(clothingItem)}
              className="desktop-front-img"
              data-testid="details2"
            />
            <img
              src={desktopBigClothingItemFrontImg}
              alt={`imagen de ${clothingItem.name}`}
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
