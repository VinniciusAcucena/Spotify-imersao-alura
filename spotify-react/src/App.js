import './App.css';
import Header from './Header/Header';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/Footer';
import Main from './Main/Main';

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Footer></Footer>
      <Main></Main>
    </div>
    
  );
}

export default App;
