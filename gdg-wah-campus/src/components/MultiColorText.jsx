import React from 'react';

const MultiColorText = ({ text, className = "" }) => {
    const colors = [
        'text-google-blue',
        'text-google-red',
        'text-google-yellow',
        'text-google-green'
    ];

    return (
        <span className={className}>
            {text.split('').map((char, index) => {
                // Skip spaces to keep the pattern consistent or handle them? 
                // Usually spaces don't need color, but let's just cycle through everything.
                // If it's a space, the color doesn't matter much visually.
                const colorClass = colors[index % colors.length];
                return (
                    <span key={index} className={colorClass}>
                        {char}
                    </span>
                );
            })}
        </span>
    );
};

export default MultiColorText;
