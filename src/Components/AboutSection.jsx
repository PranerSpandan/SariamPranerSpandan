import React from 'react'
import aboutImage from '../assets/images/children planting saplings.png'

const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            {/* Top-level background fern illustrations */}
            <div className="bg-leaf top-left"></div>
            <div className="bg-leaf top-right"></div>

            <h2 className="section-main-title">Protecting Our Planet</h2>

            <div className="about-container">
                {/* Left — Image Card */}
                <div className="about-image-side">
                    <div className="image-frame-bg">
                        {/* Leaf illustrations sticking out of the frame */}
                        <div className="frame-leaf frame-leaf-tl"></div>
                        <div className="frame-leaf frame-leaf-tr"></div>
                        <div className="frame-leaf frame-leaf-bl"></div>
                        <div className="frame-leaf frame-leaf-br"></div>

                        <img
                            src={aboutImage}
                            alt="Children planting saplings"
                            className="about-img"
                        />
                    </div>
                </div>

                {/* Right — Text content */}
                <div className="about-content">
                    <span className="section-overline">ABOUT US</span>
                    <h3 className="content-title">
                        Youth-Led Action for a Greener Tomorrow
                    </h3>
                    <p className="content-desc">
                        Founded in 2021 by a group of passionate students, Sariam Praner Spandan
                        started with a simple vision: to give back to the Earth that sustains us.
                        We believe that the youth are not just the leaders of tomorrow, but the
                        change-makers of today.
                    </p>

                    <div className="cards-grid">
                        <div className="info-card">
                            <h4 className="card-title">Mission</h4>
                            <p className="card-text">
                                To plant a million trees and foster environmental stewardship among students.
                            </p>
                            <div className="card-leaf"></div>
                        </div>
                        <div className="info-card">
                            <h4 className="card-title">Vision</h4>
                            <p className="card-text">
                                A world where every school is a green hub and every student is an eco-warrior.
                            </p>
                            <div className="card-leaf"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-section {
                    padding: 6rem 5% 8rem;
                    background-color: #ffffff;
                    position: relative;
                    overflow: hidden;
                }
                
                /* Hand-drawn Fern/Leaf SVGs */
                .bg-leaf {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="none" stroke="%237c8e77" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" d="M10,90 Q40,40 90,10 M30,70 Q50,50 60,30 M50,85 Q70,60 80,45 M15,50 Q30,40 45,25 M25,95 Q60,70 95,60 M40,25 Q60,20 70,10 M65,40 Q80,35 90,25 M75,65 Q90,55 95,40"/></svg>');
                    background-size: contain;
                    background-repeat: no-repeat;
                    opacity: 0.35;
                    z-index: 0;
                    pointer-events: none;
                }
                .bg-leaf.top-left {
                    top: -80px;
                    left: -80px;
                    transform: rotate(0deg);
                }
                .bg-leaf.top-right {
                    top: -80px;
                    right: -80px;
                    transform: scaleX(-1) rotate(0deg);
                }

                .section-main-title {
                    text-align: center;
                    font-family: 'EB Garamond', 'Plus Jakarta Sans', serif;
                    font-size: clamp(2.5rem, 4vw, 3.2rem);
                    color: #4a5c4d;
                    margin-bottom: 4rem;
                    font-weight: 500;
                    position: relative;
                    z-index: 1;
                }

                .about-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 6rem;
                    align-items: center;
                    position: relative;
                    z-index: 1;
                }

                /* Image side */
                .about-image-side {
                    position: relative;
                    display: flex;
                    justify-content: center;
                }
                .image-frame-bg {
                    background-color: #f1f4f0;
                    border-radius: 2.5rem;
                    padding: 1.25rem;
                    position: relative;
                    width: 100%;
                }
                
                .about-img {
                    width: 100%;
                    height: 420px;
                    object-fit: cover;
                    border-radius: 1.5rem;
                    display: block;
                    position: relative;
                    z-index: 2;
                }

                /* Frame Leaves (Leaf illustrations around image container) */
                .frame-leaf {
                    position: absolute;
                    width: 120px;
                    height: 120px;
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%236e8469" opacity="0.15" d="M10,90 C30,40 70,20 90,10 C80,30 50,70 10,90 Z"/><path fill="none" stroke="%234a5c4d" stroke-width="1.5" stroke-linecap="round" d="M10,90 C30,40 70,20 90,10 M50,50 Q70,40 80,30 M30,70 Q50,60 60,50"/></svg>');
                    background-size: contain;
                    background-repeat: no-repeat;
                    z-index: 1;
                }
                .frame-leaf-tl {
                    top: -40px;
                    left: -40px;
                    transform: rotate(-45deg);
                }
                .frame-leaf-tr {
                    top: -40px;
                    right: -40px;
                    transform: scaleX(-1) rotate(-45deg);
                }
                .frame-leaf-bl {
                    bottom: -40px;
                    left: -40px;
                    transform: scaleY(-1) rotate(-45deg);
                }
                .frame-leaf-br {
                    bottom: -40px;
                    right: -40px;
                    transform: scale(-1, -1) rotate(-45deg);
                }

                /* Text side */
                .about-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .section-overline {
                    display: inline-block;
                    color: #92a08f;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 0.85rem;
                    letter-spacing: 2px;
                    font-family: 'Inter', sans-serif;
                }

                .content-title {
                    font-size: clamp(2rem, 3vw, 2.5rem);
                    margin: 0 0 0.5rem 0;
                    line-height: 1.2;
                    color: #1a1a1a;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-weight: 800;
                }

                .content-desc {
                    font-size: 1rem;
                    color: #666;
                    line-height: 1.7;
                    margin: 0 0 1.5rem 0;
                }

                /* Feature cards */
                .cards-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                .info-card {
                    padding: 1.5rem;
                    background: #fdfdfd;
                    border: 1.5px solid #e0e5de;
                    border-radius: 1.2rem;
                    position: relative;
                    overflow: hidden;
                }
                
                .card-title {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: #1a1a1a;
                }
                .card-text {
                    color: #777;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    margin: 0;
                    position: relative;
                    z-index: 2;
                }

                /* Tiny leaf inside card */
                .card-leaf {
                    position: absolute;
                    bottom: -5px;
                    right: -5px;
                    width: 60px;
                    height: 60px;
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="none" stroke="%2392a08f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M10,90 Q40,40 90,10 M30,70 Q50,50 60,30 M50,85 Q70,60 80,45 M15,50 Q30,40 45,25"/></svg>');
                    background-size: contain;
                    background-repeat: no-repeat;
                    z-index: 1;
                    opacity: 0.4;
                    transform: rotate(15deg);
                }

                @media (max-width: 900px) {
                    .about-container {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .cards-grid { grid-template-columns: 1fr; }
                    .about-img { height: 350px; }
                }
            `}</style>
        </section>
    )
}

export default AboutSection
