import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function EmployeeDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('nouvelle-facturation');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Tableau de bord - {user?.displayName}
            </h3>
          </div>
          
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('nouvelle-facturation')}
                className={`${
                  activeTab === 'nouvelle-facturation'
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Nouvelle Facturation
              </button>
              {/* Add more tabs as needed */}
            </nav>
          </div>

          <div className="p-4">
            {activeTab === 'nouvelle-facturation' && (
              <div>
                {/* Implement billing form here */}
                <p>Formulaire de facturation à implémenter</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}