import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New message received', time: '2 minutes ago' },
    { id: 2, message: 'You have a meeting at 10:00 AM', time: '1 hour ago' },
    { id: 3, message: 'Task deadline approaching', time: 'yesterday' },
  ]);

  // Function to handle logout
  const handleLogout = async () => {
    try{
        await logout()
    console.log('Logout clicked');
    navigate('/login')
    toast.success("Logout Successfully")

    }
    catch(error)
    {
        console.log(error)
    }
    // Implement your logout logic here
    
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 md:min-h-screen p-4">
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-700">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-700">Profile</a>
            </li>
            {/* Logout Button */}
          
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4 shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-xl">Dashboard</h1>
            <div className="flex items-center space-x-4">
              {/* Profile Option */}
              <a href="#" className="block p-2 hover:bg-blue-700">Profile</a>
              {/* Logout Button */}
              <button onClick={handleLogout} className="p-2 bg-red-600 hover:bg-red-700 rounded">Logout</button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* User Info */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold">User Information</h2>
            <div className="bg-white p-4 shadow rounded mt-2">
              <p>Name: John Doe</p>
              <p>Email: john@example.com</p>
              <p>Role: Admin</p>
            </div>
          </div>

          {/* Notifications */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Notifications</h2>
            <div className="divide-y divide-gray-200">
              {notifications.map(notification => (
                <div key={notification.id} className="py-2">
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Charts */}
          <div>
            <h2 className="text-xl font-semibold">Charts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Add your charts here */}
              <div className="bg-white p-4 shadow rounded">Chart 1</div>
              <div className="bg-white p-4 shadow rounded">Chart 2</div>
              <div className="bg-white p-4 shadow rounded">Chart 3</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
