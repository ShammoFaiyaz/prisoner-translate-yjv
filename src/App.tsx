import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import OverviewPage from './pages/OverviewPage';
import RealTimeMonitorPage from './pages/RealTimeMonitorPage';
import SecurityPage from './pages/SecurityPage';
import OperationsPage from './pages/OperationsPage';
import LegalJusticePage from './pages/LegalJusticePage';
import HealthcarePage from './pages/HealthcarePage';
import LanguageAnalyticsPage from './pages/LanguageAnalyticsPage';
import Vision2030Page from './pages/Vision2030Page';
import SessionReportPage from './pages/SessionReportPage';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="monitor" element={<RealTimeMonitorPage />} />
          <Route path="report/:id" element={<SessionReportPage />} />
          <Route path="security" element={<SecurityPage />} />
          <Route path="operations" element={<OperationsPage />} />
          <Route path="legal-justice" element={<LegalJusticePage />} />
          <Route path="health" element={<HealthcarePage />} />
          <Route path="languages" element={<LanguageAnalyticsPage />} />
          <Route path="vision-2030" element={<Vision2030Page />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}


