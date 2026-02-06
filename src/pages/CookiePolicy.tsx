import { LegalLayout } from '../components/LegalLayout';

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="February 6, 2026">
      <div className="space-y-8 text-gray-600 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you 
            visit a website. They are widely used to make websites work, or work more efficiently, 
            as well as to provide information to the owners of the site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">2. How We Use Cookies</h2>
          <p>
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential cookies:</strong> Required for the operation of our website.</li>
            <li><strong>Analytical cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
            <li><strong>Functionality cookies:</strong> Used to recognize you when you return to our website.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">3. Managing Cookies</h2>
          <p>
            Most web browsers allow some control of most cookies through the browser settings. 
            To find out more about cookies, including how to see what cookies have been set, visit 
            <a href="https://www.aboutcookies.org" className="text-[#050083] hover:underline px-1" target="_blank" rel="noopener noreferrer">
              aboutcookies.org
            </a>.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
