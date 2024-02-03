import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Load from "./pages/Load"
import Signup from "./pages/signup";
import Login from './pages/login';
import "./App.css";
import Home from './pages/Sidebar-pages/home';
import Cart from './pages/Sidebar-pages/cart';
import News from './pages/Sidebar-pages/news';
import Education from './pages/Sidebar-pages/education';
import ContactUs from './pages/Sidebar-pages/conus';
import Shop from './pages/Sidebar-pages/shop';
import Profile from './pages/Sidebar-pages/profile';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>    
        <Route index element={<Load />} />
        <Route path="/load" element={<Load />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/news" element={<News />} />
        <Route path="/education" element={<Education/>} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}