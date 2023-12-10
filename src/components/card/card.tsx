import { useClothes } from '../../hooks/use.clothes';
import { Link } from 'react-router-dom';
import { ClothingItem } from '../../entities/clothingItem';
import './card.scss';
import { makeImageURL } from '../../services/images';

type Props = {
  clothingItem: ClothingItem;
};

export function Card({ clothingItem }: Props) {
  const { handleDetailsPage } = useClothes();

  const clothingItemFrontImg =
    clothingItem &&
    clothingItem.clothingItemFrontImg &&
    makeImageURL(clothingItem?.clothingItemFrontImg.publicId, 160);

  return (
    <li className="clothes-card">
      <div className="card-container">
        <div className="card-image-container">
          <Link
            to={'/details/' + clothingItem.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src={clothingItemFrontImg}
              alt={`imagen de ${clothingItem.name}`}
              onClick={() => handleDetailsPage(clothingItem)}
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
