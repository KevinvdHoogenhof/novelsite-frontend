
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Novels from "./pages/Novels"
import AddNovel from "./pages/AddNovel"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Novels} />
        <Route path='/novels' component={Novels} />
        <Route path='/addnovel' component={AddNovel} />
      </Switch>
    </Router>
  );
}

export default App;