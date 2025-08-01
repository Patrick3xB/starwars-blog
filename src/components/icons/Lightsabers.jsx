export default function Lightsabers({ size = 22 }) {
  const blade = "#4cc9f0";    
  const blade2 = "#ff4d4d";    

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      
      <rect x="8" y="28" width="40" height="4" fill={blade} transform="rotate(-25 8 28)" />
      <rect x="10" y="32" width="12" height="6" fill="#555" transform="rotate(-25 10 32)" />
      
      <rect x="16" y="30" width="40" height="4" fill={blade2} transform="rotate(25 16 30)" />
      <rect x="12" y="24" width="12" height="6" fill="#555" transform="rotate(25 12 24)" />
    </svg>
  );
}
