import { useNavigate } from 'react-router-dom';
import './Order.css';

const OrderPage = () => {
    const navigate = useNavigate();

    const items = [
        { id: 1, name: 'Pizza Pollo', price: '230,00', quantity: 2 },
        { id: 2, name: 'Kebab', price: '210,00', quantity: 3 },
        { id: 3, name: 'Bere CORONA Extra (sticlă)', price: '45,00', quantity: 1 },
    ];

    return (
        <div className="order-page">
            <div className="order-header">
                <div className="header-left">
                    <button className="close-btn" onClick={() => navigate('/')}>×</button>
                    <h1>Comanda mea</h1>
                </div>
                <div className="header-right">
                    <p>Total 485,00 lei</p>
                    <span>(incl. TVA)</span>
                </div>
            </div>

            <div className="order-content">
                {items.map((item) => (
                    <div key={item.id} className="food-item-card">
                        <div className="item-info">
                            <h3>{item.name}</h3>
                            <p>Prețul {item.price}</p>
                        </div>
                        <div className="quantity-controls">
                            <span className="qty-badge">{item.quantity}</span>
                            <button className="qty-btn">-</button>
                            <button className="qty-btn">+</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="order-footer">
                <h2>Comandă</h2>
                <p>(luati comanda din restaurant)</p>
            </div>
        </div>
    );
};

export default OrderPage;