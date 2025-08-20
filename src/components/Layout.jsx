import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


function Layout() {
    const [open, setOpen] = useState(null);

    const MENU = [
        { label: "Menu-1", to: "Menu-1", subs: ["SubMenu-1", "SubMenu-2", "SubMenu-3", "SubMenu-4"] },
        { label: "Menu-2", to: "Menu-2", subs: ["SubMenu-1", "SubMenu-2", "SubMenu-3", "SubMenu-4"] },
        { label: "Menu-3", to: "Menu-3", subs: ["SubMenu-1", "SubMenu-2", "SubMenu-3", "SubMenu-4"] },
        { label: "Menu-4", to: "Menu-4", subs: ["SubMenu-1", "SubMenu-2", "SubMenu-3", "SubMenu-4"] }
    ]


    return (
        <>

            <header className='header'>
                <div className='logo'>
                    <Link to="/wd-layout">
                        96CA
                    </Link>
                </div>
                <nav className='gnb' aria-label='주요 메뉴'>
                    <ul>
                        {MENU.map((m, i) => (
                            <li
                                key={m.to}
                                onMouseEnter={() => setOpen(i)}
                                onMouseLeave={() => setOpen(null)}
                            >
                                <button
                                type='button'
                                className='top'
                                aria-expanded={open === i}
                                aria-controls={`sub-${i}`}
                                onClick={() => setOpen(open === i ? null :i)}
                                >
                                    {m.label}
                                </button>
                                <ul id={`sub-${i}`} className={`sub ${open === i ?"show" : "" }`}
                                role='menu'
                                >
                                    {m.subs.map((s,j) =>(
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

            <main>
                <Outlet />
            </main>

            <footer>
                <div className='logo'>
                    <Link to="/wd-layout">
                        96CA
                    </Link>
                </div>
                <p> © 2025 쇼핑몰 </p>
                <div className='sns'> SNS 아이콘 </div>
            </footer>

        </>
    );
}

export default Layout;