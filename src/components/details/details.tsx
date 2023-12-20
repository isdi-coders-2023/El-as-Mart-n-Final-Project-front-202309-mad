import './details.scss';
import { makeImageURL } from '../../services/images';
import { SetStateAction, useState } from 'react';
import { useClothes } from '../../hooks/clothes/use.clothes';
import { useUsers } from '../../hooks/users/use.users';
import { Link, useNavigate } from 'react-router-dom';

export function Details() {
  const { currentClothingItem, deleteClothingItem } = useClothes();
  const { loggedUser } = useUsers();
  const [currentBigImage, setCurrentBigImage] = useState('front');
  const [selectedSmallImage, setSelectedSmallImage] = useState('front');
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const handleSmallImageClick = (side: SetStateAction<string>) => {
    setCurrentBigImage(side);
    setSelectedSmallImage(side);
  };
  const navigate = useNavigate();
  const handleDelete = () => {
    setShowConfirmationDialog(true);
  };
  const confirmDelete = (itemId: string) => {
    deleteClothingItem(itemId);
    navigate('/home');
    setShowConfirmationDialog(false);
  };
  const cancelDelete = () => {
    setShowConfirmationDialog(false);
  };

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
  const desktopBigClothingItemFrontImg =
    currentClothingItem?.clothingItemFrontImg?.publicId &&
    makeImageURL(currentClothingItem.clothingItemFrontImg.publicId, 500);
  const desktopSmallClothingItemFrontImg =
    currentClothingItem?.clothingItemFrontImg?.publicId &&
    makeImageURL(currentClothingItem.clothingItemFrontImg.publicId, 200);
  const desktopBigClothingItemBackImg =
    currentClothingItem?.clothingItemBackImg?.publicId &&
    makeImageURL(currentClothingItem.clothingItemBackImg.publicId, 500);
  const desktopSmallClothingItemBackImg =
    currentClothingItem?.clothingItemBackImg?.publicId &&
    makeImageURL(currentClothingItem.clothingItemBackImg.publicId, 200);

  return (
    <div className="details-container">
      <div className="mobile-details-image-container">
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
        <div className="mobile-small-details-images-container">
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
      <div className="desktop-details-image-container">
        <div className="big-details-image-container">
          <img
            src={
              currentBigImage === 'front'
                ? desktopBigClothingItemFrontImg!
                : desktopBigClothingItemBackImg!
            }
            alt={currentClothingItem?.name}
            className="desktop-big-back-img"
          />
        </div>
        <div className="desktop-small-details-images-container">
          <img
            src={desktopSmallClothingItemFrontImg!}
            alt={currentClothingItem?.name}
            className={`desktop-small-front-img ${
              selectedSmallImage === 'front' ? 'selected' : ''
            }`}
            onClick={() => handleSmallImageClick('front')}
            data-testid="small-image-front"
          />
          <img
            src={desktopSmallClothingItemBackImg!}
            alt={currentClothingItem?.name}
            className={`desktop-small-back-img ${
              selectedSmallImage === 'back' ? 'selected' : ''
            }`}
            onClick={() => handleSmallImageClick('back')}
            data-testid="small-image-back"
          />
        </div>
      </div>
      <div className="desktop-text-container">
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
          {(!loggedUser || (loggedUser && loggedUser.role === 'User')) && (
            <Link
              to={'/notImplemented/'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="details-shopping-cart-container">
                <div className="shopping-cart-text">
                  <p>AGREGAR AL CARRITO</p>
                </div>
                <div className="shopping-cart-icon">
                  <img
                    src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_36/v1702369496/elPerroVintage/gutb4gkaockkcrxq1rw3.webp"
                    alt="Icono de carrito de compra"
                  />
                </div>
              </div>
            </Link>
          )}
          {loggedUser && loggedUser!.role === 'Admin' && (
            <div className="admin-buttons">
              {showConfirmationDialog ? (
                <div className="confirmation-dialog">
                  <div className="confirmation-text">
                    <p>⚠️</p>
                    <p className="underline">
                      ¿Estás seguro de que quieres eliminar esta prenda?
                    </p>
                    <p>⚠️</p>
                  </div>
                  <div className="confirmation-buttons">
                    <button
                      onClick={() => confirmDelete(currentClothingItem!.id)}
                      data-testid="confirm-button"
                    >
                      👍
                    </button>
                    <button
                      onClick={() => cancelDelete()}
                      data-testid="negate-button"
                    >
                      👎
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    to={'/update/'}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="admin-edit-button">
                      <button>✏️</button>
                    </div>
                  </Link>
                  <div className="admin-delete-button">
                    <button onClick={handleDelete}>🗑️</button>
                  </div>
                </>
              )}
            </div>
          )}
          <div className="details-extra-info-container">
            <p>
              🚀 Realiza tu pedido ahora para recibirlo en las próximas 24/48
              horas laborales.
            </p>
            <p>
              🗣️ Las prendas vintage pueden tener un pequeño desgaste por el uso
              o por el paso del tiempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
