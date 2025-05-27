import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Mammals from "./pages/Mammals"
import Birds from "./pages/Birds"
import Reptiles from "./pages/Reptiles"
import Layout from "./pages/Layout"
import MainContent from './components/MainContent'


function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/mammals' element={<Mammals/>}/>
          <Route path='/birds' element={<Birds/>}/>
          <Route path='/reptiles' element={<Reptiles/>}/>
          <Route path="/:animalName" element={<MainContent/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
