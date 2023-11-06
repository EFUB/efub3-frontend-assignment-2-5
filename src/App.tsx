import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import MyPage from "./pages/MyPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<GalleryPage />} />
				<Route path="/my" element={<MyPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
