import './App.css';
import Navbar from "./components/navbar";
import Footer1 from './components/footer1';
import Badger from './components/pageone';
import PageTwo from './components/pagetwo';
import Newsletter from './components/newsletter';
import FooterLast from './components/footer2';


function App() 
{
  return(
  <>
  <Navbar/>
  <Footer1/>
  <Badger/>
  <PageTwo/>
  <Newsletter/>
  <FooterLast/>
  </>
  );
}

export default App;
