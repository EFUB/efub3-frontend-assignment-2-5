import "./App.css";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import router from "./router/routing";

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
