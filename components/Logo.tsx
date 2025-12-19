import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect
                x="10"
                y="10"
                width="80"
                height="80"
                rx="10"
                fill="currentColor"
            />
            <text
                x="50"
                y="50"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
                fontSize="40"
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
            >
                SW
            </text>
        </svg>
    );
};
