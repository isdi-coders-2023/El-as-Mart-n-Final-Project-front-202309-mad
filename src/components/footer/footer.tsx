import './footer.scss';

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-pages-container">
          <p>CONÓCENOS</p>
          <p>GUÍA DE TALLAS</p>
        </div>
        <div className="footer-icons-container">
          <div className="vinted-icon-container">
            <img
              src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_30/v1702897774/elPerroVintage/boerxgp1md4uxikfxdc2.png"
              alt="Vinted icon"
            />
          </div>
          <div className="instagram-icon-container">
            <img
              src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_30/v1702897764/elPerroVintage/kpnygadf5ppdrgzzd1by.png"
              alt="Instagram icon"
            />
          </div>
        </div>
        <div className="footer-copy-container">
          <p>© EL PERRO VINTAGE</p>
        </div>
      </div>
    </footer>
  );
}
