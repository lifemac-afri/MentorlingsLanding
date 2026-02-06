import { LegalLayout } from '../components/LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="February 6, 2026">
      <div className="space-y-8 text-gray-600 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Mentorlings, you agree to be bound by these Terms of Service 
            and all applicable laws and regulations. If you do not agree with any of these terms, 
            you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) 
            on Mentorlings' website for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">3. User Conduct</h2>
          <p>
            Users are expected to conduct themselves professionally and respectfully within the platform. 
            Any form of harassment, discrimination, or abusive behavior will result in immediate 
            termination of account access.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">4. Disclaimer</h2>
          <p>
            The materials on Mentorlings' website are provided on an 'as is' basis. Mentorlings 
            makes no warranties, expressed or implied, and hereby disclaims and negates all other 
            warranties including, without limitation, implied warranties or conditions of 
            merchantability, fitness for a particular purpose, or non-infringement of intellectual 
            property or other violation of rights.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
