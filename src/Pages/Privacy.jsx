import React from 'react'
import MovingIcon from '../Components/MovingIcon'

const Privacy = () => {
    return (
        <main className="page-container">
            <div className="page-header text-center">
                <span className="section-label">Legal Information</span>
                <h1 className="page-title">
                    Privacy <span className="text-leaf">Policy</span>
                </h1>
                <p className="page-subtitle">
                    Last Updated: August 2026. How Sariam Praner Spandan collects, uses, and protects your information.
                </p>
            </div>

            <div className="legal-content">
                <div className="legal-card">
                    <div className="card-icon">
                        <MovingIcon name="shield-check" size={40} color="var(--primary)" strokeWidth={1.5} />
                    </div>
                    <h2>1. Information We Collect</h2>
                    <p className="legal-desc">
                        We collect personal information that you voluntarily provide to us when you register to volunteer, donate, contact us, or participate in our nature conservation programs. This information may include:
                    </p>
                    <ul className="legal-list">
                        <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and physical address.</li>
                        <li><strong>Donation Information:</strong> Payment logs and transfer confirmations (processed securely via our bank, we do not store credit card details).</li>
                        <li><strong>Volunteering Details:</strong> Information about your skills, availability, and interests.</li>
                    </ul>
                </div>

                <div className="legal-card">
                    <h2>2. How We Use Your Information</h2>
                    <p className="legal-desc">
                        We use the information we collect solely to support our NGO's objectives, which include:
                    </p>
                    <ul className="legal-list">
                        <li>Coordinating and managing tree plantation drives, nature camps, and awareness programs.</li>
                        <li>Processing donations and sending receipts.</li>
                        <li>Communicating updates, newsletters, and volunteer opportunities.</li>
                        <li>Improving our website and user experience.</li>
                    </ul>
                    <p className="legal-desc highlight-box">
                        <strong>Data Sharing:</strong> We do not sell, rent, or trade your personal information with third parties. Your details are kept confidential and used strictly for NGO-related activities.
                    </p>
                </div>

                <div className="legal-card">
                    <h2>3. Cookies & Session Storage</h2>
                    <p className="legal-desc">
                        We utilize temporary storage technologies on our website:
                    </p>
                    <ul className="legal-list">
                        <li><strong>Session Storage:</strong> Used to store a temporary flag (`sps_visited`) to run our live visitor counter. This keeps track of whether you have visited the site in your current browser session so we do not count refreshes as new visits. No personally identifiable information is stored.</li>
                        <li><strong>Cookies:</strong> We do not use third-party tracking cookies or advertising pixels.</li>
                    </ul>
                </div>

                <div className="legal-card">
                    <h2>4. Data Security</h2>
                    <p className="legal-desc">
                        We implement appropriate security measures to maintain the safety of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                    </p>
                </div>

                <div className="legal-card">
                    <h2>5. Your Rights</h2>
                    <p className="legal-desc">
                        You have the right to request access to the personal data we hold about you, request corrections, or ask us to delete your records from our systems. To make a request, please contact us at the email provided below.
                    </p>
                </div>

                <div className="legal-card contact-card">
                    <h2>6. Contact Us</h2>
                    <p className="legal-desc">
                        If you have any questions or concerns regarding this Privacy Policy, please feel free to reach out to us:
                    </p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> <a href="mailto:pranerspandan@gmail.com">pranerspandan@gmail.com</a></p>
                        <p><strong>Phone:</strong> +91 8436692246 / +91 7584828237</p>
                        <p><strong>Address:</strong> Sariam, Debithakurbari, Jalpaiguri, West Bengal, India, PIN-735133</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .page-container {
                    padding: 10rem 5% 8rem;
                    max-width: 1000px;
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

                .legal-content {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                }

                .legal-card {
                    background: var(--surface-container);
                    border-radius: var(--radius-xl);
                    padding: 3rem;
                    border: 1px solid var(--outline-variant);
                }
                .card-icon {
                    margin-bottom: 1.2rem;
                }
                .legal-card h2 {
                    color: var(--primary);
                    margin-bottom: 1.5rem;
                    font-size: 1.8rem;
                }
                .legal-desc {
                    color: var(--text-secondary);
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                    font-size: 1.05rem;
                }
                .legal-list {
                    margin-left: 1.5rem;
                    margin-bottom: 1.5rem;
                    color: var(--text-secondary);
                    font-size: 1.05rem;
                }
                .legal-list li {
                    margin-bottom: 0.8rem;
                    line-height: 1.7;
                }
                .highlight-box {
                    background: var(--bg-main);
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                    border-left: 4px solid var(--secondary);
                    margin-top: 1.5rem;
                }
                .contact-card {
                    background: linear-gradient(135deg, var(--surface-container), var(--bg-main));
                }
                .contact-details {
                    background: var(--bg-main);
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    border: 1px dashed var(--outline-variant);
                    color: var(--text-primary);
                    line-height: 2;
                    font-size: 1.05rem;
                }
                .contact-details a {
                    color: var(--secondary);
                    font-weight: 600;
                    text-decoration: underline;
                }

                @media (max-width: 600px) {
                    .legal-card {
                        padding: 2rem 1.5rem;
                    }
                }
            `}</style>
        </main>
    )
}

export default Privacy
