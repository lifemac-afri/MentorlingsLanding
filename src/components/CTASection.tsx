import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import { WhatsAppModal } from './WhatsAppModal';
import { useState } from 'react';

const benefits = [
  'Free forever for Basic 7–9 students',
  'AI-powered mentor matching in minutes',
  'Access to 150+ vetted industry experts',
  'Works offline—no data, no problem'
];

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 rounded-3xl border border-gray-200 shadow-lg overflow-hidden"
        >
          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 p-12 md:p-16 lg:p-20 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200">
                  <Heart className="w-4 h-4 text-[#050083]" />
                  <span className="text-sm font-medium text-[#050083]">Join the Movement</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-teal-900 bg-clip-text text-transparent">
                    Ready to be part of the Paradigm Shift?
                  </span>
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you're a student looking for a path or a professional looking to give back, 
                  Mentorlings is your platform for change.
                </p>
              </div>

              {/* Benefits list */}
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-xl bg-[#050083] text-white font-semibold shadow-lg hover:opacity-90 transition-opacity"
                >
                  <span className="flex items-center justify-center gap-2">
                    Download App
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-xl border-2 border-gray-300 bg-white font-semibold hover:border-[#050083] transition-colors"
                >
                  Become a Mentor
                </motion.button>
              </div>

              {/* Trust note */}
              <div className="pt-4">
                <p className="text-sm text-gray-600 italic">
                  Originally founded as PSP. Now empowering thousands through the power of AI.
                </p>
              </div>
            </div>

            {/* Right content - Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Students', value: '3,000+', gradient: 'from-blue-500 to-teal-500' },
                { label: 'Mentors', value: '150+', gradient: 'from-purple-500 to-pink-500' },
                { label: 'Match Rate', value: '94%', gradient: 'from-orange-500 to-red-500' },
                { label: 'Districts', value: '12+', gradient: 'from-emerald-500 to-teal-500' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-2"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}