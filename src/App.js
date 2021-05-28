import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Search from "./components/Search/Search";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/country/:countryName">
          <CountryDetails />
        </Route>
        <Route path="/search/:searchKeyword">
          <Search />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
