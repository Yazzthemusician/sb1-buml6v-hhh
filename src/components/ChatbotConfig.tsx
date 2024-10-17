import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

const ChatbotConfig: React.FC = () => {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    // Cargar la API key guardada al montar el componente
    const savedApiKey = localStorage.getItem('openaiApiKey');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  const handleSave = () => {
    // Guardar la API key en el localStorage
    localStorage.setItem('openaiApiKey', apiKey);
    alert('API Key guardada correctamente');
  };

  return (
    <div className="bg-white dark:bg-green-800 rounded-lg shadow-lg p-4 w-full">
      <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200 flex items-center">
        <Save className="mr-2" /> Configuración del Chatbot
      </h2>
      <div className="mb-4">
        <label htmlFor="apiKey" className="block text-sm font-medium text-green-700 dark:text-green-300 mb-2">API Key de OpenAI</label>
        <input
          type="password"
          id="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:text-white"
          placeholder="Ingrese su API Key de OpenAI"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-green-600 text-white p-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Guardar API Key
      </button>
    </div>
  );
};

export default ChatbotConfig;