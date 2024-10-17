import React from 'react';
import { Newspaper } from 'lucide-react';
import { translations } from '../translations';

interface NewsProps {
  language: string;
}

const News: React.FC<NewsProps> = ({ language }) => {
  const t = translations[language];

  const newsItems = [
    { title: "Nuevas regulaciones laborales aprobadas", date: "2023-06-15" },
    { title: "Sindicato logra acuerdo histórico con empresa multinacional", date: "2023-06-10" },
    { title: "Próximo seminario: Derechos laborales en la era digital", date: "2023-06-05" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800 dark:text-green-200">{t.news}</h1>
      <div className="max-w-3xl mx-auto">
        {newsItems.map((item, index) => (
          <div key={index} className="mb-6 p-6 bg-white dark:bg-green-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-green-800 dark:text-green-200 flex items-center">
              <Newspaper className="mr-2" /> {item.title}
            </h2>
            <p className="text-green-600 dark:text-green-300">Publicado el {item.date}</p>
            <a href="#" className="text-blue-500 hover:text-blue-600 mt-2 inline-block">{t.readMore}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;