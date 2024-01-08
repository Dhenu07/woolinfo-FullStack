import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Load from "./pages/Load"
import Signup from "./pages/signup";
import Login from './pages/login';
import "./App.css";
import Dashboad from './pages/dashboard';
import Home from './pages/Sidebar-pages/home';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>    
        <Route index element={<Load />} />
        <Route path="/load" element={<Load />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboad />} />
        <Route path="/home" element={<Home />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}