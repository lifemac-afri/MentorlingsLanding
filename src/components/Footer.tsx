import { motion } from 'motion/react';
import { Sparkles, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Demo', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Help Center', 'Community', 'API'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export function Footer() {
  return (
    <footer className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <img src="/ml_blue.png" alt="Mentorlings" className="w-8 h-8 object-contain" />
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
                Mentorlings
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Empowering Ghana's youth with AI-powered mentorship. The digital evolution of the Paradigm Shift Project—transforming lives, one match at a time.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:border-blue-300 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-600" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-gray-900">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
              <p className="text-gray-600">Get the latest news and updates delivered to your inbox.</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2026 Mentorlings. Originally founded as PSP. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
