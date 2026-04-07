import React, { useState, useEffect } from 'react';
import '../styles/moving-icons.css';

const MovingIcon = ({ 
    name, 
    size = 24, 
    color = 'currentColor', 
    strokeWidth = 2, 
    className = '',
    animateOnHover = true
}) => {
    const [animate, setAnimate] = useState(false);
    const [timer, setTimer] = useState(null);

    const handleMouseEnter = () => {
        if (!animateOnHover || animate) return;
        
        let duration = 500; // Default
        switch(name) {
            case 'accessibility': duration = 1400; break;
            case 'map-pin-check': duration = 700; break;
            case 'phone-off': duration = 600; break;
            case 'arrow-right': case 'arrow-up': duration = 400; break;
            case 'users': duration = 700; break;
            case 'check': duration = 400; break;
            case 'mail-check': duration = 500; break;
            case 'instagram': duration = 400; break;
            case 'facebook': duration = 400; break;
            case 'youtube': duration = 400; break;
            case 'heart': duration = 400; break;
            case 'globe': duration = 400; break;
            case 'house': duration = 800; break;
            case 'book': duration = 600; break;
            case 'shield-check': duration = 500; break;
            case 'tree': duration = 1000; break;
            case 'user': duration = 600; break;
            case 'landmark': duration = 800; break;
            case 'archive': duration = 300; break;
            case 'pencil': duration = 800; break;
        }

        setAnimate(true);
        const newTimer = setTimeout(() => {
            setAnimate(false);
        }, duration);
        setTimer(newTimer);
    };

    useEffect(() => {
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [timer]);

    const renderIcon = () => {
        const props = {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: `moving-icon-svg ${animate ? 'animate' : ''} ${name}-icon ${name}`
        };

        switch (name) {
            case 'accessibility':
                return (
                    <svg {...props}>
                        <circle cx="16" cy="4" r="1" className="accessibility-circle" />
                        <g className="accessibility-group1">
                            <path d="M18,19l1-7-6,1" />
                            <path d="M8,5l5.5,3-2.4,3.5" />
                            <path d="M8 5 L5 8" className="accessibility-path3" />
                        </g>
                        <g className="accessibility-group2">
                            <path d="M4.2,14.5c-.8,2.6.7,5.4,3.3,6.2,1.2.4,2.4.3,3.6-.2" />
                            <path d="M13.8,17.5c.8-2.6-.7-5.4-3.3-6.2-1.2-.4-2.4-.3-3.6.2" />
                        </g>
                        <path d="M13,13.1c-.5-.7-1.1-1.2-1.9-1.6" />
                    </svg>
                );
            case 'mail-check':
                return (
                    <svg {...props}>
                        <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        <path d="m16 19 2 2 4-4" className="check-path" />
                    </svg>
                );
            case 'map-pin-check':
                return (
                    <svg {...props}>
                        <path d="M19.43 12.935c.357-.967.57-1.99.57-3.05a8 8 0 1 0-16 0c0 4.993 5.539 10.195 7.354 11.764a1 1 0 0 0 1.292 0c.563-.487 1.636-1.465 2.854-2.852" />
                        <circle cx="12" cy="10" r="3" className="circle-map" />
                        <path d="m16 18 2 2 4-4" className="check-path" />
                    </svg>
                );
            case 'phone-off':
                return (
                    <svg {...props}>
                        <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
                        <line x1="22" x2="2" y1="2" y2="22" />
                    </svg>
                );
            case 'arrow-right':
                return (
                    <svg {...props}>
                        <path d="M5 12h14" className="line" />
                        <path d="m12 5 7 7-7 7" className="head" />
                    </svg>
                );
            case 'arrow-up':
                return (
                    <svg {...props}>
                        <path d="m5 12 7-7 7 7" className="head" />
                        <path d="M12 19V5" className="line" />
                    </svg>
                );
            case 'users':
                return (
                    <svg {...props}>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" className="user1-body" />
                        <circle cx="9" cy="7" r="4" className="user1-head" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" className="user2-body" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" className="user2-head" />
                    </svg>
                );
            case 'check':
                return (
                    <svg {...props}>
                        <path d="M20 6 9 17l-5-5" className="check-path" />
                    </svg>
                );
            case 'instagram':
                return (
                    <svg {...props}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                );
            case 'facebook':
                return (
                    <svg {...props}>
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                );
            case 'youtube':
                return (
                    <svg {...props}>
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                    </svg>
                );
            case 'heart':
                return (
                    <svg {...props}>
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                );
            case 'globe':
                return (
                    <svg {...props}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                );
            case 'house':
                return (
                    <svg {...props}>
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" className="door" />
                    </svg>
                );
            case 'book':
                return (
                    <svg {...props}>
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                    </svg>
                );
            case 'shield-check':
                return (
                    <svg {...props}>
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="m9 12 2 2 4-4" className="check-path" />
                    </svg>
                );
            case 'tree':
                return (
                    <svg {...props} className={props.className + " tree-icon"}>
                        <path d="M12 22v-7l-2-2" />
                        <path d="M17 8c-3.13 0-6 2.68-6 6" />
                        <path d="M7 8c3.13 0 6 2.68 6 6" />
                        <path d="M12 3v1" />
                    </svg>
                );
            case 'user':
                return (
                    <svg {...props}>
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" className="user-path" />
                        <circle cx="12" cy="7" r="4" className="user-circle" />
                    </svg>
                );
            case 'landmark':
                return (
                    <svg {...props} className={props.className + " landmark-icon"}>
                        <line x1="3" x2="21" y1="22" y2="22" className="floor" />
                        <line x1="6" x2="6" y1="18" y2="11" className="column-1" />
                        <line x1="10" x2="10" y1="18" y2="11" className="column-2" />
                        <line x1="14" x2="14" y1="18" y2="11" className="column-3" />
                        <line x1="18" x2="18" y1="18" y2="11" className="column-4" />
                        <polygon points="12 2 20 7 4 7" className="roof" />
                    </svg>
                );
            case 'archive':
                return (
                    <svg {...props} className={props.className + " archive-icon"}>
                        <rect width="20" height="5" x="2" y="3" rx="1" />
                        <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                        <path d="M10 12h4" />
                    </svg>
                );
            case 'pencil':
                return (
                    <svg {...props} className={props.className + " pencil-icon"}>
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                        <path d="m15 5 4 4" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div 
            className={`moving-icon-wrapper ${className}`} 
            onMouseEnter={handleMouseEnter}
        >
            {renderIcon()}
        </div>
    );
};

export default MovingIcon;
