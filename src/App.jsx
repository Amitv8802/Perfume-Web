
import { Route, Routes } from 'react-router-dom'
import AboutUs from './About/AboutUs'
import './App.css'
import ZauraBlog from './BlogPage/ZauraBlog'
import ZAuraSignatureCollection from './Collections/ZauraCollections'
import Home from './Home/Home'
import ZAuraBoutiques from './Store/Boutique'
import WhyUsPage from './WhyUsPage/WhyUsPage'



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/collection' element={<ZAuraSignatureCollection/>}></Route>
      <Route path='/Boutiques' element={<ZAuraBoutiques/>}></Route>
      <Route path='/About' element={<AboutUs/>}></Route>
      <Route path='/Whyuse' element={<WhyUsPage/>}></Route>
      <Route path='/Blogs' element={<ZauraBlog/>}></Route>
    </Routes>
    </>
  )
}

export default App
