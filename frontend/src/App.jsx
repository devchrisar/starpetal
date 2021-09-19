import "./App.scss";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/itemDetailContainer";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import DetailScreenContainer from "./components/DetailScreen/DetailScreenContainer";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Checkout from "./components/CheckoutForm/Checkout";

const MyTheme = createTheme({
  palette: {
    primary: {
      light: "#33ab9f",
      main: "#009688",
      dark: "#00695f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffee33",
      main: "#ffea00",
      dark: "#b2a300",
      contrastText: "#000",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/cart">
              <CheckoutPage />
            </Route>
            <Route path="/products/:id">
              <DetailScreenContainer />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/" exact>
              <ItemDetailContainer />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
