import React, { useState, useEffect } from 'react'

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            
            <style jsx>{`
                .back-to-top {
                    position: fixed;
                    bottom: 40px;
                    right: 40px;
                    width: 50px;
                    height: 50px;
                    background: rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(12px);
                    color: var(--primary);
                    border: 1px solid var(--outline-variant);
                    border-radius: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    z-index: 1000;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(20px);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    /* Ambient Lift Shadow */
                    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
                }
                .back-to-top.visible {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                .back-to-top:hover {
                    background: var(--primary);
                    color: white;
                    transform: scale(1.1);
                    box-shadow: 0 15px 35px rgba(1, 58, 19, 0.2);
                }
                @media (max-width: 768px) {
                    bottom: 25px;
                    right: 25px;
                    width: 44px;
                    height: 44px;
                }
            `}</style>
        </div>
    )
}

export default BackToTop
