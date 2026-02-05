import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Users, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const whatsappGroupLink = "https://chat.whatsapp.com/YOUR_GROUP_LINK"; // Replace with actual link

  const handleJoinWhatsApp = () => {
    window.open(whatsappGroupLink, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-xl hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Header with image */}
              <div className="relative bg-[#050083] overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 opacity-20">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1645263012668-a6617115f9b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBtZW50b3JzaGlwJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MDIyMjUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mentorship community"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="relative px-8 pt-12 pb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white text-center mb-2">
                    Join Our Mentor Community
                  </h2>
                  <p className="text-blue-50 text-center">
                    Connect with fellow mentors and start making an impact
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 py-8 space-y-6">
                {/* Benefits */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Connect with Mentors</h3>
                      <p className="text-sm text-gray-600">Join 150+ experienced professionals guiding Ghana's youth</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Get Onboarded</h3>
                      <p className="text-sm text-gray-600">Learn about our verification process and how to get started</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Share Resources</h3>
                      <p className="text-sm text-gray-600">Access tips, best practices, and mentorship resources</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Group Info */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-green-700" />
                    <span className="font-semibold text-green-900">Mentorlings Mentor Community</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Click below to join our WhatsApp group and start your journey as a mentor
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-200 font-semibold text-gray-700 hover:border-gray-300 transition-colors"
                  >
                    Maybe Later
                  </button>
                  <button
                    onClick={handleJoinWhatsApp}
                    className="flex-1 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 font-semibold text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Join WhatsApp
                  </button>
                </div>

                {/* Footer note */}
                <p className="text-xs text-gray-500 text-center">
                  By joining, you agree to our mentor guidelines and code of conduct
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}