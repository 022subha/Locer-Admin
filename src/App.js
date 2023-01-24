import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app" style={{ backgroundColor: "#f5f3f3" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
