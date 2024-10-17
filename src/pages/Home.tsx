import React from 'react';
import { Users, BookOpen, MessageSquare } from 'lucide-react';
import { translations } from '../translations';

interface HomeProps {
  language: string;
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">{t.welcome}</h1>
      <p className="text-xl mb-8 text-center">
        {t.empowering}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Users className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-bold mb-2 text-primary">{t.membership}</h2>
          <p>{t.joinCommunity}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <BookOpen className="w-12 h-12 mb-4 text-secondary" />
          <h2 className="text-2xl font-bold mb-2 text-secondary">{t.blog}</h2>
          <p>{t.stayInformed}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <MessageSquare className="w-12 h-12 mb-4 text-accent" />
          <h2 className="text-2xl font-bold mb-2 text-accent">{t.forum}</h2>
          <p>{t.participate}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;