import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { PageTwo } from './pages/Page2';
import { PageThree } from './pages/Page3';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<HomePage />} />
      <Route path="/page2"  element={<PageTwo />} />
      <Route path="/page3"  element={<PageThree />} />
    </Routes>
  </BrowserRouter>
);

export default App;