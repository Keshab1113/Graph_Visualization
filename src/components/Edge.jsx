// components/Edge.jsx
import React from 'react';

const Edge = ({ source, target }) => {
    if (!source || !target) return null;

    // Calculate positions (simplified for demo)
    const sourceX = 200 + (source.index % 5) * 150 + 35; // Right side of source
    const sourceY = 100 + Math.floor(source.index / 5) * 150;
    const targetX = 200 + (target.index % 5) * 150 - 35; // Left side of target
    const targetY = 100 + Math.floor(target.index / 5) * 150;

    return (
        <path
            d={`M ${sourceX} ${sourceY} L ${targetX} ${targetY}`}
            stroke="#6B7280"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
        />
    );
};

export default Edge;