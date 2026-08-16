import React from 'react'

const stats = [
    {
        icon: '🌳',
        value: '10k+',
        label: 'Trees Planted & Thriving',
        bg: 'rgba(37, 108, 44, 0.08)',
        color: '#256c2c'
    },
    {
        icon: '🏫',
        value: '50+',
        label: 'Educational Partnerships',
        bg: 'rgba(0, 34, 8, 0.07)',
        color: '#002208'
    },
    {
        icon: '🙌',
        value: '5,000+',
        label: 'Youth Volunteers Mobilized',
        bg: 'rgba(6, 33, 4, 0.07)',
        color: '#062104'
    }
]

const ImpactSection = () => {
    return (
        <section className="impact-section" id="impact">
            <div className="impact-container">
                <div className="impact-header">
                    <h2 className="impact-title">Our Growing Impact</h2>
                    <p className="impact-subtitle">
                        Transparency and action go hand in hand. Here is what we have achieved
                        together since our inception.
                    </p>
                </div>

                <div className="impact-grid">
                    {stats.map((stat, i) => (
                        <div className="impact-card" key={i}>
                            <div className="impact-icon-ring" style={{ background: stat.bg }}>
                                <span className="impact-icon">{stat.icon}</span>
                            </div>
                            <div className="impact-value" style={{ color: stat.color }}>
                                {stat.value}
                            </div>
                            <p className="impact-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .impact-section {
                    padding: 7rem 5%;
                    background: #fcf9f4;
                }
                .impact-container {
                    max-width: 1280px;
                    margin: 0 auto;
                }
                .impact-header {
                    text-align: center;
                    max-width: 560px;
                    margin: 0 auto 4rem;
                }
                .impact-title {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: clamp(2rem, 3.5vw, 2.8rem);
                    font-weight: 800;
                    color: #002208;
                    margin-bottom: 1rem;
                }
                .impact-subtitle {
                    color: #414940;
                    font-size: 1rem;
                    line-height: 1.7;
                    margin: 0;
                }

                .impact-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
                .impact-card {
                    background: white;
                    padding: 3rem 2rem;
                    border-radius: 9999px;
                    text-align: center;
                    border: 1px solid rgba(193, 201, 189, 0.2);
                    box-shadow: 0 2px 20px rgba(0,0,0,0.03);
                    transition: var(--transition);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
                .impact-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 24px 48px rgba(37, 108, 44, 0.12);
                }
                .impact-icon-ring {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .impact-icon {
                    font-size: 1.8rem;
                    line-height: 1;
                }
                .impact-value {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 3rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    line-height: 1;
                }
                .impact-label {
                    font-family: 'Inter', sans-serif;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #414940;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .impact-grid { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; }
                    .impact-card { border-radius: 2rem; }
                }
            `}</style>
        </section>
    )
}

export default ImpactSection
