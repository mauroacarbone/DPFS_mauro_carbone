import { useEffect, useState } from 'react';
import { fetchAllPages, fetchResource } from '../api';

export default function useDashboardData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadDashboard() {
      setLoading(true);
      setError('');

      try {
        const [productsPayload, usersPayload] = await Promise.all([
          fetchAllPages('products', 'products'),
          fetchAllPages('users', 'users')
        ]);

        const lastProductSummary = productsPayload.products.at(-1);
        const lastProduct = lastProductSummary
          ? await fetchResource('products', lastProductSummary.id)
          : null;

        if (cancelled) return;

        setMetrics({
          productCount: productsPayload.count,
          userCount: usersPayload.count,
          categoryCount: Object.keys(productsPayload.countByCategory || {}).length,
          countByCategory: productsPayload.countByCategory || {},
          products: productsPayload.products,
          users: usersPayload.users,
          lastProduct
        });
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'No se pudo cargar el resumen');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadDashboard();

    return () => {
      cancelled = true;
    };
  }, []);

  return { loading, error, metrics };
}
