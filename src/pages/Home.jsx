import Slider from "../components/Slider";
import NoticeGallery from "../components/NoticeGallery";
import Banner from "../components/Banner";
import QuickLinks from "../components/QuickLinks";

export default function Home() {
  return (
    <>
      <section aria-labelledby="home-slider" className="slider-wrap">
        <h2 id="home-slider" className="sr-only">메인 슬라이드</h2>
        <Slider />
      </section>

      <section aria-labelledby="home-content" className="content-wrap">
        <h2 id="home-content" className="sr-only">메인 컨텐츠</h2>
        <div className="content-grid">
          <NoticeGallery />
          <Banner />
          <QuickLinks />
        </div>
      </section>
    </>
  );
}