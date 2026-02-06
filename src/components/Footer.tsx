import { motion } from 'motion/react';
import { Sparkles, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { toast } from 'sonner';

const footerLinks = {
  Product: [
    { name: 'Features', href: '/#features' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Roadmap', href: '/#features' }
  ],
  Company: [
    { name: 'About Us', href: '/#about' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: 'mailto:hello@mentorlings.com' }
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    return { q: `${a} + ${b}`, a: a + b };
  });
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parseInt(userAnswer) !== captcha.a) {
      toast.error("Incorrect CAPTCHA answer. Please try again.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("507e506a-c540-4246-bc47-894417a34e45");

    const payload = {
      sessionUuid: crypto.randomUUID(),
      respondentUuid: crypto.randomUUID(),
      responses: {
        "507e506a-c540-4246-bc47-894417a34e45": email,
      },
      captchas: {},
      isCompleted: true,
      password: "",
    };

    try {
      const response = await fetch("https://api.tally.so/forms/MeRBKM/respond", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      toast.success("Thanks for subscribing!");
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/ios-light.png" alt="Mentorlings" className="w-8 h-8 object-contain" />
              <span className="text-xl font-semibold text-[#050083]">
                Mentorlings
              </span>
            </Link>

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
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
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
            <div className="space-y-4">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-green-50 border border-green-100 p-6 rounded-xl"
                >
                  <p className="text-[#050083] font-bold text-xl mb-1 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    You're on the list!
                  </p>
                  <p className="text-gray-600 text-sm">
                    Thank you for joining Mentorlings. We'll keep you updated on our progress toward 2026.
                  </p>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  <div className="flex gap-3">
                    <input
                      type="email"
                      name="507e506a-c540-4246-bc47-894417a34e45"
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#050083] focus:border-transparent"
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 rounded-xl bg-[#050083] text-white font-medium whitespace-nowrap hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </motion.button>
                  </div>
                  
                  {/* Simple Captcha */}
                  <div className="flex items-center gap-3 bg-gray-50 p-2 px-3 rounded-lg border border-gray-100">
                    <span className="text-xs font-medium text-gray-500">Solve to verify:</span>
                    <span className="text-sm font-bold text-gray-900 bg-white px-2 py-0.5 rounded border border-gray-200">{captcha.q} =</span>
                    <input
                      type="number"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="?"
                      required
                      className="w-16 px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#050083] text-sm text-center"
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2026 Mentorlings. Originally founded as PSP. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-[#050083] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#050083] transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-[#050083] transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
