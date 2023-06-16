import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

import Package01 from "./pages/Package01";
import Home from "./pages/Home";
import ScrollToTop from "./ScrollToTop";


function App() {

  return (
    <Router>
      <ScrollToTop>
      <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/package01" element={<Package01/>}></Route>
      </Routes> 
      </div>
      </ScrollToTop>
    </Router> 
  );
}

export default App;
