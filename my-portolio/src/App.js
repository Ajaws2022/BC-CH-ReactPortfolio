// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
// import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <main className="text-gray-400 bg-gray-900 body-font w-full">
      <Header />
        <Routes className="h-3/4">
          <Route exact path='/' element={<About/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
        
      

      
    </main>
    <Footer />
    </BrowserRouter>
    
    
  );
}

export default App;
