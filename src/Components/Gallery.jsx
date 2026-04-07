import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Gallery = ({ isHomePage = false }) => {
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState('All')
    const [lightbox, setLightbox] = useState(null)
    const [loading, setLoading] = useState(true)

    const categories = ['All', 'Plantation', 'Sapling Drive', 'Nature Camp', 'Awareness']

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}gallery.json`)
            .then(res => res.json())
            .then(data => {
                setItems(data.items || [])
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    const filtered = filter === 'All' ? items : items.filter(i => i.category === filter)
    const displayedItems = isHomePage ? filtered.slice(0, 8) : filtered;

    const openLightbox = (item) => setLightbox(item)
    const closeLightbox = () => setLightbox(null)

    // Helper to fix GitHub Pages subpath issues for media fetched from CMS JSON
    const resolvePath = (path) => {
        if (!path) return '';
        if (path.startsWith('http') || path.startsWith('data:')) return path;
        return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
    };

    // Keyboard close
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') closeLightbox() }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

    return (
        <section className="gallery-section" id="gallery">
            <div className="gallery-header">
                <span className="section-label">In The Field</span>
                <h2 className="gallery-title">
                    Our Work in <br /><span className="text-leaf">Pictures</span>
                </h2>
                <p className="gallery-subtitle">
                    Every photo tells a story of change. Browse our journey of planting trees, 
                    educating children, and protecting the planet.
                </p>
            </div>

            {/* Filter Pills */}
            <div className="filter-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-pill ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            {loading ? (
                <div className="gallery-grid">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="skeleton-item">
                            <div className="skeleton-shimmer"></div>
                        </div>
                    ))}
                </div>
            ) : filtered.length === 0 ? (
                <div className="gallery-empty">
                    <p>No items in this category yet.</p>
                    <a href="/admin" className="btn-primary" style={{display:'inline-block',marginTop:'1rem'}}>
                        Add Photos via CMS
                    </a>
                </div>
            ) : (
                <div className="gallery-grid">
                    {displayedItems.map((item, idx) => (
                        <div
                            key={item.id}
                            className={`gallery-item ${idx % 5 === 0 ? 'wide' : ''}`}
                            onClick={() => openLightbox(item)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Open ${item.title}`}
                            onKeyDown={e => e.key === 'Enter' && openLightbox(item)}
                        >
                            {/* ... same as before but limited ... */}
                            {item.type === 'video' ? (
                                <video src={resolvePath(item.src)} muted loop className="gallery-media" />
                            ) : (
                                <img src={resolvePath(item.src)} alt={item.title} className="gallery-media" loading="lazy" />
                            )}
                            <div className="gallery-overlay">
                                <span className="gallery-cat">{item.category}</span>
                                <h4 className="gallery-item-title">{item.title}</h4>
                                <p className="gallery-caption">{item.caption}</p>
                            </div>
                            {item.type === 'video' && (
                                <div className="video-play-icon">▶</div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* See More Link for Homepage */}
            {isHomePage && !loading && items.length > 8 && (
                <div className="gallery-footer">
                    <Link to="/work" className="btn-see-more">
                        <span>Explore Full Gallery</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14m-7-7 7 7-7 7"/>
                        </svg>
                    </Link>
                </div>
            )}

            {/* Lightbox */}
            {lightbox && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-box" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
                        {lightbox.type === 'video' ? (
                            <video src={resolvePath(lightbox.src)} controls autoPlay className="lightbox-media" />
                        ) : (
                            <img src={resolvePath(lightbox.src)} alt={lightbox.title} className="lightbox-media" />
                        )}
                        <div className="lightbox-info">
                            <span className="gallery-cat">{lightbox.category}</span>
                            <h3>{lightbox.title}</h3>
                            <p>{lightbox.caption}</p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .gallery-section {
                    padding: 8rem 5%;
                    background: var(--bg-main);
                    max-width: 100%;
                }
                .gallery-header {
                    max-width: 1400px;
                    margin: 0 auto 4rem;
                }
                .gallery-title {
                    font-size: 3.8rem;
                    margin-top: 1.2rem;
                    color: var(--primary);
                    line-height: 1.15;
                }
                .text-leaf { color: var(--secondary); }
                .gallery-subtitle {
                    color: var(--text-secondary);
                    font-size: 1.1rem;
                    margin-top: 1.5rem;
                    max-width: 600px;
                    line-height: 1.8;
                }

                /* Filter */
                .filter-bar {
                    display: flex;
                    gap: 0.8rem;
                    flex-wrap: wrap;
                    max-width: 1400px;
                    margin: 0 auto 3.5rem;
                }
                .filter-pill {
                    background: transparent;
                    border: 1px solid rgba(193,201,189,0.4);
                    color: var(--text-secondary);
                    padding: 0.55rem 1.4rem;
                    border-radius: 100px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition);
                    font-family: 'Inter', sans-serif;
                }
                .filter-pill:hover {
                    background: var(--surface-container);
                    color: var(--primary);
                }
                .filter-pill.active {
                    background: linear-gradient(135deg, var(--primary), var(--primary-container));
                    color: white;
                    border-color: transparent;
                }

                /* Grid — masonry-like using CSS grid auto-rows */
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    grid-auto-rows: 280px;
                    gap: 1.5rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .gallery-item {
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    position: relative;
                    cursor: pointer;
                    background: var(--surface-container);
                    transition: var(--transition);
                    outline: none;
                }
                .gallery-item.wide {
                    grid-column: span 2;
                }
                .gallery-item:hover {
                    transform: scale(1.02);
                    box-shadow: 0 20px 60px rgba(1, 58, 19, 0.12);
                }
                .gallery-item:focus-visible {
                    outline: 3px solid var(--secondary);
                    outline-offset: 3px;
                }
                .gallery-media {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
                    display: block;
                }
                .gallery-item:hover .gallery-media {
                    transform: scale(1.08);
                }
                .gallery-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(1,58,19,0.85) 0%, transparent 60%);
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    opacity: 0;
                    transition: var(--transition);
                }
                .gallery-item:hover .gallery-overlay {
                    opacity: 1;
                }
                .gallery-cat {
                    font-size: 0.72rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 0.5rem;
                    display: block;
                }
                .gallery-item-title {
                    color: white;
                    font-size: 1.1rem;
                    margin-bottom: 0.4rem;
                }
                .gallery-caption {
                    color: rgba(255,255,255,0.75);
                    font-size: 0.85rem;
                    line-height: 1.5;
                }
                .video-play-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(255,255,255,0.2);
                    backdrop-filter: blur(8px);
                    color: white;
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    pointer-events: none;
                }

                /* Loading / Skeletons */
                .skeleton-item {
                    border-radius: var(--radius-lg);
                    background: var(--surface-container);
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                }
                .skeleton-shimmer {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(255, 255, 255, 0.4) 50%,
                        transparent 100%
                    );
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite linear;
                }
                @keyframes shimmer {
                    from { background-position: 200% 0; }
                    to { background-position: -200% 0; }
                }

                /* Footer/See More */
                .gallery-footer {
                    display: flex;
                    justify-content: center;
                    margin-top: 4rem;
                    max-width: 1400px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .btn-see-more {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 1rem 2.5rem;
                    background: transparent;
                    border: 1px solid var(--primary);
                    color: var(--primary);
                    border-radius: 100px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: var(--transition);
                }
                .btn-see-more:hover {
                    background: var(--primary);
                    color: white;
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(1, 58, 19, 0.15);
                }
                .btn-see-more svg {
                    transition: transform 0.3s ease;
                }
                .btn-see-more:hover svg {
                    transform: translateX(5px);
                }

                /* Lightbox */
                .lightbox-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(1,20,8,0.92);
                    backdrop-filter: blur(12px);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    animation: fadeIn 0.3s ease;
                }
                @keyframes fadeIn {
                    from { opacity:0; }
                    to { opacity:1; }
                }
                .lightbox-box {
                    background: var(--surface-lowest);
                    border-radius: var(--radius-xl);
                    overflow: hidden;
                    max-width: 900px;
                    width: 100%;
                    position: relative;
                    box-shadow: 0 60px 120px rgba(0,0,0,0.4);
                }
                .lightbox-close {
                    position: absolute;
                    top: 1.2rem;
                    right: 1.2rem;
                    background: rgba(0,0,0,0.4);
                    color: white;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 1rem;
                    cursor: pointer;
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: var(--transition);
                }
                .lightbox-close:hover {
                    background: var(--primary);
                }
                .lightbox-media {
                    width: 100%;
                    max-height: 65vh;
                    object-fit: contain;
                    background: #000;
                    display: block;
                }
                .lightbox-info {
                    padding: 1.8rem 2.5rem;
                }
                .lightbox-info h3 {
                    color: var(--primary);
                    font-size: 1.4rem;
                    margin: 0.5rem 0;
                }
                .lightbox-info p {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    line-height: 1.6;
                }

                @media (max-width: 768px) {
                    .gallery-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 200px; }
                    .gallery-item.wide { grid-column: span 1; }
                    .gallery-title { font-size: 2.8rem; }
                }
                @media (max-width: 500px) {
                    .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 250px; }
                }
            `}</style>
        </section>
    )
}

export default Gallery
