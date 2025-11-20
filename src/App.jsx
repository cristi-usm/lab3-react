import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import './App.css';
import {Login} from "./pages/login/Login.jsx";

function Nav() {
    const location = useLocation();

    if (location.pathname === "/login") {
        return null;
    }

    return (
        <nav>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/login">Login</Link></div>
        </nav>
    );
}

function App() {

  return (
    <>
        <BrowserRouter>
            <Nav />
            <div className="toolbar">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/about" element={<About />} />*/}
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
            <div className="content"></div>
        </BrowserRouter>
    </>
  )
}

export default App
