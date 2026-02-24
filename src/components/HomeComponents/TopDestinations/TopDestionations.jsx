import { FaMapPin } from "react-icons/fa"
import ActiveButton from "../../ActiveButton"
import './TopDestionations.css'



const DestionationCard = ({image, price, name, type, rating, location}) =>{
    return (
        <div className="destination-card">
            <img src={image} alt={name} className="card-image" />
            <div className="price-tag">starts at {price}</div>
            <div className="card-overlay">
                <h3>{name}</h3>
                <p>{type} | <span className="rating">{rating}</span></p>
                <p> <FaMapPin /> {location}</p>
            </div>
        </div>
    )
}




export default function TopDestionations(){
    const data =[
        { id: 1, name: "El Nido", price: "P4,999", type: "Beach paradise", rating: "4.8 (1.2k)", location: "Palawan, Region", image: "https://i.pinimg.com/736x/ad/b3/d8/adb3d8d0fe975e2c763423f03940e844.jpg" },
        { id: 2, name: "Baguio City", price: "P3,200", type: "Mount Getaway", rating: "4.6 (950)", location: "Bonguet, Region", image: "https://i.pinimg.com/1200x/96/1c/7e/961c7e30ad55848aa6662d2cf51e99da.jpg" },
        { id: 3, name: "Siargao", price: "P5,500", type: "Surt & Chill", rating: "4.9 (2k)", location: "Surigao del Norse, Region", image: "https://i.pinimg.com/1200x/d5/f3/e2/d5f3e2497a3f3f72a829e072c3e76071.jpg" },
        { id: 4, name: "Vigan", price: "P4,250", type: "Heritage City", rating: "4.7 (780)", location: "Bocos Sur, Region", image: "https://i.pinimg.com/736x/58/74/c3/5874c3bec099a4c3133266a7163e64e4.jpg" },


    ]


    
    return (
        <section className="destinations-section">
            <div className="section-header">
                <div>
                    <h2>Top Destinations</h2>
                </div>
                <p style={{ maxWidth: '400px' }}>
                    From island escapes to cool mountain towns, discover where your next journey will take you.
                </p>
            </div>

            <div className="cards-container">
                {data.map(dest => <DestionationCard key={dest.id} {...dest} />)}
            </div>
            <br /> <br />
            <ActiveButton  text={"View More"}/>
        </section>
    )
}