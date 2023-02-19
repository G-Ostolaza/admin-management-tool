import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Layout from './components/Layout';
import Adduser from './components/Adduser';
import Userinfo from './components/User_info'
import Update_user from'./components/Update_user'
import React from 'react';

export default function App() {
  return (
    <React.Fragment>
      <Layout/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/userinfo" element={<Userinfo />} />
            <Route path="/adduser" element={<Adduser />} />
            <Route path="/update" element={<Update_user />} />
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

// export default App;
