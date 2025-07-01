import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';

import './assets/css/Index.css';

// コンポーネントのインポート
import Navbar from './subcomponents/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* ここにルートを追加 */}
          <Route path="/" element={<div></div>} />
          <Route path="/profile" element={<div>プロフィール</div>} />
          <Route path="/settings" element={<div>設定</div>} />
        </Routes>
      </Router>

      <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={true}
          closeOnClick
          pauseOnHover
          draggable
          toastClassName="toast-base"
          bodyClassName="toast-body"
          progressClassName="toast-progress"
          transition={Zoom}
          transitionDuration={500}
        />

    </>
  );
}

export default App;
