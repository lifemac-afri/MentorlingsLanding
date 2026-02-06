import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { WhatsAppModal } from './WhatsAppModal';

const mentorSteps = [
  {
    id: 1,
    title: 'Sign Up & Verify',
    description: 'Create your mentor profile and complete our verification process to ensure student safety',
  },
  {
    id: 2,
    title: 'Build Your Profile',
    description: 'Share your expertise, background, and what makes you passionate about mentoring Ghana\'s youth',
  },
  {
    id: 3,
    title: 'Get Matched',
    description: 'Our AI pairs you with students who share your background or aspire to your field',
  },
  {
    id: 4,
    title: 'Start Mentoring',
    description: 'Connect via chat, video calls, or schedule in-person sessions. Guide students through their SHS journey',
  },
  {
    id: 5,
    title: 'Track Impact',
    description: 'See your mentee\'s progress and the real difference you\'re making in their educational journey',
  },
];

const menteeSteps = [
  {
    id: 1,
    title: 'Download the App',
    description: 'Get started on any device—works offline so you can use it anywhere, anytime',
  },
  {
    id: 2,
    title: 'Tell Us About You',
    description: 'Share your interests, challenges, and what you hope to achieve in Basic 7–9',
  },
  {
    id: 3,
    title: 'Meet Your Mentor',
    description: 'AI matches you with a verified mentor who understands your journey and goals',
  },
  {
    id: 4,
    title: 'Start Learning',
    description: 'Ask questions, get advice on SHS selection, and explore career paths through chat or video',
  },
  {
    id: 5,
    title: 'Plan Your Future',
    description: 'Use interactive roadmaps to visualize your path to SHS and beyond with your mentor\'s guidance',
  },
];

export function Timeline() {
  const [activeTab, setActiveTab] = useState<'mentor' | 'mentee'>('mentee');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const steps = activeTab === 'mentor' ? mentorSteps : menteeSteps;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#050083]">
              The Journey to Success
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to guide or be guided, getting started is simple
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-xl">
            <button
              onClick={() => setActiveTab('mentee')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'mentee'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Mentees
            </button>
            <button
              onClick={() => setActiveTab('mentor')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'mentor'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Mentors
            </button>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={`${activeTab}-${step.id}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200 -z-10" />
              )}

              <div className="flex gap-6 pb-12">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#050083] flex items-center justify-center shadow-lg overflow-hidden">
                    <img src="/adaptive-icon-black.png" alt="" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className="text-sm font-semibold text-[#050083] bg-blue-50 px-3 py-1 rounded-full">
                        Step {step.id}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => activeTab === 'mentor' && setIsModalOpen(true)}
            className="px-8 py-4 rounded-xl bg-blue-700 text-white font-semibold shadow-lg hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
          >
            {activeTab === 'mentee' ? 'Get Started as a Mentee' : 'Become a Mentor Today'}
            <CheckCircle className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}