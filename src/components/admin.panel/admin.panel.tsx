import { Link } from 'react-router-dom';
import './admin.panel.scss';
export function AdminPanel() {
  return (
    <div className="admin-panel-container">
      <div className="admin-panel-h2">
        <h2>ADMIN PANEL</h2>
      </div>
      <div className="admin-panel-buttons">
        <Link
          to={'/create'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <button>AÑADIR PRENDA</button>
        </Link>
        <Link
          to={'/notImplemented/'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <button>CARRITO DE COMPRA</button>
        </Link>
      </div>
    </div>
  );
}
