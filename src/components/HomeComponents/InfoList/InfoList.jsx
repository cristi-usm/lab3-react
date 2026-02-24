import './InfoList.css'

import { FaMap } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";


const InfoCard = ({icon, title, description}) =>{
    return (
        <div className="info-card">
            <div className="icon-wrapper">
                <span style={{fontSize: "5rem"}}>{icon}</span>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export const InfoList = () =>{
    const data =[
    {
      id: 1,
      icon: <FaMap />,
      title: "Local Expertise",
      description: "Our Filipino travel experts craft unique experiences with insider knowledge."
    },
    {
      id: 2,
      icon: <FaCalendarAlt />,
      title: "All-in-One Booking",
      description: "Book everything in one place—easy, fast, and hassle-free."
    },
    {
      id: 3,
      icon: <FaHeadphones />,
      title: "24/7 Support",
      description: "We're here anytime, anywhere. Get real-time help whenever you need it."
    }
    ]

    return (
        <div className="info-cards-container">
            {data.map((item) => (
                <InfoCard
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    )
}