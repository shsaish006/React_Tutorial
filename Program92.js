/*
Program-92: Context API
Notes:
1. Provides global state without props drilling.
2. UserContext + ThemeContext example.
3. Wrap App with multiple Providers.
4. useContext hook for consuming values.
5. toggleTheme and login functionality.
6. Clean state management for small apps.
7. Ideal for theme, auth, language, etc.
8. Modern React approach.
9. Functional component usage.
10. Encourages modular design.
*/

// UserContext.js
import { createContext, useState } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Guest" });
  const setLoggedinUser = name => setUser({ name });
  return <UserContext.Provider value={{ user, setLoggedinUser }}>{children}</UserContext.Provider>;
};

// ThemeContext.js
import { createContext, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// Usage in Dashboard.js
import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { ThemeContext } from "./ThemeContext";

export default function Dashboard() {
  const { user, setLoggedinUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: 20, background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <h2>Welcome, {user.name}</h2>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => setLoggedinUser("John Doe")}>Login as John Doe</button>
      <br /><br />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );}