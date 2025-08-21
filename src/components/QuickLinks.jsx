
export default function QuickLinks() {
  
  const links = [
    { label: "Race", href: "#" },
    { label: "Gender", href: "#" },
    { label: "Age", href: "#" },
    { label: "Nationality", href: "#" },
  ];
  return (
    <nav className="card quick" aria-label="바로가기">
      <ul className="q-list">
        {links.map((l) => (
          <li key={l.label}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
