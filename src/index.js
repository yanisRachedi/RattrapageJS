import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import App from "./App";
import page1 from "./page1";
import page2 from "./page2";
import page3 from "./page3";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">page1</Link>
        <Link to="/about">page2</Link>
        <Link to="/contact">page3</Link>
      </nav>
        <Switch>
            <Route exact path="/" component={page1} />
            <Route path="/about" component={page2} />
            <Route path="/contact" component={page3} />
        </Switch>
    </BrowserRouter>
    );
}
