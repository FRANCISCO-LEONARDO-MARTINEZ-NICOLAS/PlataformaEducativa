import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveMapProps {
  onCountryClick: (country: string) => void;
  selectedCountry: string | null;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onCountryClick, selectedCountry }) => {
  const countries = [
    { name: 'México', path: 'M115,10 L190,70 L190,90 L140,80 Z', center: { x: 150, y: 70 } },
    { name: 'Cuba', path: 'M200,20 L260,45 L245,65 L200,40 Z', center: { x: 230, y: 45 } },
    { name: 'Venezuela', path: 'M240,70 L310,80 L300,130 L250,100 Z', center: { x: 290, y: 100 } },
    { name: 'Brasil', path: 'M280,130 L400,140 L420,170 L330,300 L320,250 Z', center: { x: 360, y: 220 } },
    { name: 'Perú', path: 'M220,140 L300,200 L290,220 L240,210 Z', center: { x: 260, y: 200 } },
    { name: 'Bolivia', path: 'M280,220 L330,230 L320,270 L270,260 Z', center: { x: 300, y: 245 } },
    { name: 'Argentina', path: 'M270,260 L300,280 L300,380 L270,360 Z', center: { x: 290, y: 330 } }
  ];

  return (
    <div
      className="flex justify-center items-center w-full h-full"
      style={{
        backgroundImage: "url('/ImagenesAutores/MapaLatinoamerica.jpg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <svg
        viewBox="0 0 500 400"
        className="w-full max-w-2xl h-auto"
        style={{ filter: 'drop-shadow(0 0 20px rgba(0, 247, 255, 0.3))' }}
      >
        <defs>
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 247, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(185, 103, 255, 0.1)" />
          </linearGradient>
          <filter id="glow">
            <feMorphology operator="dilate" radius="2"/>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Ocean background */}
        <rect width="500" height="400" fill="url(#oceanGradient)" opacity="0.3" />
        
        {countries.map((country) => (
          <motion.g key={country.name}>
            <motion.path
              d={country.path}
              fill={selectedCountry === country.name ? "rgba(0, 247, 255, 0.8)" : "rgba(185, 103, 255, 0.6)"}
              stroke="#00f7ff"
              strokeWidth="2"
              className="cursor-pointer"
              onClick={() => onCountryClick(country.name)}
              whileHover={{
                fill: "rgba(0, 247, 255, 0.9)",
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * countries.indexOf(country) }}
            />
            <motion.text
              x={country.center.x}
              y={country.center.y}
              textAnchor="middle"
              fill="#e0f7ff"
              fontSize="12"
              fontFamily="Orbitron, monospace"
              fontWeight="bold"
              className="pointer-events-none select-none"
              style={{ textShadow: '0 0 10px rgba(0, 247, 255, 0.8)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + 0.1 * countries.indexOf(country) }}
            >
              {country.name}
            </motion.text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};