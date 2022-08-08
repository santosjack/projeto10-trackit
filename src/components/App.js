import { useState } from 'react';
import UserContext from './contexts/UserContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Habits from './Habits/Habits';
import Today from './Today/Today';
import History from './History/History';
import GlobalStyle from '../assets/styles/globalStyle';


export default function App () {
    const [userData, setUserData] = useState(null);
    const contextValue = {userData, setUserData};

    return(
        <UserContext.Provider value={contextValue}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Signup />} />
                    <Route path='/habitos' element={<Habits />} />
                    <Route path='/hoje' element={<Today />} />
                    <Route path='/historico' element={<History />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}