import MetricsCard from '../components/MetricsCard.jsx';
import LastItemDetail from '../components/LastItemDetail.jsx';
import CategoriesPanel from '../components/CategoriesPanel.jsx';
import PaymentPanel from '../components/PaymentPanel.jsx';
import useDashboardData from '../hooks/useDashboardData';
import { IconCar, IconFolder, IconUsers } from '../components/Icons.jsx';
import { SITE_URL } from '../config';

export default function DashboardPage() {
  const { loading, error, metrics } = useDashboardData();

  if (loading) {
    return <p className="status">Cargando métricas…</p>;
  }

  if (error) {
    return (
      <section className="glass status-card">
        <h1>Dashboard RendiYa</h1>
        <p>No se pudo leer la API. ¿Está RendiYa en {SITE_URL}?</p>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="dash-page">
      <h1>Dashboard RendiYa</h1>
      <div className="kpis">
        <MetricsCard label="Total Vehículos" value={metrics.productCount} icon={<IconCar />} tone="violet" />
        <MetricsCard label="Total Usuarios" value={metrics.userCount} icon={<IconUsers />} tone="blue" />
        <MetricsCard label="Categorías" value={metrics.categoryCount} icon={<IconFolder />} tone="cyan" />
      </div>
      <div className="dash-grid">
        <LastItemDetail product={metrics.lastProduct} />
        <CategoriesPanel countByCategory={metrics.countByCategory} />
        <PaymentPanel />
      </div>
    </section>
  );
}
