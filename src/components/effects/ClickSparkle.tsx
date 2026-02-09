"use client";

import { useEffect } from 'react';

export const ClickSparkle = () => {
    useEffect(() => {
        const createSparkle = (x: number, y: number) => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, rgba(59, 130, 246, 1) 0%, rgba(59, 130, 246, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        animation: sparkle-animation 0.6s ease-out forwards;
      `;

            const container = document.getElementById('click-sparkles');
            if (container) {
                container.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 600);
            }
        };

        const handleClick = (e: MouseEvent) => {
            // Create multiple sparkles
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {
                    const angle = (Math.PI * 2 * i) / 6;
                    const distance = 20 + Math.random() * 20;
                    const x = e.clientX + Math.cos(angle) * distance;
                    const y = e.clientY + Math.sin(angle) * distance;
                    createSparkle(x, y);
                }, i * 30);
            }
        };

        document.addEventListener('click', handleClick);

        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
      @keyframes sparkle-animation {
        0% {
          transform: scale(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: scale(2) rotate(180deg);
          opacity: 0;
        }
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.removeEventListener('click', handleClick);
            document.head.removeChild(style);
        };
    }, []);

    return <div id="click-sparkles" />;
};
