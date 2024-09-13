import './App.css';
import { About } from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';


function App() {
  return (
    <>
      <Navbar />
      <div id='hom'><Home /></div>
      <div id='abo'><About /></div>
      <div id='serv'><Services /></div>
      <div id='foot'><Footer /></div>
    </>
  );
}

export default App;
