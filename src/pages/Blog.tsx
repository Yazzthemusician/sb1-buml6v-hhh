import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    { title: "Nuevas leyes laborales en 2023", date: "2023-03-15" },
    { title: "Cómo negociar mejores condiciones de trabajo", date: "2023-03-10" },
    { title: "El impacto de la automatización en el empleo", date: "2023-03-05" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Blog</h1>
      <div className="max-w-3xl mx-auto">
        {blogPosts.map((post, index) => (
          <div key={index} className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">Publicado el {post.date}</p>
            <a href="#" className="text-blue-500 hover:text-blue-600 mt-2 inline-block">Leer más</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;