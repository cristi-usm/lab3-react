import { useNavigate } from 'react-router-dom';
import './Home.css';


import cafeImage from '../assets/cafe-exterior.png';
import pizzaPollo from '../assets/pizza-pollo.png';
import pizzaPepperoni from '../assets/pizza-pepperoni.png';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <div className="hero-section">
                <div className="cafe-card">
                    <img src={cafeImage} alt="Gusto Cafe Exterior" className="main-img" />
                    <div className="nav-buttons">
                        <button className="nav-btn btn-green" onClick={() => navigate('/profile')}>
                            ℹ️ Despre noi
                        </button>
                        <button className="nav-btn btn-green" onClick={() => navigate('/order')}>
                            🛒 Comanda
                        </button>
                    </div>
                </div>
            </div>

            <div className="menu-container">
                <div className="menu-card">
                    <img src={pizzaPollo} alt="Pizza Pollo" className="food-img" />
                    <div className="food-info">
                        <h3>Pizza Pollo</h3>
                        <p className="weight">1/500g</p>
                        <p className="price">Preț 115,00 lei</p>
                    </div>
                </div>

                <div className="menu-card">
                    <img src={pizzaPepperoni} alt="Pizza Pepperoni" className="food-img" />
                    <div className="food-info">
                        <h3>Pizza Pepperoni</h3>
                        <p className="weight">1/490g</p>
                        <p className="price">Preț 115,00 lei</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;