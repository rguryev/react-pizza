import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {Header} from './components';
import {Cart, Home} from './pages';

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;