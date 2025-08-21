// src/components/Layout.jsx
import { Outlet, Link /*, NavLink*/ } from 'react-router-dom';

const MENU = [
  { label: "Menu-1", to: "menu1", subs: ["SubMenu-1","SubMenu-2","SubMenu-3","SubMenu-4"] },
  { label: "Menu-2", to: "menu2", subs: ["SubMenu-1","SubMenu-2","SubMenu-3","SubMenu-4"] },
  { label: "Menu-3", to: "menu3", subs: ["SubMenu-1","SubMenu-2","SubMenu-3","SubMenu-4"] },
  { label: "Menu-4", to: "menu4", subs: ["SubMenu-1","SubMenu-2","SubMenu-3","SubMenu-4"] },
];

function Layout() {
  return (
    <>
      {/* (선택) 스킵 링크 */}
      {/* <a href="#main" className="skip">본문 바로가기</a> */}

      <header className="header">
        <div className="logo">
          <Link to="/">96CA</Link>
        </div>

        <nav className="gnb" aria-label="주요 메뉴">
          <ul>
            {MENU.map(m => (
              <li key={m.to}>
              
                <Link to={m.to} className="top" aria-haspopup="true">
                  {m.label}
                </Link>

                <ul className="sub">
                  {m.subs.map((s, j) => (
                    <li key={j}>
                      <Link to={m.to}>{s}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer>
        <div className="logo">
          <Link to="/">96CA</Link>
        </div>
        <p>© 2025 96CA. Human research for a better tomorrow.</p>
        <div className="sns">SNS 아이콘</div>
      </footer>
    </>
  );
}

export default Layout;
