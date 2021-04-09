import './App.css';
import Navbar from './Navbar';
import Submenu from './Submenu';
import Sidebar from './Sidebar';
import Hero from './Hero';

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
        <Submenu />
        <Sidebar />
      </header>
        <Hero />
    </div>
  )
}

export default App;
