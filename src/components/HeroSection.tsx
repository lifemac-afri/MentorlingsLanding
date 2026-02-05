import { motion } from 'motion/react';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WhatsAppModal } from './WhatsAppModal';
import { useState } from 'react';

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">The Digital Evolution of PSP</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  The Future of Guidance for Ghana's Next Generation
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                Bridging the gap between potential and opportunity. Mentorlings uses AI to connect students in Basic 7–9 with world-class mentors—anytime, anywhere, even offline.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-[#050083] text-white font-semibold shadow-lg hover:opacity-90 transition-opacity"
              >
                <span className="flex items-center justify-center gap-2">
                  Become a Mentor
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">3,000+</div>
                  <div className="text-sm text-gray-600">Students Empowered</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Expert Mentors</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">94%</div>
                  <div className="text-sm text-gray-600">Confidence Boost</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content - 3D mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative flex justify-center items-center">
              <ImageWithFallback
                src="/3d.png"
                alt="3D Mobile App Mockup"
                className="max-h-[750px] w-auto h-auto object-contain"
              />
            </div>

            {/* Floating notification card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 bottom-1/4 w-64 bg-white rounded-2xl border border-gray-200 shadow-lg p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-900">New Match!</div>
                  <div className="text-xs text-gray-600">Kofi A. connected with a Software Engineer</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}