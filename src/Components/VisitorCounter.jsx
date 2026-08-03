import React, { useEffect, useState } from 'react'

const VisitorCounter = () => {
  const [count, setCount] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const key = 'sariam-praner-spandan-visitor-counter'
    
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem('sps_visited')
    const url = hasVisited 
      ? `https://countapi.mileshilliard.com/api/v1/get/${key}`
      : `https://countapi.mileshilliard.com/api/v1/hit/${key}`;
    
    if (!hasVisited) {
      sessionStorage.setItem('sps_visited', 'true')
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch count')
        return res.json()
      })
      .then((data) => {
        if (data && typeof data.value === 'number') {
          setCount(data.value)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading visitor count:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="visitor-counter loading">
        <span className="pulse-dot"></span>
        <span className="count-label">Connecting...</span>
      </div>
    )
  }

  if (count === null) {
    return null
  }

  const formattedCount = count.toLocaleString()

  return (
    <div className="visitor-counter">
      <span className="live-badge">
        <span className="pulse-dot"></span>
        Live
      </span>
      <span className="count-label">Total Visits:</span>
      <span className="count-value">{formattedCount}</span>
      <style jsx>{`
        .visitor-counter {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: rgba(1, 58, 19, 0.04);
          padding: 0.4rem 0.8rem;
          border-radius: 50px;
          border: 1px solid var(--outline-variant);
          transition: var(--transition);
        }
        .visitor-counter:hover {
          background: rgba(1, 58, 19, 0.08);
          border-color: rgba(1, 58, 19, 0.2);
        }
        .visitor-counter.loading {
          opacity: 0.7;
        }
        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 700;
          color: #256c2c;
          background: rgba(37, 108, 44, 0.1);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }
        .pulse-dot {
          width: 6px;
          height: 6px;
          background-color: #256c2c;
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }
        .pulse-dot::after {
          content: '';
          width: 100%;
          height: 100%;
          background-color: #256c2c;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          animation: pulse 1.8s infinite ease-in-out;
          opacity: 0.6;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        .count-label {
          font-weight: 500;
        }
        .count-value {
          font-weight: 700;
          color: var(--primary);
        }
      `}</style>
    </div>
  )
}

export default VisitorCounter
