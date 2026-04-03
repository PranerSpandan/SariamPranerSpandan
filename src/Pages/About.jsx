import React, { useState, useEffect } from 'react'

const About = () => {
    const [teamData, setTeamData] = useState({ governingBody: [], generalMembers: [] });

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}team.json`)
            .then(res => res.json())
            .then(data => setTeamData(data))
            .catch(err => console.error("Error loading team data:", err));
    }, []);

    const resolvePath = (path) => {
        if (!path) return null;
        if (path.startsWith('http') || path.startsWith('data:')) return path;
        return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
    };

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
                    {teamData.governingBody.map((member, idx) => (
                        <div key={idx} className="team-card">
                            <div className="team-avatar-placeholder">
                                {member.photo ? (
                                    <img src={resolvePath(member.photo)} alt={member.name} />
                                ) : (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                )}
                            </div>
                            <h3>{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="members-list-section">
                <div className="gallery-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h2 className="gallery-title" style={{ fontSize: '2rem' }}>General <span className="text-leaf">Members</span></h2>
                    <p className="page-subtitle" style={{ margin: '1rem auto 0', maxWidth: '600px' }}>
                        The roots of our organization. These dedicated individuals form the core volunteer base that drives our daily initiatives.
                    </p>
                </div>
                
                <div className="members-grid">
                    {teamData.generalMembers.map((member, idx) => (
                        <div key={idx} className="member-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M5 12l5 5L20 7"></path></svg>
                            <span>{member}</span>
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
                    margin-bottom: 4rem;
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
                    overflow: hidden;
                }
                .team-avatar-placeholder img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
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

                .members-list-section {
                    background: transparent;
                    padding: 3rem;
                    border-radius: var(--radius-xl);
                    border: 1px dashed var(--outline-variant);
                }
                .members-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-top: 3rem;
                }
                .member-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 1.1rem;
                    color: var(--primary);
                    font-weight: 500;
                }
                @media (max-width: 600px) {
                    .team-section { padding: 3rem 1.5rem; }
                    .members-list-section { padding: 2rem 1rem; }
                }
            `}</style>
        </main>
    )
}

export default About
