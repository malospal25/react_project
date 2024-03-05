import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";


function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
        isAuth,
        setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
