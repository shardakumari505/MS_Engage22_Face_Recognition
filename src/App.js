import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {UserProvider} from './userauth';
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "./themes.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import Dashboard from './pages/dashboard-page/dashboard-page';
import LoggedInDashboard from './pages/loggedin-dashboard/loggedin-dashboard';
import SigninPage from './pages/signin-page/signin-page';
import SignupPage from './pages/signup-page/signup-page';
import Navbar from './components/navbar-component/navbar-component';
import TransactionPage from './components/transaction-page/transaction-page';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};

`;

const Toggle = styled.button`
    cursor: pointer;
    z-index: 15;
    position: absolute;
    bottom: 1vh;
    right: 1vw;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

function App() {

  const [theme, setTheme] = useState("light");
    const themeToggler = () =>{
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

  const icon = theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
          <UserProvider>
            <Router>
              <Navbar/>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/signin" element={<SigninPage/>} />
                    <Route path="/signup" element={<SignupPage/>} />
                    <Route path="/loggedindashboard" element={<LoggedInDashboard/>} />
                    <Route path="/transactionpage" element={<TransactionPage/>} />
                </Routes>
            </Router>   
          </UserProvider>
          <Toggle onClick={() => themeToggler()}>{icon}</Toggle>
        </div>
      </StyledApp>
    </ThemeProvider>
    );

}

export default App;
