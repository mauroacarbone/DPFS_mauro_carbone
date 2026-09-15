import { useCart } from '../context/CartContext';

export default function ProductListTable({ products }) {
  const { addItem } = useCart();

  return (
    <article className="glass">
      <h2>Vehículos</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Descripción</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.categories?.[0]?.name || '—'}</td>
                <td>{product.description}</td>
                <td>
                  <button type="button" className="add-btn" onClick={() => addItem(product)}>
                    Sumar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
