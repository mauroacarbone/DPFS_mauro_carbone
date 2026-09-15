import { useOutletContext } from 'react-router-dom';
import useDashboardData from '../hooks/useDashboardData';

export default function UsersPage() {
  const { query = '' } = useOutletContext() || {};
  const { loading, error, metrics } = useDashboardData();

  if (loading) return <p className="status">Cargando usuarios…</p>;
  if (error) return <p className="status error">{error}</p>;

  const term = query.trim().toLowerCase();
  const users = (metrics.users || []).filter((user) => {
    if (!term) return true;
    return `${user.name} ${user.email}`.toLowerCase().includes(term);
  });

  return (
    <section className="dash-page">
      <h1>Usuarios</h1>
      <article className="glass">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
