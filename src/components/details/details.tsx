import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './details.scss';
import { makeImageURL } from '../../services/images';

export function Details() {
  const { currentClothingItem } = useSelector(
    (state: RootState) => state.clothesState
  );
  const mobileBigClothingItemFrontImg =
    currentClothingItem &&
    currentClothingItem.clothingItemFrontImg &&
    makeImageURL(currentClothingItem?.clothingItemFrontImg.publicId, 340);
  const mobileSmallClothingItemFrontImg =
    currentClothingItem &&
    currentClothingItem.clothingItemFrontImg &&
    makeImageURL(currentClothingItem?.clothingItemFrontImg.publicId, 140);
  const mobileBigClothingItemBackImg =
    currentClothingItem &&
    currentClothingItem.clothingItemBackImg &&
    makeImageURL(currentClothingItem?.clothingItemBackImg.publicId, 340);
  const mobileSmallClothingItemBackImg =
    currentClothingItem &&
    currentClothingItem.clothingItemBackImg &&
    makeImageURL(currentClothingItem?.clothingItemBackImg.publicId, 140);

  return (
    <div className="details-container">
      <div className="details-image-container">
        <div className="big-details-image-container">
          <img
            src={mobileBigClothingItemBackImg!}
            alt={currentClothingItem?.name}
            className="mobile-big-back-img"
          />
        </div>
        <div className="small-details-images-container">
          <img
            src={mobileSmallClothingItemFrontImg!}
            alt={currentClothingItem?.name}
            className="mobile-small-front-img"
          />
          <img
            src={mobileSmallClothingItemBackImg!}
            alt={currentClothingItem?.name}
            className="mobile-small-back-img"
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
      </div>
    </div>
  );
}
