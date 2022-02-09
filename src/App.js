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


function App() {
  return (
    <>
    <Topbar/>
    <MainMenu/>
     <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/contactus" element={<Contact />}/>
        {/* <Route path='/HowitWorks' element={<HowitsWorks/>}/> */}
        <Route path="/psychices" element={<Psychics/>}/>
        <Route path="/blogpage" element={<BlogPage />}/>
     </Routes>
      <Footer/>
    </>
  );
}

export default App;
