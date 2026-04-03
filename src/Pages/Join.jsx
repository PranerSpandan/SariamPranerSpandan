import React, { useState } from 'react'

const Join = () => {
    const [activeTab, setActiveTab] = useState('individual');

    return (
        <main className="page-container">
            <div className="page-header text-center">
                <span className="section-label">Get Involved</span>
                <h1 className="page-title">
                    Join the <span className="text-leaf">Movement</span>
                </h1>
                <p className="page-subtitle">
                    Whether you are an individual wanting to get your hands in the dirt, or an organization looking to partner for a greener tomorrow, there is a place for you here.
                </p>
            </div>

            <div className="form-wrapper">
                <div className="tab-container">
                    <button 
                        className={`tab-btn ${activeTab === 'individual' ? 'active' : ''}`}
                        onClick={() => setActiveTab('individual')}
                    >
                        Join as Individual
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'organization' ? 'active' : ''}`}
                        onClick={() => setActiveTab('organization')}
                    >
                        Collaborate as Organization
                    </button>
                </div>

                <div className="form-card">
                    {activeTab === 'individual' ? (
                        <form action="https://formspree.io/f/placeholder" method="POST" className="contact-form">
                            <h3>Volunteer Registration</h3>
                            <p className="form-desc">Sign up to participate in our upcoming plantation drives, camps, and nature events.</p>
                            
                            <div className="input-group">
                                <label>Full Name</label>
                                <input type="text" name="name" required placeholder="John Doe" />
                            </div>
                            
                            <div className="input-row">
                                <div className="input-group">
                                    <label>Email Address</label>
                                    <input type="email" name="email" required placeholder="john@example.com" />
                                </div>
                                <div className="input-group">
                                    <label>Phone Number</label>
                                    <input type="tel" name="phone" required placeholder="+91 9876543210" />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>How would you like to help?</label>
                                <select name="interest">
                                    <option value="Tree Plantation">Tree Plantation</option>
                                    <option value="Awareness Campaigns">Awareness Campaigns</option>
                                    <option value="Photography & Media">Photography & Media</option>
                                    <option value="General Volunteer">General Volunteer</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label>Tell us briefly about yourself</label>
                                <textarea name="message" rows="4" placeholder="Your skills, background, or why you want to join..."></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full mt-4">Submit Application</button>
                        </form>
                    ) : (
                        <form action="https://formspree.io/f/placeholder" method="POST" className="contact-form">
                            <h3>Organizational Collaboration</h3>
                            <p className="form-desc">Partner with us for corporate social responsibility (CSR) initiatives, joint campaigns, or sponsorships.</p>
                            
                            <div className="input-row">
                                <div className="input-group">
                                    <label>Organization Name</label>
                                    <input type="text" name="org_name" required placeholder="Company / NGO Name" />
                                </div>
                                <div className="input-group">
                                    <label>Contact Person</label>
                                    <input type="text" name="contact_name" required placeholder="Jane Doe" />
                                </div>
                            </div>
                            
                            <div className="input-group">
                                <label>Email Address</label>
                                <input type="email" name="email" required placeholder="contact@organization.com" />
                            </div>

                            <div className="input-group">
                                <label>Collaboration Proposal</label>
                                <textarea name="message" rows="5" required placeholder="Describe how we can work together to create a sustainable impact..."></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full mt-4">Send Proposal</button>
                        </form>
                    )}
                </div>
            </div>

            <style jsx>{`
                .page-container {
                    padding: 10rem 5% 8rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .text-center { text-align: center; }
                .page-header {
                    margin-bottom: 4rem;
                }
                .page-title {
                    font-size: clamp(2.8rem, 5vw, 4rem);
                    line-height: 1.1;
                    color: var(--primary);
                    margin-top: 1rem;
                    font-weight: 800;
                }
                .page-subtitle {
                    font-size: 1.15rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                    max-width: 650px;
                    margin: 1.5rem auto 0;
                }
                .text-leaf { color: var(--secondary); }
                
                .form-wrapper {
                    background: var(--surface-container);
                    border-radius: var(--radius-xl);
                    padding: 3rem;
                    border: 1px solid var(--outline-variant);
                }
                
                .tab-container {
                    display: flex;
                    gap: 1rem;
                    background: var(--bg-main);
                    padding: 0.5rem;
                    border-radius: 100px;
                    margin-bottom: 3rem;
                }
                .tab-btn {
                    flex: 1;
                    background: transparent;
                    border: none;
                    padding: 1rem;
                    border-radius: 100px;
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: var(--transition);
                }
                .tab-btn.active {
                    background: var(--primary);
                    color: white;
                    box-shadow: 0 10px 20px rgba(1, 58, 19, 0.2);
                }
                
                .form-card h3 {
                    color: var(--primary);
                    font-size: 1.8rem;
                    margin-bottom: 0.5rem;
                }
                .form-desc {
                    color: var(--text-secondary);
                    margin-bottom: 2.5rem;
                    font-size: 1rem;
                    line-height: 1.6;
                }
                
                .input-group {
                    margin-bottom: 1.5rem;
                }
                .input-row {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }
                @media (min-width: 700px) {
                    .input-row { grid-template-columns: 1fr 1fr; }
                }
                
                label {
                    display: block;
                    font-weight: 600;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                    font-size: 0.95rem;
                }
                input, select, textarea {
                    width: 100%;
                    padding: 1rem 1.2rem;
                    background: var(--bg-main);
                    border: 1px solid var(--outline-variant);
                    border-radius: var(--radius-sm);
                    font-family: 'Inter', sans-serif;
                    font-size: 1rem;
                    color: var(--primary);
                    transition: var(--transition);
                }
                input:focus, select:focus, textarea:focus {
                    outline: none;
                    border-color: var(--secondary);
                    box-shadow: 0 0 0 3px rgba(105, 154, 76, 0.2);
                }
                .w-full { width: 100%; display: block; text-align: center; }
                .mt-4 { margin-top: 1.5rem; }
                
                @media (max-width: 600px) {
                    .form-wrapper { padding: 2rem 1.5rem; }
                    .tab-container { flex-direction: column; border-radius: 16px; }
                    .tab-btn { border-radius: 12px; }
                }
            `}</style>
        </main>
    )
}

export default Join
