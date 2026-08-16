import React, { useState } from 'react'

const NewsletterSection = () => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) setSubmitted(true)
    }

    return (
        <section className="nl-section">
            <div className="nl-container">
                <div className="nl-card">
                    {/* Decorative blob inside card */}
                    <div className="nl-blob" />

                    <div className="nl-left">
                        <h2 className="nl-title">Stay Rooted in Our Progress</h2>
                        <p className="nl-subtitle">
                            Subscribe to our newsletter for seasonal updates, volunteer opportunities,
                            and environmental tips.
                        </p>
                    </div>

                    <div className="nl-right">
                        {submitted ? (
                            <div className="nl-success">
                                <span className="nl-success-icon">🌱</span>
                                <p>Thank you! You're now part of our green family.</p>
                            </div>
                        ) : (
                            <form className="nl-form" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="nl-input"
                                    required
                                    id="newsletter-email"
                                />
                                <button type="submit" className="nl-btn">Subscribe</button>
                            </form>
                        )}
                        <p className="nl-disclaimer">We respect your privacy. Unsubscribe at any time.</p>
                    </div>
                </div>
            </div>

            <style>{`
                .nl-section {
                    padding: 5rem 5%;
                    background: #fcf9f4;
                }
                .nl-container {
                    max-width: 1280px;
                    margin: 0 auto;
                }
                .nl-card {
                    background: #002208;
                    border-radius: 1.5rem;
                    padding: 4rem;
                    display: flex;
                    align-items: center;
                    gap: 4rem;
                    position: relative;
                    overflow: hidden;
                }
                .nl-blob {
                    position: absolute;
                    top: -60px;
                    right: -60px;
                    width: 260px;
                    height: 260px;
                    background: rgba(169, 245, 164, 0.12);
                    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                    pointer-events: none;
                }

                .nl-left {
                    flex: 1;
                    color: white;
                    position: relative;
                    z-index: 1;
                }
                .nl-title {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: clamp(1.8rem, 3vw, 2.4rem);
                    font-weight: 800;
                    color: white;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                    letter-spacing: -0.02em;
                }
                .nl-subtitle {
                    color: rgba(255,255,255,0.75);
                    font-size: 1rem;
                    line-height: 1.7;
                    margin: 0;
                }

                .nl-right {
                    flex: 1;
                    position: relative;
                    z-index: 1;
                }
                .nl-form {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .nl-input {
                    flex: 1;
                    min-width: 0;
                    padding: 1rem 1.5rem;
                    border-radius: 9999px;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.2);
                    color: white;
                    font-size: 0.95rem;
                    outline: none;
                    transition: var(--transition);
                    font-family: 'Inter', sans-serif;
                }
                .nl-input::placeholder { color: rgba(255,255,255,0.5); }
                .nl-input:focus {
                    border-color: rgba(156, 212, 158, 0.6);
                    box-shadow: 0 0 0 3px rgba(156, 212, 158, 0.1);
                }
                .nl-btn {
                    padding: 1rem 2.2rem;
                    border-radius: 9999px;
                    background: white;
                    color: #002208;
                    font-weight: 700;
                    font-size: 0.95rem;
                    border: none;
                    cursor: pointer;
                    transition: var(--transition);
                    font-family: 'Inter', sans-serif;
                    white-space: nowrap;
                }
                .nl-btn:hover {
                    background: #b7f1b8;
                    transform: scale(1.04);
                }
                .nl-disclaimer {
                    font-size: 0.78rem;
                    color: rgba(255,255,255,0.4);
                    margin-top: 1rem;
                    padding-left: 0.5rem;
                }

                .nl-success {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: white;
                }
                .nl-success-icon { font-size: 2rem; }
                .nl-success p { font-size: 1rem; font-weight: 600; margin: 0; }

                @media (max-width: 900px) {
                    .nl-card {
                        flex-direction: column;
                        padding: 3rem 2rem;
                        gap: 2rem;
                    }
                    .nl-form { flex-direction: column; }
                    .nl-btn { width: 100%; }
                }
            `}</style>
        </section>
    )
}

export default NewsletterSection
