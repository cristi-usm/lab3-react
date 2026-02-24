import ActiveButton from "../ActiveButton";
import "./Header.css" 
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="main-header">
            <div className="logo">
                {/* <img src="path-to-your-logo.png" alt="my Logo" /> */}
                <h3>WANDER<span>.hd</span></h3>
            </div>
            <Navbar />
            <SearchBar placeholder={"Search for a place city, or an destionation...."} />
        </header>
    );
}

function Navbar() {
    const navbar = [
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destination" },
        { name: "Packages", path: "/packages" },
        { name: "Blog", path: "/blog" },
        { name: "About Us", path: "/about-us" }
    ];

    return (
        <nav className="main-nav">
            <ul>
                {navbar.map(link => (
                    <li key={link.path}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export function SearchBar({placeholder}) {
    return (
        <div className="header-actions">
            <div className="search-input-wrapper">
                <input type="text" placeholder={placeholder} />
                <span className="search-icon">🔍</span>
            </div>
            <ActiveButton text="Book now" />
        </div>
    );
}

