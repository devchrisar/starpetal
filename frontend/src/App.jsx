import "./App.scss";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./components/sideBar";
import Footer from "./components/footer/footer";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import CheckoutCard from "./components/CheckoutCard/CheckoutCard";

function App() {
  return (
    <Router>
      {/* <Route path="/" component={as}></Route> */}
      <div className="App">
        <Navbar />
        {/* <CheckoutPage />
        <CheckoutCard /> */}
        <ItemDetailContainer />
        <SideBar />
        <ItemListContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
