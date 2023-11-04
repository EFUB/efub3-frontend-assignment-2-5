import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./component/Layout/DefaultLayout";
import Navbar from "./component/Navigation/NavBar";
import DiaryList from "./pages/DiaryList";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Main />} />
          <Route path="diary" element={<DiaryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
