import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div className="profile-page">
            <div className="profile-header">
                <button className="close-btn" onClick={() => navigate('/')}>×</button>
                <h1>
                    <span className="text-gusto">Gusto</span>
                    <span className="text-cafe">Cafe</span>
                </h1>
            </div>

            <div className="profile-content">
                <div className="info-card bg-green">
                    <div className="card-header">
                        <span className="icon">🏠</span>
                        <h2>Descriere</h2>
                    </div>
                    <p>Cafenea cu personal primitor</p>
                    <p>Luni-Duminică 9:00-22:00</p>
                </div>

                <div className="info-card bg-green">
                    <div className="card-header">
                        <span className="icon">📍</span>
                        <h2>Adresa</h2>
                    </div>
                    <p>Codru, strada Valea Apelor, 19</p>
                </div>

                <div className="info-card bg-green">
                    <div className="card-header">
                        <span className="icon">📞</span>
                        <h2>Numar telefon</h2>
                    </div>
                    <p>(+373) 785 59 664</p>
                </div>
            </div>

            <div className="profile-footer">
                <button className="footer-btn">Scrie un mesaj</button>
                <button className="footer-btn">Apeleaza</button>
            </div>
        </div>
    );
};

export default Profile;