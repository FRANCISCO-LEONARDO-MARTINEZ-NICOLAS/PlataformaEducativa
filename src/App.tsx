import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarField } from './components/StarField';
import { InteractiveMap } from './components/InteractiveMap';
import { AuthorPanel } from './components/AuthorPanel';
import { SearchBar } from './components/SearchBar';
import { ThemeToggle } from './components/ThemeToggle';
import { authors, getAuthorsByCountry, Author } from './data/authors';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [currentAuthorIndex, setCurrentAuthorIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', true);

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
    setCurrentAuthorIndex(0);
  };

  const handleAuthorSelect = (author: Author) => {
    const countryAuthors = getAuthorsByCountry(author.country);
    const index = countryAuthors.findIndex(a => a.id === author.id);
    setSelectedCountry(author.country);
    setCurrentAuthorIndex(index);
  };

  const handleClosePanel = () => {
    setSelectedCountry(null);
    setCurrentAuthorIndex(0);
  };

  const handleNextAuthor = () => {
    if (selectedCountry) {
      const countryAuthors = getAuthorsByCountry(selectedCountry);
      setCurrentAuthorIndex((prev) => 
        prev < countryAuthors.length - 1 ? prev + 1 : prev
      );
    }
  };

  const handlePreviousAuthor = () => {
    setCurrentAuthorIndex((prev) => prev > 0 ? prev - 1 : prev);
  };

  const currentAuthors = selectedCountry ? getAuthorsByCountry(selectedCountry) : [];

  const themeClasses = isDarkMode
    ? 'bg-gray-900 text-white'
    : 'bg-gradient-to-br from-orange-100 to-yellow-100 text-gray-900';

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {isDarkMode && <StarField />}
      
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          className="text-center py-8 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={`text-4xl md:text-6xl font-orbitron font-bold mb-4 ${
              isDarkMode
                ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 bg-clip-text text-transparent'
            }`}
            style={{
              textShadow: isDarkMode 
                ? '0 0 30px rgba(0, 247, 255, 0.5)' 
                : '0 0 30px rgba(255, 165, 0, 0.5)'
            }}
            animate={{
              textShadow: isDarkMode
                ? [
                    '0 0 30px rgba(0, 247, 255, 0.5)',
                    '0 0 40px rgba(185, 103, 255, 0.6)',
                    '0 0 30px rgba(0, 247, 255, 0.5)'
                  ]
                : [
                    '0 0 30px rgba(255, 165, 0, 0.5)',
                    '0 0 40px rgba(255, 69, 0, 0.6)',
                    '0 0 30px rgba(255, 165, 0, 0.5)'
                  ]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            CARTOGRAFÍA DEL PENSAMIENTO LATINOAMERICANO
          </motion.h1>
          
          <motion.p
            className={`text-lg md:text-xl font-exo ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Explorando las mentes que forjaron nuestra educación
          </motion.p>
        </motion.header>

        {/* Controls */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <SearchBar authors={authors} onAuthorSelect={handleAuthorSelect} />
          <ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
        </motion.div>

        {/* Map Section */}
        <motion.main
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="relative">
            <InteractiveMap
              onCountryClick={handleCountryClick}
              selectedCountry={selectedCountry}
            />
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full ${
                    isDarkMode ? 'bg-cyan-400' : 'bg-orange-400'
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.main>

        {/* Author Panel */}
        <AnimatePresence>
          {selectedCountry && currentAuthors.length > 0 && (
            <AuthorPanel
              authors={currentAuthors}
              currentIndex={currentAuthorIndex}
              onClose={handleClosePanel}
              onNext={handleNextAuthor}
              onPrevious={handlePreviousAuthor}
            />
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.footer
          className={`text-center py-8 px-4 border-t ${
            isDarkMode ? 'border-cyan-400/20 text-gray-400' : 'border-orange-400/20 text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="font-exo">
            Plataforma educativa interactiva • {new Date().getFullYear()}
          </p>
          <motion.div
            className="flex justify-center space-x-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            {['🎓', '📚', '🌟', '🚀'].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-2xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.footer>
      </div>

      {/* Background Nebula Effect */}
      {isDarkMode && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>
      )}
    </div>
  );
}

export default App;