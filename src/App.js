import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home, Movie, Search } from "./Pages/pages";
import ScrollToTop from "./Helpers/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="text-gray-50 bg-gray-900 font-main min-h-screen text-sm lg:text-base">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
