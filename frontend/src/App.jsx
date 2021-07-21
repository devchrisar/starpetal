import "./App.scss";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/itemDetailContainer";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./components/sideBar";
import Footer from "./components/footer/footer";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

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
            <Route path="/">
              <ItemDetailContainer />
              <SideBar />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
