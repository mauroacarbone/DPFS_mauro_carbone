export default function CategoriesPanel({ countByCategory }) {
  const entries = Object.entries(countByCategory || {});
  const max = Math.max(1, ...entries.map(([, total]) => Number(total)));

  return (
    <article className="glass">
      <h2>Categorías</h2>
      {entries.length === 0 ? (
        <p className="muted">Sin categorías.</p>
      ) : (
        <div className="cat-bars">
          <div className="mini-chart" aria-hidden="true">
            {entries.map(([name, total]) => (
              <span key={name} style={{ height: `${Math.max(18, (Number(total) / max) * 100)}%` }} />
            ))}
          </div>
          {entries.map(([name, total]) => (
            <div className="cat-row" key={name}>
              <div>
                <strong>{name} - {total}</strong>
                <div className="bar">
                  <i style={{ width: `${(Number(total) / max) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
