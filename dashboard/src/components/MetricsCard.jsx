export default function MetricsCard({ label, value, icon, tone = 'violet' }) {
  return (
    <article className={`glass kpi kpi-${tone}`}>
      <div className="kpi-icon">{icon}</div>
      <div>
        <p className="label">{label}</p>
        <p className="value">({value})</p>
      </div>
    </article>
  );
}
