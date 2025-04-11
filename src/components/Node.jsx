// components/Node.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedNode } from '../features/graph/graphSlice';

const Node = ({ node, index, totalNodes }) => {
    const dispatch = useDispatch();

    // Calculate position based on index
    const x = 200 + (index % 5) * 150;
    const y = 100 + Math.floor(index / 5) * 150;

    return (
        <g
            onClick={() => dispatch(setSelectedNode(node.id))}
            className="cursor-pointer transition-transform hover:scale-110"
        >
            {/* Node circle */}
            <circle
                cx={x}
                cy={y}
                r={30}
                fill="#4F46E5"
                stroke="#312E81"
                strokeWidth="2"
            />

            {/* Node text (first 4 chars of address) */}
            <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
            >
                {node.id.slice(0, 4)}
            </text>

            {/* Inflow indicator (left side) */}
            <circle
                cx={x - 35}
                cy={y}
                r={8}
                fill="#10B981"
                stroke="#065F46"
                strokeWidth="1"
            />

            {/* Outflow indicator (right side) */}
            <circle
                cx={x + 35}
                cy={y}
                r={8}
                fill="#EF4444"
                stroke="#991B1B"
                strokeWidth="1"
            />
        </g>
    );
};

export default Node;