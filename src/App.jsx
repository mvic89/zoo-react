import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Mammals from "./pages/Mammals"
import Birds from "./pages/Birds"
import Reptiles from "./pages/Reptiles"

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mammals' element={<Mammals/>}/>
        <Route path='/birds' element={<Birds/>}/>
        <Route path='/reptiles' element={<Reptiles/>}/>
      </Routes>
    </>
  )
}

export default App
