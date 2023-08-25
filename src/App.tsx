import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Import from './Pages/Import';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/search" element={<Search />} />
       <Route path="/import" element={<Import />} />
    </Routes>
    </>
  );
}

export default App;
