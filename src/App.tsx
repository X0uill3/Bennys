import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import EmployeePortal from './pages/EmployeePortal';
import AdminPortal from './pages/AdminPortal';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-zinc-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devis" element={<Quote />} />
            <Route path="/employe/*" element={<EmployeePortal />} />
            <Route path="/admin/*" element={<AdminPortal />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;