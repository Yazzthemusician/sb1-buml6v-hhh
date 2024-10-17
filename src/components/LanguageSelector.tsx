import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  return (
    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-3 py-1 shadow-md">
      <Globe className="text-gray-600 dark:text-gray-300" size={18} />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="no">Norsk</option>
        <option value="so">Soomaali</option>
        <option value="th">ไทย</option>
        <option value="lt">Lietuvių</option>
        <option value="fr">Français</option>
        <option value="uk">Українська</option>
        <option value="ku">Kurdî</option>
        <option value="tr">Türkçe</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};

export default LanguageSelector;