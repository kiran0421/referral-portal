
function Benefit({ icon, label }) {
  return (
    <div className="benefit">
      <span className="benefit-icon">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
export default Benefit;