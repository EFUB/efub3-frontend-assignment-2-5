import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      <Home />
    </BrowserRouter>
  );
}

export default App;
