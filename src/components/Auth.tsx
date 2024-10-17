import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { translations } from '../translations';

interface AuthProps {
  onLogin: (user: { username: string; role: string }) => void;
  language: string;
}

const Auth: React.FC<AuthProps> = ({ onLogin, language }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí deberías implementar una autenticación real
    if (username === 'admin' && password === 'adminpass') {
      onLogin({ username, role: 'admin' });
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="bg-white dark:bg-green-800 rounded-lg shadow-lg p-8 max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-green-800 dark:text-green-200 flex items-center justify-center">
        <LogIn className="mr-2" /> {t.login}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-green-700 dark:text-green-300 mb-2">{t.username}</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:text-white"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-green-700 dark:text-green-300 mb-2">{t.password}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:text-white"
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          {t.login}
        </button>
      </form>
    </div>
  );
};

export default Auth;