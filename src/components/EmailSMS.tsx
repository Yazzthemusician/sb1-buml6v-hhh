import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const EmailSMS: React.FC = () => {
  const [messageType, setMessageType] = useState<'email' | 'sms'>('email');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el email o SMS
    console.log('Enviando', messageType, { recipient, subject, message });
    alert(`${messageType.toUpperCase()} enviado con éxito`);
    // Limpiar el formulario
    setRecipient('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full">
      <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
        {messageType === 'email' ? <Mail className="mr-2" /> : <MessageSquare className="mr-2" />}
        Enviar {messageType === 'email' ? 'Email' : 'SMS'}
      </h2>
      <div className="mb-4">
        <button
          onClick={() => setMessageType('email')}
          className={`mr-2 px-4 py-2 rounded ${messageType === 'email' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Email
        </button>
        <button
          onClick={() => setMessageType('sms')}
          className={`px-4 py-2 rounded ${messageType === 'sms' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          SMS
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {messageType === 'email' ? 'Correo electrónico' : 'Número de teléfono'}
          </label>
          <input
            type={messageType === 'email' ? 'email' : 'tel'}
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            required
          />
        </div>
        {messageType === 'email' && (
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Mensaje
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary flex items-center justify-center"
        >
          <Send className="mr-2" size={20} />
          Enviar {messageType === 'email' ? 'Email' : 'SMS'}
        </button>
      </form>
    </div>
  );
};

export default EmailSMS;