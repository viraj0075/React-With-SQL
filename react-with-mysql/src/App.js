import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBooks from "./pages/AddBooks";
import Editbooks from "./pages/Editbooks";
import GetBooks from "./pages/GetBooks";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetBooks />} />
          <Route path="/add" element={<AddBooks />} />
          <Route path="/update/:id" element={<Editbooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;