import React, { useState, useEffect } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { translations } from '../translations';

interface ChatBotProps {
  language: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ language }) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const t = translations[language];

  useEffect(() => {
    const savedApiKey = localStorage.getItem('openaiApiKey');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');

      if (!apiKey) {
        setMessages(prev => [...prev, { text: "Error: API Key de OpenAI no configurada.", isUser: false }]);
        return;
      }

      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }]
          })
        });

        const data = await response.json();
        if (data.choices && data.choices[0]) {
          setMessages(prev => [...prev, { text: data.choices[0].message.content, isUser: false }]);
        } else {
          throw new Error('Respuesta inesperada de la API');
        }
      } catch (error) {
        console.error('Error al llamar a la API de OpenAI:', error);
        setMessages(prev => [...prev, { text: "Lo siento, hubo un error al procesar tu mensaje.", isUser: false }]);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-green-800 rounded-lg shadow-lg p-4 max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200 flex items-center">
        <MessageSquare className="mr-2" /> {t.chatbot}
      </h2>
      <div className="h-64 overflow-y-auto mb-4 bg-green-100 dark:bg-green-700 rounded p-2">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.isUser ? 'bg-green-600 text-white' : 'bg-green-300 dark:bg-green-600 text-green-800 dark:text-white'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:text-white"
          placeholder={t.writeMessage}
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white p-2 rounded-r-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;