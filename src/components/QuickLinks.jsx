export default function QuickLinks() {
  const links = [
    { label: "회원가입", href: "#" },
    { label: "장바구니", href: "#" },
    { label: "고객센터", href: "#" },
    { label: "이벤트", href: "#" },
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
