import Homepage from './pages/homepage';
import Aboutus from './pages/About';
import Contact from './pages/contactus';
import Psychics from './pages/psychics'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Topbar from './components/topbar';
import MainMenu from './components/mainmenu';
import Footer from './components/footer';
import Blogs from './pages/Blogs';
import HowitsWorks from './pages/howitworks';
import BlogPage from './pages/blogPage'
import Login from './auth/login';
import Registor from './auth/register';
import { useLocation } from "react-router-dom";



function App() {
  const location = useLocation();
  const pathName = location.pathname.substring(1);
  console.log("our path is:", pathName)
  return (
    <>
    {
      pathName === "login" ? 
      null
      :
      <>
         <Topbar/>
        <MainMenu/>
      </>
    }
   
     <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/contactus" element={<Contact />}/>
        <Route path='/HowitWorks' element={<HowitsWorks/>}/>
        <Route path="/psychices" element={<Psychics/>}/>
        <Route path="/blogpage" element={<BlogPage />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/registor" element={<Registor />} />
     </Routes>
     {
      pathName === "login" ? 
      null
      :
      <>
        <Footer/>
      </>
    }
      
    </>
  );
}

export default App;
