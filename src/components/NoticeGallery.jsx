import React, { useState, useEffect, useRef } from 'react';

function NoticeGallery({ initialTab = "notice" }) {
    const safeInit = initialTab === "notice" ? "notice" : "gallery";
    const [tab, setTab] = useState(safeInit);

    useEffect(() => setTab(safeInit), [safeInit]);

    const [modalItem, setModalItem] = useState(null);
    const dlgRef = useRef(null);

    useEffect(() => {
        if (modalItem && dlgRef.current) dlgRef.current.showModal();
        else if (!modalItem && dlgRef.current?.open) dlgRef.current.close();
    }, [modalItem]);

    const notices = [
        { title: "[공지] 프로필 업데이트 안내", date: "2025-08-01", body: "프로필 UI/정책이 변경되었습니다. 자세한 내용은 공지 전문을 참고하세요." },
        { title: "[안내] 마케팅팀 홍길동 매니저 이력 소개", date: "2025-08-10", body: "신규 합류한 홍길동 매니저의 이력 및 담당 업무를 공유합니다." },
        { title: "[분석] 09/01 02:00~04:00", date: "2025-09-01", body: "해당 시간대 트래픽/전환율 분석 결과 요약입니다." },
    ];

    return (
        <article className='card' aria-labelledby='ng-title'>
            <p id='ng-title' className='sr-only'> 공지/ 갤러리</p>

            <div className='tabs' role='tablist' aria-label='공지/ 갤러리'>
                <button role='tab' id='tab-n'
                    aria-selected={tab === "notice"} aria-controls='panel-n'
                    onClick={() => setTab("notice")}>공지사항</button>
                <button role='tab' id='tab-g'
                    aria-selected={tab === "gallery"} aria-controls='panel-g'
                    onClick={() => setTab("gallery")}>갤러리</button>
            </div>

            {/* 공지사항 */}
            <section id="panel-n" role="tabpanel" aria-labelledby="tab-n" hidden={tab !== "notice"}>
                <ul className="list">
                    {notices.map((n, i) => (
                        <li key={i}>
                            <a
                                href="#"
                                className="link"                 // 글씨 링크 스타일
                                aria-haspopup="dialog"
                                aria-controls="notice-dialog"
                                onClick={(e) => {
                                    e.preventDefault();            // 페이지 점프 방지
                                    setModalItem(n);               // 모달 콘텐츠 설정 → useEffect가 showModal()
                                }}
                            >
                                {n.title}
                            </a>
                            <time className="meta">{n.date}</time>
                        </li>
                    ))}
                    </ul>
            </section>

            {/* 갤러리 */}
            <section id='panel-g' role='tabpanel' aria-labelledby='tab-g' hidden={tab !== "gallery"}>
                <div className="grid-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <img key={i} src={`https://picsum.photos/seed/g${i}/280/180`} alt={`갤러리 ${i + 1}`} />
                    ))}
                </div>
            </section>

            {/* 모달 */}
            <dialog id="notice-dialog" ref={dlgRef} onClose={() => setModalItem(null)}>
                <form method="dialog">
                    <header className="dlg-head">
                        <strong>{modalItem?.title}</strong>
                        <time className="meta">{modalItem?.date}</time>
                    </header>
                    <div className="dlg-body">
                        <p>{modalItem?.body}</p>
                    </div>
                    <menu className="dlg-actions">
                        <button value="close" className="btn">닫기</button>
                    </menu>
                </form>
            </dialog>
        </article>
    );
}

export default NoticeGallery;
