import './App.css';
import { SideBar } from './components/SideBar';
import { WebsiteHeader } from './components/WebsiteHeader';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <WebsiteHeader></WebsiteHeader>
       <SideBar></SideBar>
      </header>
    </div>
  );
}

export default App;
