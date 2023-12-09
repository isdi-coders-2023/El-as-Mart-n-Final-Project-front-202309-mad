import './admin.panel.scss';
export function AdminPanel() {
  return (
    <div className="admin-panel-container">
      <div className="admin-panel-h2">
        <h2>ADMIN PANEL</h2>
      </div>
      <div className="admin-panel-buttons">
        <button>AÑADIR PRENDA</button>
        <button>CARRITO DE COMPRA</button>
      </div>
    </div>
  );
}
