import React from 'react'

const Work = () => {
    const sectors = [
        {
            title: "Afforestation & Sapling Drives",
            desc: "The backbone of our NGO. We identify barren lands, organize community-led tree plantation campaigns, and distribute saplings to domestic households ensuring long-term care.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22v-7l-2-2"></path>
                    <path d="M17 8c-3.13 0-6 2.68-6 6"></path>
                    <path d="M7 8c3.13 0 6 2.68 6 6"></path>
                    <path d="M12 3v1"></path>
                </svg>
            )
        },
        {
            title: "Environmental Education",
            desc: "We conduct nature study camps and school awareness programs to instill ecological consciousness in the next generation. We believe education is the root of preservation.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
            )
        },
        {
            title: "Wildlife Conservation",
            desc: "Working alongside local authorities, we help map biodiversity in the Jalpaiguri region, run rescue awareness protocols, and protect natural corridors for wildlife.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2v1c0 6.64 4 10.36 4 17a6 6 0 0 1-6 6c-3 0-5-2.5-5-6h-1c0 3.5-2 6-5 6a6 6 0 0 1-6-6Z"></path>
                </svg>
            )
        },
        {
            title: "Sustainable Community Living",
            desc: "Promoting organic farming approaches and plastic-free zones within the community. We help establish systems where human habitation works in tandem with nature.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
            )
        }
    ]

    return (
        <main className="page-container">
            <div className="page-header" style={{ textAlign: 'center', margin: '0 auto 5rem' }}>
                <span className="section-label">Our Impact</span>
                <h1 className="page-title">
                    Fields & <span className="text-leaf">Sectors</span>
                </h1>
                <p className="page-subtitle" style={{ margin: '1.5rem auto 0' }}>
                    Sariam Praner Spandan operates across multiple verticals to ensure holistic environmental restoration. Here are the core areas where we actively work.
                </p>
            </div>

            <div className="sectors-grid">
                {sectors.map((sector, idx) => (
                    <div key={idx} className="sector-card">
                        <div className="sector-icon">{sector.icon}</div>
                        <h2>{sector.title}</h2>
                        <p>{sector.desc}</p>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .page-container {
                    padding: 10rem 5% 8rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .page-header {
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
                    line-height: 1.7;
                    max-width: 650px;
                }
                .text-leaf {
                    color: var(--secondary);
                }
                .sectors-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }
                @media (min-width: 800px) {
                    .sectors-grid { grid-template-columns: 1fr 1fr; }
                }
                .sector-card {
                    background: var(--surface-container);
                    padding: 3.5rem;
                    border-radius: var(--radius-xl);
                    border: 1px solid var(--outline-variant);
                    transition: var(--transition);
                }
                .sector-card:hover {
                    box-shadow: 0 40px 80px rgba(1, 58, 19, 0.08);
                    transform: translateY(-5px);
                }
                .sector-icon {
                    font-size: 3.5rem;
                    margin-bottom: 2rem;
                    background: var(--primary-container);
                    width: 90px;
                    height: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 20px;
                }
                .sector-card h2 {
                    color: var(--primary);
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                }
                .sector-card p {
                    color: var(--text-secondary);
                    line-height: 1.8;
                    font-size: 1.1rem;
                }
            `}</style>
        </main>
    )
}

export default Work
