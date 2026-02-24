import './ReviewSection.css';

const ReviewCard = ({ name, text, rating, avatar }) => (
    <div className="review-card">
        <img src={avatar} alt={name} className="user-avatar" />
        <div className="review-stars">{"★".repeat(rating)}{"☆".repeat(5-rating)}</div>
        <p className="review-text">"{text}"</p>
        <h4 style={{ marginTop: '15px' }}>- {name}</h4>
    </div>
);

export const ReviewsSection = () => {
    const reviews = [
        { id: 1, name: "I need a dollar..", text: "The encryption explanation made me feel so safe booking here!", rating: 5, avatar: "https://i.pravatar.cc/150?img=51" },
        { id: 2, name: "Andrei T.", text: "Best itineraries I've ever used. Highly recommend!", rating: 4, avatar: "https://i.pravatar.cc/150?img=11" },
        { id: 3, name: "Elena V.", text: "Clear, concise, and beautiful interface. 5 stars!", rating: 5, avatar: "https://i.pravatar.cc/150?img=32" }
    ];

    return (
        <section className="reviews-container">
            <h1 className="section-main-title">REVIEWS</h1>
            <div className="reviews-grid">
                {reviews.map(rev => <ReviewCard key={rev.id} {...rev} />)}
            </div>
        </section>
    );
};