import { LegalLayout } from '../components/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="February 6, 2026">
      <div className="space-y-8 text-gray-600 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you create an account, update your profile, 
            or communicate with us. This may include your name, email address, educational background, 
            and any other information you choose to provide.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our services;</li>
            <li>Connect mentees with appropriate mentors based on our AI matching algorithm;</li>
            <li>Communicate with you about updates, security alerts, and support messages;</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">3. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, 
            misuse, and unauthorized access, disclosure, alteration, and destruction.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:privacy@mentorlings.com" className="text-[#050083] font-medium hover:underline">
              privacy@mentorlings.com
            </a>
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
