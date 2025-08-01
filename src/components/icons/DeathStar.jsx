export default function DeathStar({ size = 18, active = false }) {
  
  const stroke = active ? "#000" : "#ffffff";        // más contraste en off
  const fill   = active ? "#ffe81f" : "transparent";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      {/* cuerpo */}
      <circle cx="32" cy="32" r="28" fill={fill} stroke={stroke} strokeWidth="3" />
      {/* trinchera */}
      <rect x="6" y="30" width="52" height="6" fill={stroke} opacity={active ? 0.25 : 0.6} />
      {/* plato superláser */}
      <circle cx="42" cy="22" r="9" fill="none" stroke={stroke} strokeWidth="3" />
      <circle cx="42" cy="22" r="3" fill={stroke} />
    </svg>
  );
}
