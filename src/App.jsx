import Header from "./component/Header"
import Footer from "./component/Footer"
import LoginBox from "./component/LoginBox"
import Menu from "./component/Menu"
import Contact from "./component/Contact"
import About from "./component/About"
import Etc from "./component/Etc"
import Shop from "./component/Shop"
import Signup from "./component/Signup"

//import Note from "./component/Note"
import {Routes, Route} from 'react-router-dom';


import 'reset-css'
import './scss/App.scss'
import './scss/header.scss'
import './scss/style.scss'

function App() {
  return (
    
    <div className="App">
  
      <Header/>
      <LoginBox/>
    
      <Routes>
        <Route path="/" element={<div className='hide'>메인으로</div>}/>
        <Route path="/signup" element={<div className='hide'>회원가입</div>}/>
        <Route path="/about" element={<div className='hide'>어바웃페이지</div>}/>
        <Route path="/contact" element={<div className='hide'>컨택트페이지</div>}/>
        <Route path="/shop" element={<div className='hide'>온라인샵</div>}/>
        <Route path="/signup" element={<div className='hide'>무해한제한구역</div>}/>
      </Routes>
        <Contact/><Etc/><About/><Shop/><Signup/>
        <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
