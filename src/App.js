import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Service from "./routes/service";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import ContentPage from "./Component/ContentPage";
import CreatePost from "./Component/CreatePost";
import PageNotFound from "./routes/404";
import { useContext, useEffect } from "react";
import { Context, server } from './index';
import axios from 'axios';

export default function App() {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/content/:contentId" element={<ContentPage />} />
        <Route path="/new" element={<CreatePost />} />
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/Service" element={<Service />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
