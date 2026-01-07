import "./ProductSelection.css";

const vibes = [
  { title: "Sherwani", img: "/images/vibe-sherwani.jpg" },
  { title: "Indo Western", img: "/images/vibe-indo.jpg" },
  { title: "Festive Kurta", img: "/images/vibe-kurta.jpg" },
  { title: "Jodhpuri", img: "/images/vibe-jodhpuri.jpg" },
];

export default function ProductSelection() {
  return (
    <section className="vibe">
      <h2>WHAT’S YOUR VIBE?</h2>

      <div className="vibe-grid">
        {vibes.map((v, i) => (
          <div className="vibe-card" key={i}>
            <img src={v.img} alt={v.title} />
            <span>{v.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
