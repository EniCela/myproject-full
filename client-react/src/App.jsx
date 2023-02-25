import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';

import ReadXml from './components/xml/ReadXmlFile';
import Home from './components/Home';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Index1 from './components/items/Index1';
import Index2 from './components/items/Index2';
import Index3 from './components/items/Index3';
import Index4 from './components/items/Index4';

axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/read-xml' element={<ReadXml />} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Register/>} />
                <Route exact path='/categoria-prodotto/:getcate' element={<Index1/>} />
                <Route exact path='/categoria-prodotto/:getcate/:getsubcate' element={<Index2/>} />
                <Route exact path='/categoria-prodotto/:getcate/:getsubcate/:getsubsubcate' element={<Index3/>} />
                <Route exact path='/categoria-prodotto/:getcate/:getsubcate/:getsubsubcate/:getsubsubsubcate' element={<Index4/>} />
            </Routes>
        </Router>
    );
}

export default App;
