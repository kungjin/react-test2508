import promo from "../public/man.jpg";

export default function Banner() {
  return (
    <aside className="card" aria-label="프로모션 배너">
      <a className="banner" href="#">
        <img src={promo} alt="프로모션 배너" />
      </a>
      <p style={{textAlign: 'center'}}>
        - 홍길동 -
      </p>
    </aside>
  );
}
