import './App.scss';
import Navbar from './components/Navbar';
import ItemListContainer from './components/itemListContainer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer saludar="greetings" />

    </div>
  );
}

export default App;
