import Slider from "../components/Slider"
import NoticeGallery from "../components/NoticeGallery"
import Banner from "../components/Banner"
import QuickLinks from "../components/QuickLinks"

export default function Home() {
    return(
        <>
        <section aria-label="메인 컨텐츠" className="slider-wrap">
            <Slider />
        </section>

        <section aria-label="메인 컨텐츠" className="content-wrap">
            <div className="content-grid">
                <NoticeGallery />
                <Banner/>
                <QuickLinks/>
            </div>
        </section>
        </>
    )

}