import "./App.scss";
import Navbar from "./components/Navbar";
// import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemDetailContainer />
      {/* <ItemListContainer /> */}
    </div>
  );
}

export default App;
