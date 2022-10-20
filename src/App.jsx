import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RequireAuth } from './guards/RequireAuth';
import { Dashboard } from './views/Dashboard';
import { Initial } from './views/Initial';
import { NotFound } from './views/NotFound';
import { Usuarios } from './views/Usuarios';
import './App.css'
import { DashboardProvider } from './context/DashboardProvider';

function App() {
  return (
    <Router>
      <DashboardProvider>
        <Routes>
          <Route path='/' element={<Initial/>} />
          <Route path='dashboard' element={
            <RequireAuth element={<Dashboard/>} />
          } />
          <Route path='usuarios' element={
            <RequireAuth element={<Usuarios/>} />
          } />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </DashboardProvider>
    </Router>
  )
}

export default App;
