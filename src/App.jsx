import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Features from "./pages/Features"
import About from "./pages/About"
import Layout from "./layout/Layout"
import Gallery from "./pages/Gallery"

function App({ containerRef }) {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home containerRef={containerRef} />} />
          <Route path="/features" element={<Features />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
