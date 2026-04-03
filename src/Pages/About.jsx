import React from 'react'

const About = () => {
    return (
        <main className="page-container">
            <div className="page-header">
                <span className="section-label">Who We Are</span>
                <h1 className="page-title">
                    Rooted in <br /><span className="text-leaf">Sariam</span>
                </h1>
                <p className="page-subtitle">
                    A grassroots movement blooming from Debithakurbari, Jalpaiguri, dedicated to nurturing our environment and empowering youth through nature.
                </p>
            </div>

            <section className="content-section">
                <div className="text-block">
                    <h2>Our Genesis</h2>
                    <p>
                        Sariam Praner Spandan was not built in a day; it grew organically from the simple realization that our local forests were quiet. What started as small groups of concerned citizens looking after neighborhood saplings has blossomed into a fully registered non-governmental organization. We are based out of Sariam, Jalpaiguri, and operate on the philosophy that true conservation begins in our own backyards.
                    </p>
                </div>
                
                <div className="text-block mt-4">
                    <h2>Our Mission & Vision</h2>
                    <p>
                        Our mission is to establish a <strong>Living Editorial Initiative</strong> — an open, accessible movement where the youth document their relationship with nature and actively participate in restoring it. Our vision is a self-sustaining ecosystem where community-driven plantation drives, environmental education, and organic farming become the standard norm for society.
                    </p>
                </div>
            </section>

            <section className="team-section">
                <div className="gallery-header" style={{ marginBottom: '3rem' }}>
                    <span className="section-label">The Governing Body</span>
                    <h2 className="gallery-title" style={{ fontSize: '2.5rem' }}>Meet the <span className="text-leaf">Guardians</span></h2>
                </div>
                
                <div className="team-grid">
                    {/* Placeholder Team Members */}
                    {[1, 2, 3, 4].map((member) => (
                        <div key={member} className="team-card">
                            <div className="team-avatar-placeholder">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </div>
                            <h3>Member Name</h3>
                            <p className="team-role">Governing Body</p>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                .page-container {
                    padding: 10rem 5% 5rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .page-header {
                    margin-bottom: 5rem;
                    max-width: 800px;
                }
                .page-title {
                    font-size: clamp(3rem, 6vw, 4.5rem);
                    line-height: 1.1;
                    color: var(--primary);
                    margin-top: 1rem;
                    font-weight: 800;
                }
                .page-subtitle {
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                    margin-top: 1.5rem;
                    line-height: 1.7;
                    max-width: 650px;
                }
                .text-leaf {
                    color: var(--secondary);
                }
                .content-section {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    margin-bottom: 6rem;
                }
                @media (min-width: 900px) {
                    .content-section { grid-template-columns: 1fr 1fr; }
                }
                .text-block h2 {
                    font-size: 2rem;
                    color: var(--primary);
                    margin-bottom: 1.5rem;
                }
                .text-block p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    line-height: 1.8;
                }
                .team-section {
                    background: var(--surface-container);
                    padding: 5rem 3rem;
                    border-radius: var(--radius-xl);
                }
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 2rem;
                }
                .team-card {
                    background: var(--bg-main);
                    padding: 2.5rem 1.5rem;
                    border-radius: var(--radius-lg);
                    text-align: center;
                    border: 1px solid var(--outline-variant);
                    transition: var(--transition);
                }
                .team-card:hover {
                    border-color: var(--secondary);
                    transform: translateY(-5px);
                }
                .team-avatar-placeholder {
                    width: 80px;
                    height: 80px;
                    background: var(--primary-container);
                    color: var(--primary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                }
                .team-card h3 {
                    color: var(--primary);
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                }
                .team-role {
                    color: var(--secondary);
                    font-weight: 600;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                }
            `}</style>
        </main>
    )
}

export default About
