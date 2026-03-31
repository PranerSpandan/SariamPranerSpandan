import React from 'react'
import c1 from '../assets/images/c1.jpg'
import c3 from '../assets/images/c3.jpg'
import c4 from '../assets/images/c4.jpg'

const Kards = () => {
    const initiatives = [
        {
            title: "Tree Plantation Drive",
            description: "Restoring the local ecosystem by planting thousands of native tree species in across the region.",
            image: c3,
            label: "Conservation",
            color: "#e2f1e1"
        },
        {
            title: "Schools Outreach",
            description: "Connecting with students to foster a lifelong relationship with nature through workshops and events.",
            image: c1,
            label: "Awareness",
            color: "#f8f3e5"
        },
        {
            title: "Future Guardians",
            description: "Empowering children to take the lead in environmental protection through hands-on activities.",
            image: c4,
            label: "Youth Lead",
            color: "#e8f0fe"
        }
    ];

    return (
        <section className="initiatives-section" id="work">
            <div className="section-header">
                <span className="section-label">What We Do</span>
                <h2 className="section-title">Our Sustainable <br/><span className="text-leaf">Initiatives</span></h2>
            </div>

            <div className="initiatives-grid">
                {initiatives.map((item, index) => (
                    <div className="initiative-card" key={index}>
                        <div className="card-media">
                            <img src={item.image} alt={item.title} />
                            <span className="card-badge" style={{ backgroundColor: item.color }}>{item.label}</span>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">{item.description}</p>
                            <a href={`#${item.label.toLowerCase()}`} className="card-link">
                                Explore Project
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .initiatives-section {
                    padding: 8rem 5%;
                    max-width: 1300px;
                    margin: 0 auto;
                }
                .section-header {
                    margin-bottom: 4rem;
                }
                .section-label {
                    color: var(--secondary);
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    font-size: 0.85rem;
                }
                .section-title {
                    font-size: 3.5rem;
                    margin-top: 1rem;
                    color: var(--primary);
                }
                .text-leaf { color: var(--secondary); }

                .initiatives-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2.5rem;
                }

                .initiative-card {
                    background: var(--white);
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
                    transition: var(--transition);
                    cursor: pointer;
                    position: relative;
                }
                .initiative-card:hover {
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    transform: translateY(-8px);
                }

                .card-media {
                    width: 100%;
                    height: 280px;
                    overflow: hidden;
                    position: relative;
                }
                .card-media img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .initiative-card:hover .card-media img {
                    transform: scale(1.1);
                }

                .card-badge {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    padding: 6px 14px;
                    border-radius: 100px;
                    font-weight: 700;
                    font-size: 0.75rem;
                    color: var(--primary);
                    text-transform: uppercase;
                }

                .card-body {
                    padding: 2.5rem;
                }
                .card-title {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    color: var(--primary);
                }
                .card-description {
                    font-size: 1rem;
                    color: var(--text-muted);
                    margin-bottom: 2rem;
                    line-height: 1.7;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .card-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--secondary);
                    font-weight: 700;
                    font-size: 0.95rem;
                    transition: var(--transition);
                }
                .card-link:hover {
                    gap: 18px;
                }
                
                @media (max-width: 900px) {
                    .initiatives-grid { grid-template-columns: 1fr; }
                    .section-title { font-size: 2.5rem; }
                }
            `}</style>
        </section>
    )
}

export default Kards