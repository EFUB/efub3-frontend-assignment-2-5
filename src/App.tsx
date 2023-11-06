import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './common.css';
import Landing from './components/Landing';
import Diary from './components/Diary/Diary';
import LuckyCat from './components/LuckyCat';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/lucky-cat" element={<LuckyCat />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
