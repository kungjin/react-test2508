import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import NoticeGallery from "./components/NoticeGallery";
import Banner from "./components/Banner"
import QuickLinks from "./components/QuickLinks"

import Menu_1 from "./pages/Menu_1";
import Menu_2 from "./pages/Menu_2";
import Menu_3 from "./pages/Menu_3";
import Menu_4 from "./pages/Menu_4";

const NotFound = () => <div style={{ padding: 16 }}>페이지를 찾을 수 없습니다.</div>;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
       
        <Route index element={<Home />} />                 {/* / */}
        <Route path="noticegallery" element={<NoticeGallery />} />
        <Route path="banner" element={<Banner />} />
        <Route path="quicklinks" element={<QuickLinks />} />


        {/* GNB 메뉴 */}
        <Route path="menu1" element={<Menu_1 />} />
        <Route path="menu2" element={<Menu_2 />} />
        <Route path="menu3" element={<Menu_3 />} />
        <Route path="menu4" element={<Menu_4 />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
