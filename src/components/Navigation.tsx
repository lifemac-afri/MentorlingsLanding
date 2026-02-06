import { motion } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppModal } from './WhatsAppModal';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Glassmorphism container */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg shadow-blue-500/5" />
          
          <div className="relative px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/"
                className="flex items-center justify-center gap-2"
              >
                <img src="/ios-light.png" alt="Mentorlings" className="w-8 h-8 object-contain" />
                <span className="text-2xl font-bold text-[#050083] pt-2">
                  Mentorlings
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Features', 'How it Works', 'About'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    to={`/#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
                  >
                    {item}
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-[#050083] hover:opacity-90 transition-opacity text-sm font-medium text-white"
              >
                Become a Mentor
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg" />
              <div className="relative p-6 space-y-4">
                {['Features', 'How it Works', 'About'].map((item) => (
                  <Link
                    key={item}
                    to={`/#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full px-5 py-2.5 rounded-xl bg-[#050083] hover:opacity-90 transition-opacity text-sm font-medium text-white"
                  >
                    Become a Mentor
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.nav>
  );
}