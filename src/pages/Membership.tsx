import React from 'react';
import AffiliationForm from '../components/AffiliationForm';
import { translations } from '../translations';

interface MembershipProps {
  language: string;
}

const Membership: React.FC<MembershipProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">{t.membership}</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mb-8 text-center">
          {t.joinCommunity}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Beneficios de la membresía</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Acceso a asesoría legal laboral</li>
              <li>Participación en talleres y seminarios</li>
              <li>Descuentos en servicios asociados</li>
              <li>Acceso al chatbot de asistencia 24/7</li>
              <li>Networking con otros profesionales</li>
            </ul>
          </div>
          <AffiliationForm language={language} />
        </div>
      </div>
    </div>
  );
};

export default Membership;