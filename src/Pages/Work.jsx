import React, { useState } from 'react'
import Gallery from '../Components/Gallery'
import MovingIcon from '../Components/MovingIcon'

const Work = () => {
    const sectors = [
        {
            title: "Afforestation & Sapling Drives",
            desc: "The backbone of our NGO. We identify barren lands, organize community-led tree plantation campaigns, and distribute saplings to domestic households ensuring long-term care.",
            icon: (
                <MovingIcon name="tree" size={40} color="var(--primary)" strokeWidth={1.5} />
            )
        },
        {
            title: "Environmental Education",
            desc: "We conduct nature study camps and school awareness programs to instill ecological consciousness in the next generation. We believe education is the root of preservation.",
            icon: (
                <MovingIcon name="book" size={40} color="var(--primary)" strokeWidth={1.5} />
            )
        },
        {
            title: "Wildlife Conservation",
            desc: "Working alongside local authorities, we help map biodiversity in the Jalpaiguri region, run rescue awareness protocols, and protect natural corridors for wildlife.",
            icon: (
                <MovingIcon name="shield-check" size={40} color="var(--primary)" strokeWidth={1.5} />
            )
        },
        {
            title: "Sustainable Community Living",
            desc: "Promoting organic farming approaches and plastic-free zones within the community. We help establish systems where human habitation works in tandem with nature.",
            icon: (
                <MovingIcon name="house" size={40} color="var(--primary)" strokeWidth={1.5} />
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

            {/* Field Photos Gallery via CMS */}
            <div style={{ marginTop: '5rem' }}>
                <Gallery />
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
