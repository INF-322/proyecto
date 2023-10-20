import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Main from './components/Index';

function App() {
  return (
    <div className="App bg-[#F7F7F7]">
      <Navbar />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;


