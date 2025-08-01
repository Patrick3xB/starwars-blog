export default function LightsaberNav({ text = "STAR WARS CODEX" }) {
  return (
    <div className="saber d-flex align-items-center">
      <span className="hilt" aria-hidden />
      <span className="blade" aria-hidden />
      <span className="title ms-2">{text}</span>
    </div>
  );
}
