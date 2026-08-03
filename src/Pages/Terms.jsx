import React from 'react'
import MovingIcon from '../Components/MovingIcon'

const Terms = () => {
    return (
        <main className="page-container">
            <div className="page-header text-center">
                <span className="section-label">Legal Information</span>
                <h1 className="page-title">
                    Terms & <span className="text-leaf">Conditions</span>
                </h1>
                <p className="page-subtitle">
                    Last Updated: August 2026. Please read these terms carefully before using our website or participating in our programs.
                </p>
            </div>

            <div className="legal-content">
                <div className="legal-card">
                    <div className="card-icon">
                        <MovingIcon name="book" size={40} color="var(--primary)" strokeWidth={1.5} />
                    </div>
                    <h2>1. Acceptance of Terms</h2>
                    <p className="legal-desc">
                        By accessing or using the website of Sariam Praner Spandan (the "Website") or participating in our NGO initiatives, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use the Website or register for our programs.
                    </p>
                </div>

                <div className="legal-card">
                    <h2>2. Intellectual Property Rights</h2>
                    <p className="legal-desc">
                        All materials on this Website—including text, graphics, logos, images, icons, and software—are the property of Sariam Praner Spandan and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                    <ul className="legal-list">
                        <li>You may view, download, and print content for personal, non-commercial, and educational use only.</li>
                        <li>Any commercial use, modification, distribution, or reproduction of Website materials without prior written consent from us is strictly prohibited.</li>
                    </ul>
                </div>

                <div className="legal-card">
                    <h2>3. Volunteer & Member Conduct</h2>
                    <p className="legal-desc">
                        When you sign up to volunteer, register as a member, or fill out any contact forms, you agree to provide true, accurate, and current information. You also agree to:
                    </p>
                    <ul className="legal-list">
                        <li>Respect the local communities, forests, and other volunteers when participating in our field events and tree plantation campaigns.</li>
                        <li>Refrain from using the Website to submit abusive, offensive, or unlawful content.</li>
                        <li>Not attempt to disrupt the operation or security of the Website.</li>
                    </ul>
                </div>

                <div className="legal-card">
                    <h2>4. Donations & Funding</h2>
                    <p className="legal-desc">
                        Donations made to Sariam Praner Spandan are voluntary. Contributions are used to fund our environmental missions, tree plantation drives, and student conservation programs.
                    </p>
                    <ul className="legal-list">
                        <li><strong>Refunds:</strong> All donations are final and non-refundable.</li>
                        <li><strong>Exemption:</strong> As noted on our Support page, we are in the process of acquiring 80G certification. Donations are currently not tax-exempt, but we maintain complete transparency in our expenditure.</li>
                    </ul>
                </div>

                <div className="legal-card">
                    <h2>5. Limitation of Liability</h2>
                    <p className="legal-desc">
                        The Website and its contents are provided on an "as is" and "as available" basis. Sariam Praner Spandan makes no representations or warranties of any kind regarding the accuracy, completeness, or reliability of the information.
                    </p>
                    <p className="legal-desc highlight-box">
                        We shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, our Website or participation in our field events.
                    </p>
                </div>

                <div className="legal-card">
                    <h2>6. Governing Law</h2>
                    <p className="legal-desc">
                        These Terms & Conditions are governed by and construed in accordance with the laws of West Bengal, India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Jalpaiguri, West Bengal.
                    </p>
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

                @media (max-width: 600px) {
                    .legal-card {
                        padding: 2rem 1.5rem;
                    }
                }
            `}</style>
        </main>
    )
}

export default Terms
