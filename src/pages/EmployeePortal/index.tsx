import { Routes, Route, Navigate } from 'react-router-dom';
import EmployeeLogin from './EmployeeLogin';
import EmployeeDashboard from './EmployeeDashboard';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function EmployeePortal() {
  return (
    <Routes>
      <Route path="login" element={<EmployeeLogin />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute requiredRole="employee">
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
}