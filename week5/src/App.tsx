import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Memo from "./page/Memo";
import New from "./page/New";
import Edit from "./page/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memo/:id" element={<Memo />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
