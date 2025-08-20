import React, { useState } from 'react';

function NoticeGallery() {
    const [tab, setTab] = useState("notice");

    return (
        <article className='card' aria-labelledby='ng-title'>
            <p id='ng-title' className='sr-only'> 공지/ 갤러리</p>
            <div className='tabs' role='tablist' aria-label='공지/ 갤러리'>
                <button
                    role='tab'
                    id='tab-n'
                    aria-selected={tab === "notice"}
                    aria-controls='panel-n'
                    onClick={() => setTab("notice")}
                >
                    공지사항
                </button>
                <button
                    role='tab'
                    id='tab-g'
                    aria-selected={tab === "gallery"}
                    aria-controls='panel-g'
                    onClick={() => setTab("gallery")}
                >
                    갤러리

                </button>
            </div>
            <section id="panel-n" role="tabpanel" aria-labelledby="tab-n" hidden={tab !== "notice"}>
                <ul className="list">
                    <li>[공지] 쇼핑몰 오픈 안내 <time className="meta">2025-08-01</time></li>
                    <li>[안내] 배송 지연 안내 <time className="meta">2025-08-10</time></li>
                    <li>[점검] 09/01 02:00~04:00 <time className="meta">2025-09-01</time></li>
                </ul>
            </section>

            <section id='panel-g' role='tabpanel' aria-labelledby='tab-g' hidden={tab !== "gallery"}>
                <div className="grid-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <img key={i} src={`https://picsum.photos/seed/g${i}/280/180`} alt={`갤러리 ${i + 1}`} />
                    ))}
                </div>

            </section>
        </article>
    );
}

export default NoticeGallery