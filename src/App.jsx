import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import EmployeeList from './pages/EmployeeList'
import EmployeeProfile from './pages/EmployeeProfile'
import FeedbackSubmission from './pages/FeedbackSubmission'
import PerformanceReport from './pages/PerformanceReport'
import GoalsAndDevelopment from './pages/GoalsAndDevelopment'
import AdminPanel from './pages/AdminPanel'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="employees/:id" element={<EmployeeProfile />} />
          <Route path="feedback" element={<FeedbackSubmission />} />
          <Route path="report/:id" element={<PerformanceReport />} />
          <Route path="goals" element={<GoalsAndDevelopment />} />
          <Route path="admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
