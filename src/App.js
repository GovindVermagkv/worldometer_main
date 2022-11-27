import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Login from "./components/Credential/Login";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main";
import Register from "./components/Credential/ragister"
import ErrorPage from "./components/Errorpage/Error";
import Profile from "./components/Profile/Profile"

import Converter from "./components/ExchangeRate/Converter"

import About from "./components/About/About";

import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="currency" element={<Converter />} />
            <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}