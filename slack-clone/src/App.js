import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/app.css';

import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <>
      <div className="app">
        <Router>
          {!user ?
            <Login />
            :
            <>
              <Header />
              <div className="app-body">
                <Sidebar />
                <Routes>
                  <Route exact path="/room/:channelId" element={<Chat />} />
                  <Route exact path="/" element={<h1>something</h1>} />
                </Routes>
              </div>
            </>
          }
        </Router>
      </div>
    </>
  );
}

export default App;
