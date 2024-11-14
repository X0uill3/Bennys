import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import EmployeeManagement from './components/EmployeeManagement';
import PricingManagement from './components/PricingManagement';
import ProductManagement from './components/ProductManagement';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('employees');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Administration - {user?.displayName}
            </h3>
          </div>
          
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex flex-wrap">
              <button
                onClick={() => setActiveTab('employees')}
                className={`${
                  activeTab === 'employees'
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Gestion Salariés
              </button>
              <button
                onClick={() => setActiveTab('pricing')}
                className={`${
                  activeTab === 'pricing'
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Gestion Tarifs
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`${
                  activeTab === 'products'
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Gestion Produits
              </button>
            </nav>
          </div>

          <div className="p-4">
            {activeTab === 'employees' && <EmployeeManagement />}
            {activeTab === 'pricing' && <PricingManagement />}
            {activeTab === 'products' && <ProductManagement />}
          </div>
        </div>
      </div>
    </div>
  );
}