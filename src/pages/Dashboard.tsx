import React, { useState } from 'react';
import DocumentManagement from '../components/DocumentManagement';
import EmailSMS from '../components/EmailSMS';
import ChatBot from '../components/ChatBot';

interface DashboardProps {
  user: { username: string; role: string };
  language: string;
}

const Dashboard: React.FC<DashboardProps> = ({ user, language }) => {
  const [activeTab, setActiveTab] = useState('documents');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">Dashboard</h1>
      <p className="text-xl mb-8 text-center">
        Bienvenido, {user.username}. Tu rol es: {user.role}
      </p>
      <div className="mb-4 flex justify-center">
        <button
          onClick={() => setActiveTab('documents')}
          className={`px-4 py-2 mr-2 rounded ${activeTab === 'documents' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Documentos
        </button>
        <button
          onClick={() => setActiveTab('emailsms')}
          className={`px-4 py-2 mr-2 rounded ${activeTab === 'emailsms' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Email/SMS
        </button>
        <button
          onClick={() => setActiveTab('chatbot')}
          className={`px-4 py-2 rounded ${activeTab === 'chatbot' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          ChatBot
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {activeTab === 'documents' && <DocumentManagement />}
        {activeTab === 'emailsms' && <EmailSMS />}
        {activeTab === 'chatbot' && <ChatBot language={language} />}
      </div>
    </div>
  );
};

export default Dashboard;