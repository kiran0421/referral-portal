
function Benefit({ icon, label }) {
  return (
    <div className="benefit d-flex items-center justify-center">
      <span className="benefit-icon">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
export default Benefit;