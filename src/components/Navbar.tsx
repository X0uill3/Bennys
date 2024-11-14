import { Link } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-yellow-500" />
              <span className="font-bold text-xl">Benny's Fantastic</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
                Accueil
              </Link>
              <Link to="/devis" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
                Devis
              </Link>
              {user && (
                <Link to={user.role === 'admin' ? '/admin' : '/employe'} 
                      className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
                  {user.role === 'admin' ? 'Espace Admin' : 'Espace Employé'}
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500"
                  onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
            <Link to="/devis" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500"
                  onClick={() => setIsOpen(false)}>
              Devis
            </Link>
            {user && (
              <Link to={user.role === 'admin' ? '/admin' : '/employe'}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500"
                    onClick={() => setIsOpen(false)}>
                {user.role === 'admin' ? 'Espace Admin' : 'Espace Employé'}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}