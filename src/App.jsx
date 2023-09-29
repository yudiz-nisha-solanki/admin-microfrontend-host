import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./routes";
import AdminRoutes from "admin_auth/AdminAuthApp";
import SubAdminRoutes from "sub_admin/SubAdminApp";
import UIApp from 'ui/UIApp'

const App = () => (
  <Router>
    <AllRoutes />
    <AdminRoutes />
    <SubAdminRoutes />
    <UIApp />
  </Router>
);

const root = createRoot(document.getElementById('app'))
root.render(<App />);
