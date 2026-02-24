import { FaPlay } from 'react-icons/fa';
import './BlogDetail.css';
import ActiveButton from '../../ActiveButton';

const ContentSplit = ({ title, subtitle, text, image, reverse }) => {
    return (
        <div className={`split-container ${reverse ? 'reverse' : ''}`}>
            <div className="image-wrapper">
                <img src={image} alt={title} />
                <div className="play-button"><FaPlay /></div>
            </div>
            <div className="text-wrapper">
                <span className="subtitle">{subtitle}</span>
                <h1>{title}</h1>
                <p>{text}</p>
                <ActiveButton text={"Read More ->"} />
            </div>
        </div>
    );
};

const VerticalArticleCard = ({ image, title, days, description, price }) => {
    return (
        <div className="vertical-card">
            <div className="card-img-wrapper">
                <img src={image} alt={title} className="card-img" />
                {days && <span className="card-duration">{days}</span>}
            </div>
            <div className="card-info">
                <h3>{title}</h3>
                <p className="card-desc">{description}</p>
                <div className="card-footer">
                    <span className="card-price">{price}</span>
                    <ActiveButton text={"View -"} />
                </div>
            </div>
        </div>
    );
};

export const BlogDetailsPage = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Edinburgh Tour",
            days: "3 days",
            description: "Explore the historic capital of Scotland with its stunning medieval architecture and royal history.",
            price: "$299",
            image: "https://i.pinimg.com/736x/92/e3/5a/92e35a8a981892d4ff0b58f92469dd1b.jpg"
        },
        {
            id: 2,
            title: "Isle of Skye",
            days: "5 days",
            description: "A journey through the mist-shrouded landscapes, rugged coastline, and fairy pools.",
            price: "$450",
            image: "https://i.pinimg.com/736x/e5/67/9c/e5679c8002ed561c0897264cc5f4f834.jpg"
        },
        {
            id: 3,
            title: "Loch Ness",
            days: "2 days",
            description: "Visit the famous deep freshwater loch in the Scottish Highlands, known for the monster Nessie.",
            price: "$150",
            image: "https://i.pinimg.com/736x/b2/6b/7e/b26b7ed5392a1ff6073dbadf80520693.jpg"
        }
    ];

    return (
        <div className="blog-page-full">
            <section className="hero-section2">
                <div className="hero-text-side">
                    <h1>AWESOME</h1>
                    <h2>COUNTRY</h2>
                    <div className="stats-row">
                        <div className="stat-item"><b>3K+</b><span>castles</span></div>
                        <div className="stat-item"><b>31K+</b><span>lakes</span></div>
                        <div className="stat-item"><b>700+</b><span>islands</span></div>
                    </div>
                    <ActiveButton text={"Read More->"} />
                </div>
                <div className="image-stack">
                    <img src="https://i.pinimg.com/736x/62/7f/6a/627f6a85f301fa1ab66f44a0364ac344.jpg" className="stack-img img-1" alt="stack-1" />
                    <img src="https://i.pinimg.com/736x/17/7a/9b/177a9bc88688afc50882613fed48f63c.jpg" className="stack-img img-2" alt="stack-2" />
                    <img src="https://i.pinimg.com/736x/92/4f/9d/924f9d586ead1948c38bed277ddbaef5.jpg" className="stack-img img-3" alt="stack-3" />
                </div>
            </section>

            <ContentSplit 
                subtitle="DISCOVER"
                title="SCOTLAND"
                text="Scotland is a country of amazing diversity, where you can find almost a complete set of tourist attractions: beautiful medieval cities, fabulous castles and beautiful natural landscapes."
                image="https://images.unsplash.com/photo-1505832018823-50331d70d237?auto=format&fit=crop&w=1200"
            />

            <section className="popular-tours">
                <h1 className="section-main-title">POPULAR TOURS</h1>
                <div className="tours-grid">
                    {blogPosts.map(post => (
                        <VerticalArticleCard key={post.id} {...post} />
                    ))}
                </div>
            </section>
        </div>
    );
};