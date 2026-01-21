/*
Program-86: Routing Example
Notes:
1. React Router DOM v6 syntax.
2. BrowserRouter wraps the entire App.
3. Routes & Route define page paths.
4. "*" route handles 404 pages.
5. Link component for navigation.
6. Modular structure for components.
7. Exact paths avoid conflicts.
8. Nested routing possible.
9. Can combine with ProtectedRoute.
10. Modern routing approach in React.
*/

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Careers from "./components/Careers";
import Products from "./components/Products";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> | 
        <Link to="/aboutus">About Us</Link> | 
        <Link to="/careers">Careers</Link> | 
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
