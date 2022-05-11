import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// React components
import Authentication from './containers/authentication/authentication';
import Dashboard from './containers/dashboard/Dashboard';
import Test from './containers/test/Test';

// Features
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Authentication />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/test" exact element={<Test />} />
        <Route path="*" to="/" />
      </Routes>
    </BrowserRouter>
  );
}

// Export
export default App;
