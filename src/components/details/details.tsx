import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './details.scss';

export function Details() {
  const { currentClothingItem } = useSelector(
    (state: RootState) => state.clothesState
  );
  return (
    <div className="details-container">
      <div className="details-image-container">
        <img
          src={currentClothingItem?.clothingItemFrontImg.url}
          alt={currentClothingItem?.name}
        />
      </div>
      <div className="details-info-container">
        <div className="details-name-container">
          <p>{currentClothingItem?.name}</p>
        </div>
        {/* <p>
          <span className="details-bold-text">Director:</span>{' '}
          {currentFilm?.director}
        </p>
        <p>
          <span className="details-bold-text">Era:</span> {currentFilm?.era}
        </p>
        <p>
          <span className="details-bold-text">Año:</span> {currentFilm?.year}
        </p> */}
      </div>
    </div>
  );
}
