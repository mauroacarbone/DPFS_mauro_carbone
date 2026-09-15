import CategoriesPanel from '../components/CategoriesPanel.jsx';
import useDashboardData from '../hooks/useDashboardData';

export default function CategoriesPage() {
  const { loading, error, metrics } = useDashboardData();

  if (loading) return <p className="status">Cargando categorías…</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <section className="dash-page">
      <h1>Categorías</h1>
      <CategoriesPanel countByCategory={metrics.countByCategory} />
    </section>
  );
}
