import ActiveButton from '../../ActiveButton';
import './TourPackages.css';
import { FaShip, FaHiking } from 'react-icons/fa';



const CardPacket = ({icon, image, name, title, description}) =>{
    return(
        <div className="package-card">
                <div className="package-icon">{icon}</div>
                <img src={image} alt={name} className="package-image" />
                <div className="package-overlay">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
         </div>
    )
}


export default function TourPackages() {

    const data =[
        {
            id: 1,
            icon: <FaShip />,
            image: "https://i.pinimg.com/1200x/7a/d4/d8/7ad4d890ffb359ae5c9398f5be35ddac.jpg",
            name: "Island",
            title: "Island Hopper Adventure",
            description: "Hop from beach to beach in Palawan with boat tours and snorkeling."
        },
        {
            id: 2,
            icon: <FaHiking />,
            image: "https://i.pinimg.com/736x/84/22/d4/8422d4281dc7a82aa62d6637bf8bb8bb.jpg",
            name: "Mountain",
            title: "Northern Highland Escape",
            description: "Experience the cool breeze of Baguio and Sagada with scenic views."
        }
    ]


    return (
        <div className="tour-packages-section">
            <div className="intro-card">
                <div>
                    <h2>Tour Packages</h2>
                    <p>Affordable, customizable, and unforgettable adventures.</p>
                </div>
                <ActiveButton  text={"Browse all packages"}/>
            </div>
            {data.map((item)=>(
                <CardPacket  key={item.key}  {...item}/>
            ))}
        </div>
    );
};

