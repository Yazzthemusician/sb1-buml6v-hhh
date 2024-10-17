import React from 'react';
import { translations } from '../translations';

interface FooterProps {
  language: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ language, setCurrentPage }) => {
  const t = translations[language];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Labor iConnect</h3>
            <p>{t.empowering}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={() => setCurrentPage('home')} className="hover:text-primary transition-colors duration-300">{t.home}</a></li>
              <li><a href="#" onClick={() => setCurrentPage('membership')} className="hover:text-primary transition-colors duration-300">{t.membership}</a></li>
              <li><a href="#" onClick={() => setCurrentPage('blog')} className="hover:text-primary transition-colors duration-300">{t.blog}</a></li>
              <li><a href="#" onClick={() => setCurrentPage('forum')} className="hover:text-primary transition-colors duration-300">{t.forum}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t.contact}</h3>
            <p>Email: info@laboriconnect.com</p>
            <p>Phone: +47 123 456 789</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Labor iConnect. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;