import React, { useEffect, useState } from 'react';

const TokenomicsChart = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    // Trigger animation when component might be in view
    // For a real app, use Intersection Observer API for better performance
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  let accumulatedPercentage = 0;

  return (
    <div className="token-chart-container">
      <div className="donut-chart">
        <svg viewBox="0 0 200 200" className="chart-svg">
          {data.segments.map((segment, index) => {
            const strokeDashoffset = circumference * (1 - segment.percentage / 100);
            const rotation = (accumulatedPercentage / 100) * 360;
            accumulatedPercentage += segment.percentage;

            return (
              <circle
                key={index}
                className="chart-segment"
                cx="100"
                cy="100"
                r={radius}
                fill="transparent"
                stroke={segment.color}
                strokeWidth="32" // Adjust for desired thickness
                strokeDasharray={circumference}
                strokeDashoffset={isVisible ? strokeDashoffset : circumference}
                transform={`rotate(${rotation} 100 100)`}
                style={{
                  transition: `stroke-dashoffset 1.5s cubic-bezier(0.65, 0, 0.35, 1) ${index * 0.1}s, opacity 0.5s ease-in ${index * 0.1}s`,
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <title>{`${segment.label}: ${segment.percentage}% (${segment.value})`}</title>
              </circle>
            );
          })}
        </svg>
        <div className="chart-center">
          <span className="chart-total">{data.totalValue}</span>
          <span className="chart-label">{data.totalLabel}</span>
        </div>
      </div>

      <div className="chart-legend">
        <h3>{data.title}</h3>
        {data.segments.map((segment, index) => (
          <div className="legend-item" key={index}>
            <span className="legend-color" style={{ backgroundColor: segment.color }}></span>
            <span className="legend-text">{segment.label} ({segment.value})</span>
            <span className="legend-percentage">{segment.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenomicsChart;