/*
Program-87: Protected Route
Notes:
1. Allows only authorized users to access routes.
2. Uses Navigate component for redirection.
3. Wrap route component in ProtectedRoute.
4. Can extend for role-based authentication.
5. Alerts user if access denied.
6. Useful for admin/user pages.
7. Keeps routing logic clean.
8. Integrates with context or redux for auth.
9. Simple, reusable component.
10. Modern React Router v6 pattern.
*/

import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const role = "student"; // demo role
  if (role === "student") {
    alert("You are not allowed to access this route");
    return <Navigate to="/home" replace />;
  }
  return children;
}
