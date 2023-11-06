import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import NavBar from "./NavBar";
import TodoList from "./TodoList";
import Memo from "./Memo";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/todo" element={<TodoList />} />
          <Route path="/memo" element={<Memo />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
