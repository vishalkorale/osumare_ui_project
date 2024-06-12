import './App.css';
import Menubar from './components/Menubar';
import Body from './components/Body';
import Thirdpage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';
import PageLast from './components/PageLast';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Menubar/>
     <Body/>
     <Thirdpage/>
     <FourthPage/>
     <FifthPage/>
     <PageLast/>
     <Connect/>
     <Footer/>
    </div>
  );
}

export default App;
