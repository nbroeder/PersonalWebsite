import './App.css';
import { MainSection } from './components/MainSection';
import { SideBar } from './components/SideBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       {/*<WebsiteHeader></WebsiteHeader>*/}
       <SideBar></SideBar>
       <MainSection></MainSection>
      </header>
    </div>
  );
}

export default App;
