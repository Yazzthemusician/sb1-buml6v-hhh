import React, { useState } from 'react';
import { User, UserPlus, UserMinus } from 'lucide-react';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'admin' },
    { id: 2, name: 'Regular User', email: 'user@example.com', role: 'user' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'user' });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: '', email: '', role: 'user' });
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="bg-white dark:bg-green-800 rounded-lg shadow-lg p-4 w-full">
      <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200 flex items-center">
        <User className="mr-2" /> Gestión de Usuarios
      </h2>
      <form onSubmit={handleAddUser} className="mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Nombre"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:text-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:text-white"
            required
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:text-white"
          >
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
          <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            <UserPlus size={20} />
          </button>
        </div>
      </form>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center bg-green-100 dark:bg-green-700 p-2 rounded">
            <span className="text-green-800 dark:text-green-200">{user.name} ({user.email}) - {user.role}</span>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              <UserMinus size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;