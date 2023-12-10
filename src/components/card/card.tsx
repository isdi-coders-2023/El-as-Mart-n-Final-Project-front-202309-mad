import { useClothes } from '../../hooks/use.clothes';
import { Link } from 'react-router-dom';
import { ClothingItem } from '../../entities/clothingItem';
import './card.scss';

type Props = {
  clothingItem: ClothingItem;
};

export function Card({ clothingItem }: Props) {
  const { handleDetailsPage } = useClothes();
  // console.log('Public Id', film.filmFrontImg.publicId);
  // console.log('Url', film.filmFrontImg.url);
  // console.log('Formato', film.filmFrontImg.format);
  // console.log('Size', film.filmFrontImg.size);

  return (
    <li className="clothingItem-card">
      <div className="card-container">
        <div className="card-name-container">
          <p className="card-name">{clothingItem.name}</p>
        </div>
        <div className="card-image-container">
          <Link
            to={'/details/' + clothingItem.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src={clothingItem.clothingItemFrontImg.url}
              alt={`imagen de ${clothingItem.name}`}
              onClick={() => handleDetailsPage(clothingItem)}
            />
          </Link>
        </div>
      </div>
    </li>
  );
}
