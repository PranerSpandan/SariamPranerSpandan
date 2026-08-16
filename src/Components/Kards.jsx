import React from 'react'
import { Link } from 'react-router-dom'
import c1 from '../assets/images/c1.jpg'
import c3 from '../assets/images/c3.jpg'
import c4 from '../assets/images/c4.jpg'

const initiatives = [
    {
        title: 'Tree Plantation',
        description: 'Strategic reforestation in urban and rural areas to restore local ecosystems and biodiversity.',
        image: c3,
        icon: '🌿',
        link: '/work'
    },
    {
        title: 'Youth Awareness',
        description: 'Empowering the next generation with environmental literacy and sustainable lifestyle workshops.',
        image: c1,
        icon: '🧠',
        link: '/work'
    },
    {
        title: 'School Outreach',
        description: 'Collaborating with schools to integrate practical environmental projects into the curriculum.',
        image: c4,
        icon: '🏫',
        link: '/work'
    }
]

const Kards = () => {
    return (
        <section className="kards-section" id="initiatives">
            <div className="kards-container">
                <div className="kards-header">
                    <div className="kards-header-left">
                        <span className="kards-overline">What We Do</span>
                        <h2 className="kards-title">Key Strategic Initiatives</h2>
                    </div>
                    <Link to="/work" className="kards-view-all">View All Programs →</Link>
                </div>

                <div className="kards-grid">
                    {initiatives.map((item, index) => (
                        <div className="initiative-card" key={index}>
                            <div className="card-img-wrapper">
                                <img src={item.image} alt={item.title} className="card-img" />
                            </div>
                            <div className="card-body-content">
                                <div className="card-icon-ring">
                                    <span className="card-icon">{item.icon}</span>
                                </div>
                                <h3 className="card-heading">{item.title}</h3>
                                <p className="card-desc">{item.description}</p>
                                <Link to={item.link} className="card-learn-more">
                                    Learn more &nbsp;→
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .kards-section {
                    padding: 7rem 5%;
                    background: #ffffff;
                }
                .kards-container {
                    max-width: 1280px;
                    margin: 0 auto;
                }
                .kards-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 3rem;
                }
                .kards-header-left {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                .kards-overline {
                    display: inline-block;
                    color: #256c2c;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 0.72rem;
                    letter-spacing: 4px;
                    font-family: 'Inter', sans-serif;
                }
                .kards-title {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: clamp(2rem, 3.5vw, 2.8rem);
                    font-weight: 800;
                    color: #002208;
                    margin: 0;
                    line-height: 1.2;
                }
                .kards-view-all {
                    color: #002208;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-decoration: none;
                    transition: var(--transition);
                    display: none;
                }
                .kards-view-all:hover { text-decoration: underline; }

                .kards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.8rem;
                }

                /* Card */
                .initiative-card {
                    background: #f0ede8;
                    border-radius: 1.5rem;
                    overflow: hidden;
                    transition: var(--transition);
                    position: relative;
                }
                .initiative-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 24px 48px rgba(37, 108, 44, 0.15);
                }

                .card-img-wrapper {
                    width: 100%;
                    height: 260px;
                    overflow: hidden;
                }
                .card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .initiative-card:hover .card-img {
                    transform: scale(1.08);
                }

                .card-body-content {
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .card-icon-ring {
                    width: 48px;
                    height: 48px;
                    background: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
                }
                .card-icon { font-size: 1.3rem; }
                .card-heading {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #002208;
                    margin: 0;
                }
                .card-desc {
                    color: #414940;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin: 0;
                }
                .card-learn-more {
                    display: inline-block;
                    color: #256c2c;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-decoration: none;
                    transition: var(--transition);
                    margin-top: 0.5rem;
                    font-family: 'Inter', sans-serif;
                }
                .card-learn-more:hover {
                    transform: translateX(4px);
                }

                @media (max-width: 900px) {
                    .kards-grid { grid-template-columns: 1fr; }
                    .kards-view-all { display: none !important; }
                }
                @media (min-width: 900px) {
                    .kards-view-all { display: block; }
                }
            `}</style>
        </section>
    )
}

export default Kards