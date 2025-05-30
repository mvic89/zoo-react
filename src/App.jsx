import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Mammals from "./pages/Mammals"
import Birds from "./pages/Birds"
import Reptiles from "./pages/Reptiles"
import Layout from "./pages/Layout"

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home homeText='Welcome to the Australian Zoo!'/>}/>
          <Route path='/mammals' element={<Mammals mammalsText='Welcome to the Mammals Page!'/>}/>
          <Route path='/birds' element={<Birds birdsText='Welcome to the Birds Page!'/>}/>
          <Route path='/reptiles' element={<Reptiles reptilesText='Welcome to Reptiles Page!'/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
