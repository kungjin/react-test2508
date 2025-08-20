import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Menu_4 from './pages/Menu_4'
import Menu_3 from './pages/Menu_3'
import Menu_2 from './pages/Menu_2'
import Menu_1 from './pages/Menu_1'
import Home from './pages/Home'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

        {/* 네비에 들어가는 구성 메뉴들 */}
        <Route path="menu1" element={<Menu_1/>} />
        <Route path="menu2" element={<Menu_2/>} />
        <Route path="menu3" element={<Menu_3/>} />
        <Route path="menu4" element={<Menu_4/>} />

        </Route>
      </Routes>
    </>
  )
}

export default App
