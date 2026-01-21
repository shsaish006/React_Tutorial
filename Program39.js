/*
Program-39: Dark/Light Mode Toggle
Notes:
1. useState hook tracks current theme (isDark boolean).
2. useEffect hook updates document.body class on theme change.
3. Conditional class styling is used to apply dark mode CSS.
4. Button toggles the theme using setIsDark(!isDark).
5. Can be extended for multiple themes (light, dark, custom).
6. Dynamic text shows current theme to the user.
7. CSS class 'dark' applied to body changes background and text color.
8. State updates cause re-render, updating UI automatically.
9. Functional components + hooks simplify theme toggle implementation.
10. Can use localStorage to persist theme between page reloads.
*/

import React, { useState, useEffect } from "react";
import "./ThemeDemo.css"; // Assume .dark class is defined in CSS

export default function ThemeDemo() {
  const [isDark, setIsDark] = useState(false);

  const changeMode = () => setIsDark(!isDark);

  useEffect(() => {
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [isDark]);

  return (
    <div>
      <h2>Dark/Light Mode Toggle</h2>
      <p>This page is in <b>{isDark ? "Dark" : "Light"}</b> mode.</p>
      <button onClick={changeMode}>Go to {!isDark ? "Dark" : "Light"} Mode</button>
    </div>
  );
}
