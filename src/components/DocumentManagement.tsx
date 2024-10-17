import React, { useState } from 'react';
import { FileText, Upload, Download, Trash2 } from 'lucide-react';

const DocumentManagement: React.FC = () => {
  const [documents, setDocuments] = useState<{ name: string; type: string }[]>([
    { name: 'Contrato colectivo', type: 'pdf' },
    { name: 'Derechos laborales', type: 'docx' },
    { name: 'Formulario de reclamo', type: 'pdf' }
  ]);

  const handleUpload = () => {
    // Simular carga de documento
    const newDoc = { name: `Documento-${Math.floor(Math.random() * 1000)}`, type: 'pdf' };
    setDocuments([...documents, newDoc]);
  };

  const handleDelete = (index: number) => {
    const newDocuments = documents.filter((_, i) => i !== index);
    setDocuments(newDocuments);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full">
      <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
        <FileText className="mr-2" /> Gestión de Documentos
      </h2>
      <div className="mb-4">
        <button onClick={handleUpload} className="bg-secondary text-white p-2 rounded hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary flex items-center">
          <Upload className="mr-2" size={20} /> Subir documento
        </button>
      </div>
      <ul className="space-y-2">
        {documents.map((doc, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <span className="text-text flex items-center">
              <FileText className="mr-2" size={16} />
              {doc.name}.{doc.type}
            </span>
            <div>
              <button className="text-primary hover:text-primary-dark focus:outline-none mr-2">
                <Download size={20} />
              </button>
              <button className="text-accent hover:text-accent-dark focus:outline-none" onClick={() => handleDelete(index)}>
                <Trash2 size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentManagement;