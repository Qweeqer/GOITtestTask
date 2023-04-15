// App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Tweets } from './components/Tweets/Tweets';
// import { UserList } from './components/UserList/UserList';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        {/* <Route path="/users" element={<UserList />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
