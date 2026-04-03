import React from 'react'

const Support = () => {
    return (
        <main className="page-container">
            <div className="page-header text-center">
                <span className="section-label">Support Our Mission</span>
                <h1 className="page-title">
                    Fund the <span className="text-leaf">Forest</span>
                </h1>
                <p className="page-subtitle">
                    Every contribution directly supports our plantation drives, nature camps, and community awareness programs. Help us keep the mission alive.
                </p>
            </div>

            <div className="support-grid">
                {/* Bank Account Details */}
                <div className="support-card bank-card">
                    <div className="card-icon">🏦</div>
                    <h2>Direct Bank Transfer</h2>
                    <p className="support-desc">Donate directly to our official NGO bank account. All contributions are used entirely for our environmental programs.</p>
                    
                    <div className="bank-details">
                        <div className="detail-row">
                            <span className="label">Account Name:</span>
                            <span className="value">Sariam Praner Spandan</span>
                        </div>
                        <div className="detail-row">
                            <span className="label">Account Number:</span>
                            <span className="value">XXXX-XXXX-XXXX-XXXX</span>
                        </div>
                        <div className="detail-row">
                            <span className="label">IFSC Code:</span>
                            <span className="value">XXXX0000000</span>
                        </div>
                        <div className="detail-row">
                            <span className="label">Branch:</span>
                            <span className="value">Jalpaiguri Main Branch</span>
                        </div>
                    </div>
                </div>

                <div className="secondary-supports">
                    {/* Material Support */}
                    <div className="support-card material-card">
                        <div className="card-icon">📦</div>
                        <h2>Material Support</h2>
                        <p className="support-desc">Prefer to donate equipment? Help us gather tools, books, and camp supplies by purchasing directly from our Amazon Wishlist.</p>
                        <a href="https://amazon.in/wishlist" target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
                            View Amazon Wishlist
                        </a>
                    </div>
                    
                    {/* Tax Exemption Note */}
                    <div className="support-card note-card">
                        <div className="card-icon">📝</div>
                        <h3>Tax Exemption</h3>
                        <p className="support-desc text-small">
                            We are pursuing 80G certification. Currently, donations are not tax-exempt, but every rupee is accounted for and strictly utilized for nature conservation.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .page-container {
                    padding: 10rem 5% 8rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .text-center { text-align: center; }
                .page-header { margin-bottom: 5rem; }
                .page-title {
                    font-size: clamp(3rem, 6vw, 4.5rem);
                    line-height: 1.1;
                    color: var(--primary);
                    margin-top: 1rem;
                    font-weight: 800;
                }
                .page-subtitle {
                    font-size: 1.2rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                    max-width: 600px;
                    margin: 1.5rem auto 0;
                }
                .text-leaf { color: var(--secondary); }

                .support-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                @media (min-width: 900px) {
                    .support-grid { grid-template-columns: 1.1fr 1fr; }
                }

                .support-card {
                    background: var(--surface-container);
                    border-radius: var(--radius-xl);
                    padding: 3rem;
                    border: 1px solid var(--outline-variant);
                }
                .card-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1.2rem;
                }
                .support-card h2 {
                    color: var(--primary);
                    margin-bottom: 1rem;
                    font-size: 1.8rem;
                }
                .support-card h3 {
                    color: var(--primary);
                    margin-bottom: 0.8rem;
                    font-size: 1.4rem;
                }
                .support-desc {
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    font-size: 1.05rem;
                }
                .text-small {
                    font-size: 0.95rem;
                    margin-bottom: 0;
                }

                .bank-card {
                    background: linear-gradient(135deg, var(--surface-container), var(--bg-main));
                }
                .bank-details {
                    background: var(--bg-main);
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    border: 1px dashed var(--outline-variant);
                }
                .detail-row {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    padding: 1rem 0;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }
                .detail-row:last-child {
                    border-bottom: none;
                }
                .label {
                    font-weight: 600;
                    color: var(--text-secondary);
                }
                .value {
                    font-family: monospace;
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: var(--primary);
                }

                .secondary-supports {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                .mt-2 { margin-top: 1rem; display: inline-block; }
            `}</style>
        </main>
    )
}

export default Support
