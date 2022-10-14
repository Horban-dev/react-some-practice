import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

import NavBar from './navbar/NavBar';
import AppRouter from './pages/AppRouter';
function App() {
    return (
        <BrowserRouter>
        <NavBar/>
        <AppRouter/>
        </BrowserRouter>
    )
}

export default App