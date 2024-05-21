
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Admin from './Components/Admin';
import Add from './Components/Add';
import Update from './Components/Update';
import Select from './Components/Select';
import Payment from './Components/Payment';
import AboutUs from './Components/AboutUs';
import Delete from './Components/Delete';

import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Register' element={<Register/>}/>
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Select" element={<Select />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
