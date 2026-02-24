import './StatCars.css'
import { FaRegSmileBeam, FaAward, FaMapMarkerAlt } from "react-icons/fa";

const StatCard = ({icon, title, description}) => {
    return (
        <div className="stat-container" >
            <div className="icon-circle">
                <span style={{fontSize: "1.5rem" }} >{icon}</span>
            </div>
            <h3 className="stat-title">{title}</h3>
            <p className="stat-description">{description}</p>
        </div>
    )
}


export const StatSection = () =>{

    const data = [
    {
      id: 1,
      icon: <FaRegSmileBeam />,
      title: "12k",
      description: "Happy and Satisfied Travelers"
    },
    {
      id: 2,
      icon: <FaAward />,
      title: "10yrs",
      description: "Proven Travel Industry Experience"
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      title: "50+",
      description: "Philippine Destinations Covered"
    }
    ]

    return (
        <div className="stats-grid-container">
            {data.map((item) =>(
                <StatCard 
                    key={item.id}
                    icon={item.icon}
                    title={item.icon}
                    description={item.description}
                />
            ))}
        </div>
    )

}