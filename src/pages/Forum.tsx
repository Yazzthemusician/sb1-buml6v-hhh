import React from 'react';
import { MessageSquare } from 'lucide-react';

const Forum: React.FC = () => {
  const forumTopics = [
    { title: "Derechos laborales en el teletrabajo", replies: 15, views: 230 },
    { title: "Experiencias con la negociación colectiva", replies: 8, views: 120 },
    { title: "Salud y seguridad en el trabajo post-pandemia", replies: 22, views: 310 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Foro</h1>
      <div className="max-w-3xl mx-auto">
        {forumTopics.map((topic, index) => (
          <div key={index} className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center">
            <MessageSquare className="w-12 h-12 mr-4 text-blue-500" />
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{topic.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                {topic.replies} respuestas · {topic.views} vistas
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;