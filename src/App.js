import React from 'react';
import { CounterIndex } from './features/counter/CounterIndex';
import { HomePage } from './app/srceenpage/HomePage';
import { Home } from './features/home/Home';
import {KindPage} from './app/srceenpage/KindPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom'

function App() {
  return (
    <Router basename="/google-news">
        <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/data" element={<Home/>} />
        <Route path="/page/:id" element={<KindPage />} />
        </Routes>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;