import { toSitePath } from '../config';
import { useCart } from '../context/CartContext';

export default function LastItemDetail({ product }) {
  const { addItem } = useCart();

  if (!product) {
    return (
      <article className="glass">
        <h2>Último Vehículo Agregado</h2>
        <p className="muted">Todavía no hay vehículos en la base.</p>
      </article>
    );
  }

  const categoryName = product.categories?.[0]?.name || 'Vehículo';
  const imageSrc = toSitePath(product.image);

  return (
    <article className="glass last-card">
      <h2>Último Vehículo Agregado</h2>
      {imageSrc ? <img src={imageSrc} alt={product.name} /> : null}
      <span className="chip">{categoryName}</span>
      <h3>{product.name}</h3>
      <p className="muted">{product.description}</p>
      <p className="price">
        Precio: ${Number(product.price).toFixed(2)}
      </p>
      <button type="button" className="btn-ghost" onClick={() => addItem(product)}>
        Detalles
      </button>
    </article>
  );
}
