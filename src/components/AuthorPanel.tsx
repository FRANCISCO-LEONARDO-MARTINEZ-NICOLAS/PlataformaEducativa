import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Author, countryFlags } from '../data/authors';

interface AuthorPanelProps {
  authors: Author[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const AuthorPanel: React.FC<AuthorPanelProps> = ({
  authors,
  currentIndex,
  onClose,
  onNext,
  onPrevious
}) => {
  const author = authors[currentIndex];
  
  if (!author) return null;

  const handleVideoClick = () => {
    window.open(author.videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="fixed right-0 top-0 h-full w-full md:w-96 z-50"
      >
        <div className="h-full bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-blue-900/95 backdrop-blur-xl border-l border-cyan-400/30 shadow-2xl">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-cyan-400/30">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{countryFlags[author.country]}</span>
                <motion.span
                  className="text-cyan-400 font-orbitron font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {author.country}
                </motion.span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/40 transition-colors text-red-400 hover:text-red-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Author Image */}
              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-lg">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-purple-400/20"></div>
                </div>
                <div className="absolute -inset-4 rounded-full border border-cyan-400/30 animate-pulse"></div>
              </motion.div>

              {/* Author Name */}
              <motion.h2
                className="text-2xl font-orbitron font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ textShadow: '0 0 20px rgba(0, 247, 255, 0.5)' }}
              >
                {author.name}
              </motion.h2>

              {/* Life Dates */}
              <motion.div
                className="text-center text-gray-300 font-exo"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-600/30">
                  {author.birth} - {author.death}
                </span>
              </motion.div>

              {/* Info Cards */}
              <div className="space-y-4">
                <InfoCard
                  title="Aporte Principal"
                  content={author.mainContribution}
                  delay={0.5}
                  icon="🎓"
                />
                <InfoCard
                  title="Frase Clave"
                  content={`"${author.keyPhrase}"`}
                  delay={0.6}
                  icon="💭"
                />
                <InfoCard
                  title="Concepto Central"
                  content={author.concept}
                  delay={0.7}
                  icon="🧠"
                />
              </div>

              {/* Video Section */}
              <motion.div
                className="space-y-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="font-orbitron font-bold text-cyan-400 text-sm flex items-center space-x-2">
                  <span className="text-lg">🎬</span>
                  <span>Video Educativo</span>
                </h3>
                <motion.button
                  onClick={handleVideoClick}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-orbitron font-bold text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg border border-purple-400/30"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 25px rgba(147, 51, 234, 0.5)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play size={20} className="fill-current" />
                  <span>Ver Video</span>
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>
                <p className="text-xs text-gray-400 text-center font-exo">
                  Se abrirá en una nueva pestaña
                </p>
              </motion.div>
            </div>

            {/* Navigation */}
            {authors.length > 1 && (
              <div className="flex justify-between items-center p-4 border-t border-cyan-400/30">
                <button
                  onClick={onPrevious}
                  disabled={currentIndex === 0}
                  className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-cyan-400"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <span className="text-gray-400 font-exo text-sm">
                  {currentIndex + 1} de {authors.length}
                </span>
                
                <button
                  onClick={onNext}
                  disabled={currentIndex === authors.length - 1}
                  className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-cyan-400"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const InfoCard: React.FC<{
  title: string;
  content: string;
  delay: number;
  icon: string;
}> = ({ title, content, delay, icon }) => (
  <motion.div
    className="p-4 bg-gray-800/30 rounded-lg border border-cyan-400/20 backdrop-blur-sm"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay }}
    whileHover={{ 
      borderColor: 'rgba(0, 247, 255, 0.5)',
      boxShadow: '0 0 20px rgba(0, 247, 255, 0.2)'
    }}
  >
    <div className="flex items-start space-x-3">
      <span className="text-xl">{icon}</span>
      <div>
        <h3 className="font-orbitron font-bold text-cyan-400 text-sm mb-2">
          {title}
        </h3>
        <p className="text-gray-300 font-exo text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  </motion.div>
);