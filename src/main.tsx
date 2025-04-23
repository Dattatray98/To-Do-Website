// main.tsx
import React from 'react';
import './index.css'; // Make sure this import exists
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AddTaskPage from './pages/AddTaskPage';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/add-task" element={<AddTaskPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
