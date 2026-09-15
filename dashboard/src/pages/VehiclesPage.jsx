import { useOutletContext } from 'react-router-dom';
import ProductListTable from '../components/ProductListTable.jsx';
import useDashboardData from '../hooks/useDashboardData';

export default function VehiclesPage() {
  const { query = '' } = useOutletContext() || {};
  const { loading, error, metrics } = useDashboardData();

  if (loading) return <p className="status">Cargando vehículos…</p>;
  if (error) return <p className="status error">{error}</p>;

  const term = query.trim().toLowerCase();
  const products = metrics.products.filter((product) => {
    if (!term) return true;
    return `${product.name} ${product.description}`.toLowerCase().includes(term);
  });

  return (
    <section className="dash-page">
      <h1>Vehículos</h1>
      <ProductListTable products={products} />
    </section>
  );
}
