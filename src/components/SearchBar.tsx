import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Author } from '../data/authors';

interface SearchBarProps {
  authors: Author[];
  onAuthorSelect: (author: Author) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ authors, onAuthorSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Author[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      const filtered = authors.filter(author =>
        author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        author.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (author: Author) => {
    onAuthorSelect(author);
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar pensador o país..."
          className="w-full pl-10 pr-10 py-3 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 font-exo backdrop-blur-sm"
          style={{ textShadow: '0 0 10px rgba(0, 247, 255, 0.3)' }}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-400 transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 border border-cyan-400/30 rounded-lg shadow-xl backdrop-blur-xl z-50 max-h-60 overflow-y-auto"
        >
          {results.map((author) => (
            <motion.button
              key={author.id}
              onClick={() => handleSelect(author)}
              className="w-full text-left px-4 py-3 hover:bg-cyan-400/10 transition-colors border-b border-gray-700/30 last:border-b-0"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-8 h-8 rounded-full object-cover border border-cyan-400/30"
                />
                <div>
                  <p className="text-white font-orbitron font-bold text-sm">
                    {author.name}
                  </p>
                  <p className="text-gray-400 font-exo text-xs">
                    {author.country} • {author.birth}-{author.death}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};