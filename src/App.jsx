import React from 'react';
import './App.css';
import MyLayout from './components/MyLayout/MyLayout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './container/HomePage/container/HomePage';

function App() {
  return (
    <div className="App">
      <MyLayout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </MyLayout>
    </div>
  );
}

export default App;
