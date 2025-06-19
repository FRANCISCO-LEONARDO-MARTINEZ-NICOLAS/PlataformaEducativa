import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
        isDark
          ? 'bg-gray-900/50 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
          : 'bg-white/20 border-orange-400/30 text-orange-400 hover:bg-orange-400/10'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={isDark ? 'Cambiar a modo día' : 'Cambiar a modo noche'}
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </motion.button>
  );
};