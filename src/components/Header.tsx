import React from 'react';
import { Home, Users, BookOpen, MessageSquare, Newspaper, User } from 'lucide-react';
import { translations } from '../translations';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  user: { username: string; role: string } | null;
  onLogout: () => void;
  language: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, user, onLogout, language }) => {
  const t = translations[language];

  return (
    <header className="bg-white dark:bg-green-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-green-800 dark:text-green-200">Labor iConnect</h1>
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex items-center space-x-2 ${currentPage === 'home' ? 'text-green-600 dark:text-green-400' : 'text-green-800 dark:text-green-200'}`}
          >
            <Home size={20} />
            <span>{t.home}</span>
          </button>
          <button
            onClick={() => setCurrentPage('membership')}
            className={`flex items-center space-x-2 ${currentPage === 'membership' ? 'text-green-600 dark:text-green-400' : 'text-green-800 dark:text-green-200'}`}
          >
            <Users size={20} />
            <span>{t.membership}</span>
          </button>
          <button
            onClick={() => setCurrentPage('blog')}
            className={`flex items-center space-x-2 ${currentPage === 'blog' ? 'text-green-600 dark:text-green-400' : 'text-green-800 dark:text-green-200'}`}
          >
            <BookOpen size={20} />
            <span>{t.blog}</span>
          </button>
          <button
            onClick={() => setCurrentPage('forum')}
            className={`flex items-center space-x-2 ${currentPage === 'forum' ? 'text-green-600 dark:text-green-400' : 'text-green-800 dark:text-green-200'}`}
          >
            <MessageSquare size={20} />
            <span>{t.forum}</span>
          </button>
          <button
            onClick={() => setCurrentPage('news')}
            className={`flex items-center space-x-2 ${currentPage === 'news' ? 'text-green-600 dark:text-green-400' : 'text-green-800 dark:text-green-200'}`}
          >
            <Newspaper size={20} />
            <span>{t.news}</span>
          </button>
        </div>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-green-800 dark:text-green-200">Welcome, {user.username}</span>
            <button
              onClick={() => setCurrentPage('admin')}
              className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              <User size={20} />
              <span>Dashboard</span>
            </button>
            <button
              onClick={onLogout}
              className="text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              Log out
            </button>
          </div>
        ) : (
          <button
            onClick={() => setCurrentPage('admin')}
            className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            {t.login}
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;