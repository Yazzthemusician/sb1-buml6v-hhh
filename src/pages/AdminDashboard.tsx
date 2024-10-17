import React, { useState } from 'react';
import DocumentManagement from '../components/DocumentManagement';
import EmailCampaign from '../components/EmailCampaign';
import UserManagement from '../components/UserManagement';
import ChatbotConfig from '../components/ChatbotConfig';

interface AdminDashboardProps {
  language: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState('documents');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Panel de Administración</h1>
      <div className="mb-4 flex justify-center flex-wrap">
        <button
          onClick={() => setActiveTab('documents')}
          className={`px-4 py-2 m-1 rounded ${activeTab === 'documents' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'}`}
        >
          Documentos
        </button>
        <button
          onClick={() => setActiveTab('emailCampaign')}
          className={`px-4 py-2 m-1 rounded ${activeTab === 'emailCampaign' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'}`}
        >
          Campañas de Correo
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 m-1 rounded ${activeTab === 'users' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'}`}
        >
          Gestión de Usuarios
        </button>
        <button
          onClick={() => setActiveTab('chatbotConfig')}
          className={`px-4 py-2 m-1 rounded ${activeTab === 'chatbotConfig' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'}`}
        >
          Configuración del Chatbot
        </button>
      </div>
      <div className="bg-white dark:bg-green-800 rounded-lg shadow-lg p-6">
        {activeTab === 'documents' && <DocumentManagement />}
        {activeTab === 'emailCampaign' && <EmailCampaign />}
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'chatbotConfig' && <ChatbotConfig />}
      </div>
    </div>
  );
};

export default AdminDashboard;