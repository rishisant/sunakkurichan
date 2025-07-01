import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';

function App() {
  return (
    <div className="App">
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

    </div>
  );
}

export default App;
