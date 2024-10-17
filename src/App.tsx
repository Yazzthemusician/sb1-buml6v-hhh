import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import LanguageSelector from './components/LanguageSelector';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Blog from './pages/Blog';
import Forum from './pages/Forum';
import News from './pages/News';
import AdminDashboard from './pages/AdminDashboard';
import Auth from './components/Auth';
import { translations } from './translations';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = (userData: { username: string; role: string }) => {
    setUser(userData);
    if (userData.role === 'admin') {
      setCurrentPage('admin');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home language={language} />;
      case 'membership':
        return <Membership language={language} />;
      case 'blog':
        return <Blog language={language} />;
      case 'forum':
        return <Forum language={language} />;
      case 'news':
        return <News language={language} />;
      case 'admin':
        return user && user.role === 'admin' ? (
          <AdminDashboard language={language} />
        ) : (
          <Auth onLogin={handleLogin} language={language} />
        );
      default:
        return <Home language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-green-50 text-green-900 flex flex-col transition-colors duration-300">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        user={user}
        onLogout={handleLogout}
        language={language}
      />
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <LanguageSelector language={language} setLanguage={setLanguage} />
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        {!user && (
          <button
            onClick={() => setCurrentPage('admin')}
            className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            {translations[language].login}
          </button>
        )}
      </div>
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer language={language} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;