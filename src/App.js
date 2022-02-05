import Homepage from './pages/homepage';
import Aboutus from './pages/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Topbar from './components/topbar';
import MainMenu from './components/mainmenu';
import Footer from './components/footer';


function App() {
  return (
    <>
    <Topbar/>
    <MainMenu/>
     <Routes>
        <Route path="/" element={<Homepage />}/>
        
     </Routes>
      <Footer/>
    </>
  );
}

export default App;
