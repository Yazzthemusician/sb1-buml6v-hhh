import React, { useState } from 'react';
import { Send } from 'lucide-react';

const EmailCampaign: React.FC = () => {
  const [campaign, setCampaign] = useState({
    subject: '',
    content: '',
    recipients: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCampaign({ ...campaign, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar la campaña de correo
    console.log('Campaña de correo:', campaign);
    alert('Campaña de correo enviada con éxito');
    // Limpiar el formulario
    setCampaign({ subject: '', content: '', recipients: '' });
  };

  return (
    <div className="bg-white dark:bg-green-800 rounded-lg shadow-lg p-4 w-full">
      <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200 flex items-center">
        <Send className="mr-2" /> Campaña de Correo
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-green-700 dark:text-green-300 mb-2">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={campaign.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-green-700 dark:text-green-300 mb-2">Contenido</label>
          <textarea
            id="content"
            name="content"
            value={campaign.content}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:text-white"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="recipients" className="block text-sm font-medium text-green-700 dark:text-green-300 mb-2">Destinatarios (separados por comas)</label>
          <input
            type="text"
            id="recipients"
            name="recipients"
            value={campaign.recipients}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:text-white"
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          Enviar Campaña
        </button>
      </form>
    </div>
  );
};

export default EmailCampaign;