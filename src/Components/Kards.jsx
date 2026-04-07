import React from 'react'
import { Link } from 'react-router-dom'
import MovingIcon from './MovingIcon'
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
        <section className="bg-accent" id="work">
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
                            <Link to="/work" className="card-link">
                                Explore Project
                                <MovingIcon name="arrow-right" size={20} color="currentColor" strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .section-header {
                    margin-bottom: 5rem;
                    max-width: 1300px;
                    margin: 0 auto 5rem;
                }
                .section-label {
                    color: var(--secondary);
                    font-weight: 700;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                }
                .section-title {
                    font-size: 4rem;
                    margin-top: 1.5rem;
                    color: var(--primary);
                    line-height: 1.2;
                }
                .text-leaf { color: var(--secondary); }

                .initiatives-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 3rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .initiative-card {
                    background: var(--surface-lowest);
                    border-radius: var(--radius-xl);
                    overflow: hidden;
                    transition: var(--transition);
                    cursor: pointer;
                    position: relative;
                    /* Ambient Light Shadow */
                    box-shadow: 0 10px 40px rgba(0,0,0,0.02);
                }
                .initiative-card:hover {
                    box-shadow: 0 40px 80px rgba(28, 28, 25, 0.08);
                    transform: translateY(-8px);
                }

                .card-media {
                    width: 100%;
                    height: 320px;
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
                    top: 24px;
                    right: 24px;
                    padding: 8px 16px;
                    border-radius: 100px;
                    font-weight: 700;
                    font-size: 0.7rem;
                    color: var(--primary);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .card-body {
                    padding: var(--spacing-8);
                }
                .card-title {
                    font-size: 1.75rem;
                    margin-bottom: 1.2rem;
                    color: var(--primary);
                }
                .card-description {
                    font-size: 1.05rem;
                    color: var(--text-secondary);
                    margin-bottom: 2.5rem;
                    line-height: 1.75;
                }
                .card-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--secondary);
                    font-weight: 800;
                    font-size: 0.95rem;
                    transition: var(--transition);
                }
                .card-link:hover {
                    gap: 18px;
                }
                
                @media (max-width: 900px) {
                    .initiatives-grid { grid-template-columns: 1fr; }
                    .section-title { font-size: 3rem; }
                }
            `}</style>
        </section>
    )
}

export default Kards