import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Tweets } from './components/Tweets/Tweets';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/GOITtestTask/" element={<Home />} />
        <Route path="/GOITtestTask/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/GOITtestTask/" />} />
      </Routes>
    </Router>
  );
};
