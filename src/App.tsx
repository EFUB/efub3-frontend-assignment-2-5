import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage";
import MyPage from "./pages/Mypage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
