import { Link } from 'react-router-dom';
import './footer.scss';

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-pages-container">
          <Link
            to={'/aboutUs/'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <p>CONÓCENOS</p>
          </Link>
        </div>
        <div className="footer-icons-container">
          <div className="vinted-icon-container">
            <Link to={'https://www.vinted.es/member/53837553-elperrovintage'}>
              <img
                src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_30/v1702897774/elPerroVintage/boerxgp1md4uxikfxdc2.webp"
                alt="Vinted icon"
              />
            </Link>
          </div>
          <div className="instagram-icon-container">
            <Link to={'https://www.instagram.com/elperrovintage/'}>
              <img
                src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_30/v1702897764/elPerroVintage/kpnygadf5ppdrgzzd1by.webp"
                alt="Instagram icon"
              />
            </Link>
          </div>
        </div>
        <div className="footer-copy-container">
          <p>© EL PERRO VINTAGE</p>
        </div>
      </div>
    </footer>
  );
}
