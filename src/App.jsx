import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Blog from "./pages/Blog";

function App() {

  return (
    <Router>
      <div className="app-container">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destinations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<h1>Pagina nu a fost găsită!</h1>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
