import './error.scss';

export function ErrorComponent() {
  return (
    <div className="error-container">
      <div className="404-container">
        <p>ERROR 404</p>
      </div>
      <div className="error-image-container">
        <img
          src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_240/v1702977793/elPerroVintage/zjrr3xmrmckxtotsg4gt.gif"
          alt="Error image"
        />
      </div>
      <div className="not-found-container">
        <p>NOT FOUND</p>
      </div>
    </div>
  );
}
